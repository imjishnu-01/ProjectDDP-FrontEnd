<script>
	import { onMount } from 'svelte';
	import { baseAPIURL } from '$lib/components/publicVar';
	import { getCookie } from '$lib/components/cookies';
	/**
	 * @type {string | any[]}
	 */
	let invitations = [];
	const userID = getCookie('userID');
	const token = getCookie('token');

	const fetchInvitations = async () => {
		try {
			const response = await fetch(`${baseAPIURL}/api/invite/sent/${userID}`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
			if (response.ok) {
				invitations = await response.json();
				console.log(invitations);
			} else {
				console.error('Error fetching invitations:', response.statusText);
			}
		} catch (error) {
			console.error('Error fetching invitations:', error);
		}
	};

	onMount(() => {
		fetchInvitations();
	});
</script>

<div class="md:hidden">
	{#if invitations.length > 0}
		<div class="grid-container">
			<!-- Grid for Pending Invitations -->
			<div class="grid-item">
				<h2 class="p-4">Pending Invitations - (Sent)</h2>
				<div class="grid-responsive m-4 p-2">
					{#each invitations as invitation}
						{#if invitation.response_status === 'pending'}
							<div class="grid-subitem m-4">
								<div class="grid-value">
									Received By: {invitation.receiver_firstName}
									{invitation.receiver_lastName}
								</div>

								<div class="grid-value">Role: {invitation.role}</div>

								<div class="grid-value">JD Link: {invitation.jd_link || 'No Link'}</div>

								<div class="grid-value">Message: {invitation.message}</div>
								<div class="grid-value">Sent At: {invitation.sent_at}</div>
							</div>
							<hr />
						{/if}
					{/each}
				</div>
			</div>
			<hr />
			<hr />
			<hr />
			<!-- Grid for Accepted and Rejected Invitations -->
			<div class="grid-item">
				<h2 class="p-4">Accepted/Rejected Invitations</h2>
				<div class="grid-responsive m-4 p-2">
					{#each invitations as invitation}
						{#if invitation.response_status !== 'pending'}
							<div class="grid-subitem m-4">
								<div class="grid-value">
									Received By: {invitation.receiver_firstName}
									{invitation.receiver_lastname}
								</div>

								<div class="grid-value">Company Name: {invitation.company_name}</div>

								<div class="grid-value">Role: {invitation.role}</div>

								<div class="grid-value">Message: {invitation.message}</div>

								<div class="grid-value">Sent At: {invitation.sent_at}</div>

								<div class="grid-value">Status: {invitation.response_status}</div>
							</div>
							<hr />
						{/if}
					{/each}
				</div>
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
			<h2 class="p-4">Pending Invitations - (Sent)</h2>
			<table class="table table-hover">
				<thead>
					<tr>
						<th>Received By</th>
						<th>Role</th>
						<th>JD Link</th>
						<th>Message</th>
						<th>Sent At</th>
					</tr>
				</thead>
				<tbody>
					{#each invitations as invitation}
						{#if invitation.response_status === 'pending'}
							<tr>
								<td>{invitation.receiver_firstName} {invitation.receiver_lastName}</td>
								<td>{invitation.role}</td>
								<td>{invitation.jd_link || 'No Link'}</td>
								<td>{invitation.message}</td>
								<td>{invitation.sent_at}</td>
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
						<th>Received By</th>
						<th>Company Name</th>
						<th>Role</th>
						<th>Message</th>
						<th>Sent At</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{#each invitations as invitation}
						{#if invitation.response_status !== 'pending'}
							<tr>
								<td>{invitation.receiver_firstName} {invitation.receiver_lastname}</td>
								<td>{invitation.company_name}</td>
								<td>{invitation.role}</td>
								<td>{invitation.message}</td>
								<td>{invitation.sent_at}</td>
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
