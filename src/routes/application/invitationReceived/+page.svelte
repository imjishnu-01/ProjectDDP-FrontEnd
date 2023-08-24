<svelte:head>
   <title>Invitation Received</title>
</svelte:head>

<script lang="ts">
	import { onMount } from 'svelte';
	import { modalStore, Modal, Toast, toastStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ToastSettings } from '@skeletonlabs/skeleton';
	import { baseAPIURL } from '$lib/components/publicVar';
	import { goto } from '$app/navigation';
	import { getCookie } from '$lib/components/cookies';
	const userID = getCookie('userID');
	const token = getCookie('token');

	onMount(() => {
		if (!token) {
			// If the token is not available, redirect to the login page
			goto('/login');
		} else {
			// If the token is available, fetch the skills and work experiences
			fetchInvitations();
		}
	});
	/**
	 * @type {string | any[]}
	 */
	let invitations: string | any[] = [];

	const fetchInvitations = async () => {
		try {
			const response = await fetch(`${baseAPIURL}/api/invite/received/${userID}`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
			if (response.ok) {
				invitations = await response.json();
			} else {
				console.error('Error fetching invitations:', response.statusText);
			}
		} catch (error) {
			console.error('Error fetching invitations:', error);
		}
	};

	function inviteAccept(invitationID: string, action: string, status: string) {
		const modal: ModalSettings = {
			type: 'confirm',
			title: 'Invitation action',
			body: `${action}`,
			response: async (r: boolean) => {
				if (r) {
					const success = await updateInvitationStatus(invitationID, status);
					if (success) {
						let invitationSent: ToastSettings = {
							background: 'bg-surface-500',
							message: `Invitation ${status} sucessfull`
						};
						toastStore.trigger(invitationSent);
						modalStore.close();
						fetchInvitations();
					} else {
						let invitationSent: ToastSettings = {
							background: 'bg-tertiary-500',
							message: 'Error, please try again later'
						};
						toastStore.trigger(invitationSent);
						modalStore.close();
						fetchInvitations();
					}
				} else {
					modalStore.close();
					let invitationSent: ToastSettings = {
						background: 'bg-tertiary-500',
						message: 'Cancelled'
					};
					toastStore.trigger(invitationSent);
					fetchInvitations();
				}
			}
		};
		modalStore.trigger(modal);
	}

	export async function updateInvitationStatus(invitationID: string, status: string) {
		// Make the API call to update the invitation status
		try {
			const response = await fetch(`${baseAPIURL}/api/invite/${invitationID}`, {
				method: 'PUT',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ status })
			});
			if (response.ok) {
				// The invitation status was updated successfully
				return true;
			} else {
				// There was an error updating the invitation status
				const errorResponse = await response.json();
				console.error('Error updating invitation status:', errorResponse.error);
				return false;
			}
		} catch (error) {
			console.error('Error updating invitation status:', error);
			return false;
		}
	}
</script>

<div class="md:hidden">
	{#if invitations.length > 0}
		<!-- Grid for Pending Invitations -->
		<div class="grid-container">
			<h2 class="p-4">Pending Invitations - (Received)</h2>
			<div class="grid-responsive m-4 p-2">
				{#each invitations as invitation}
					{#if invitation.response_status === 'pending'}
						<div class="grid-item">
							<div class="grid-content">
								Sent By: {invitation.sender_firstName}
								{invitation.sender_lastName}
							</div>

							<div class="grid-content">Company Name: {invitation.company_name}</div>

							<div class="grid-content">Role: {invitation.role}</div>

							<div class="grid-content">Message: {invitation.message}</div>

							<div class="grid-content">Received On: {invitation.sent_at.substring(0, 10)}</div>

							<div class="grid-action">
								<button
									class="btn bg-primary-500 m-4"
									on:click={() => inviteAccept(invitation.id, 'Accept Invitation', 'accepted')}
									>Accept</button
								>
								<button
									class="btn bg-surface-500 m-4"
									on:click={() => inviteAccept(invitation.id, 'Reject Invitation', 'rejected')}
									>Reject</button
								>
							</div>
						</div>
						<hr />
					{/if}
				{/each}
			</div>
		</div>
	{/if}

	<hr />
	<hr />
	<hr />

	{#if invitations.length > 0}
		<!-- Grid for Accepted/Rejected Invitations -->
		<div class="grid-container">
			<h2 class="p-4">Accepted/Rejected Invitations</h2>
			<div class="grid-responsive">
				{#each invitations as invitation}
					{#if invitation.response_status !== 'pending'}
						<div class="grid-item m-4">
							<div class="grid-value">
								Sendet By:{invitation.sender_firstName}
								{invitation.sender_lastName}
							</div>
							<div class="grid-value">Company Name: {invitation.company_name}</div>
							<div class="grid-value">Role: {invitation.role}</div>
							<div class="grid-value">Status: {invitation.response_status}</div>
						</div>
						<hr />
					{/if}
				{/each}
			</div>
		</div>
	{/if}

	{#if invitations.length === 0}
		<p>No invitations received.</p>
	{/if}
</div>

<div class="hidden md:block">
	{#if invitations.length > 0}
		<!-- Table for Pending Invitations -->
		<div class="table-container">
			<h2 class="p-4">Pending Invitations - (Received)</h2>
			<table class="table table-hover">
				<thead>
					<tr>
						<th>Sender ID</th>
						<th>Company Name</th>
						<th>Role</th>
						<th>Message</th>
						<th>Received On</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{#each invitations as invitation}
						{#if invitation.response_status === 'pending'}
							<tr>
								<td>{invitation.sender_firstName} {invitation.sender_lastName}</td>
								<td>{invitation.company_name}</td>
								<td>{invitation.role}</td>
								<td>{invitation.message}</td>
								<td>{invitation.sent_at.substring(0, 10)}</td>
								<td>
									<button
										class="btn bg-primary-500 m-4"
										on:click={() => inviteAccept(invitation.id, 'Accept Invitation', 'accepted')}
										>Accept</button
									>
									<button
										class="btn bg-surface-500 m-4"
										on:click={() => inviteAccept(invitation.id, 'Reject Invitation', 'rejected')}
										>Reject</button
									>
								</td>
							</tr>
						{/if}
					{/each}
				</tbody>
				<tfoot>
					<!--<tr>
          <th colspan="5">Total Pending Invitations</th>
          <td>{invitations.filter(invitation => invitation.response_status === 'pending').length}</td>
          <td></td>  Empty cell for alignment 
        </tr> -->
				</tfoot>
			</table>
		</div>
		<hr />
		<hr />
		<hr />
		<!-- Table for Accepted and Rejected Invitations -->
		<div class="table-container">
			<h2 class="p-4">Accepted/Rejected Invitations</h2>
			<table class="table table-hover">
				<thead>
					<tr>
						<th>Sender ID</th>
						<th>Company Name</th>
						<th>Role</th>
						<th>Message</th>
						<th>Received On</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{#each invitations as invitation}
						{#if invitation.response_status !== 'pending'}
							<tr>
								<td>{invitation.sender_firstName} {invitation.sender_lastName}</td>
								<td>{invitation.company_name}</td>
								<td>{invitation.role}</td>
								<td>{invitation.message}</td>
								<td>{invitation.sent_at.substring(0, 10)}</td>
								<td>{invitation.response_status}</td>
							</tr>
						{/if}
					{/each}
				</tbody>
				<tfoot>
					<!--<tr>
        <th colspan="5">Total Accepted/Rejected Invitations</th>
        <td>{invitations.filter(invitation => invitation.response_status !== 'pending').length}</td>
        <td></td>  Empty cell for alignment
      </tr>-->
				</tfoot>
			</table>
		</div>
	{/if}
	{#if invitations.length === 0}
		<p>No invitations received.</p>
	{/if}
</div>
