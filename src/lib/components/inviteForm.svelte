<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { Toast, toastStore, modalStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { baseAPIURL } from "$lib/components/publicVar";

	import { getCookie } from './cookies';
	const senderID = getCookie('userID');
	const token = getCookie('token');
	
	let receiverID = $page.params.slug;
	let company = '';
	let role = '';
	let jdLink = '';
	let message = '';
	const sendInvite = async () => {
		try {
			const response = await fetch(`${baseAPIURL}/api/invite`, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					user_id: receiverID,
					sender_id: senderID,
					company_name: company,
					role: role,
					jdLink: jdLink,
					message: message
				})
			});

			if (response.ok) {
				// Invitation sent successfully
				const inviteSent: ToastSettings = {
					background: 'bg-primary-500',
					message: 'Invitent sent sucseefully'
				};
				modalStore.close();
				toastStore.trigger(inviteSent);

				// Optionally, you can redirect to a success page or perform any other action here
			} else {
				//console.error('Error sending job invitation:', response.statusText);
				const inviteFailed: ToastSettings = {
					background: 'bg-surface-500',
					message: 'Error sending job invitation. Please full required fields again.'
				};
				modalStore.close();
				toastStore.trigger(inviteFailed);
			}
		} catch (error) {
			//console.error('Error sending job invitation:', error);
			const inviteFailed: ToastSettings = {
				background: 'bg-surface-500',
				message: 'Error sending job invitation. Please try again.'
			};
			modalStore.close();
			toastStore.trigger(inviteFailed);
		}
	};
</script>

<div class="container">
	<form class="card p-4 flex flex-col gap-3">
		<h2>Send Invite</h2>
		<input class="input" type="text" bind:value={company} placeholder="Company" />
		<input class="input" type="text" bind:value={role} placeholder="Role" />
		<input class="input" type="text" bind:value={jdLink} placeholder="Jd Link (optional)" />
		<textarea class="textarea" rows="8" bind:value={message} placeholder="Message" />
		<button
			type="button"
			class="btn bg-primary-500 ml-auto"
			style="width:10rem"
			on:click={sendInvite}
		>
			Send Invite
		</button>
	</form>
</div>
