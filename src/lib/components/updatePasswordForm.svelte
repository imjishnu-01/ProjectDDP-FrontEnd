<script lang="ts">
	import { baseAPIURL } from './publicVar';
	import { toastStore, Toast, modalStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { getCookie } from './cookies';

	let currentPassword = '';
	let newPassword = '';
	let confirmNewPassword = '';
	let resetError = '';

	const userID = getCookie('userID');
	const token = getCookie('token');

	const resetPassword = async () => {
		if (newPassword !== confirmNewPassword) {
			resetError = "New passwords don't match";
			return;
		}

		const response = await fetch(`${baseAPIURL}/api/user/update-password`, {
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				userId: userID, // Replace with the actual user ID
				currentPassword,
				newPassword
			})
		});

		if (response.ok) {
			const resetPasswordToast: ToastSettings = {
				background: 'bg-primary-500',
				message: 'Password updated successfully'
			};
			modalStore.close();
			toastStore.trigger(resetPasswordToast);
		} else {
			const data = await response.json();
            resetError = data.error || 'An error occurred'
			const resetPasswordToast: ToastSettings = {
				background: 'bg-surface-500',
				message: resetError
			};
			modalStore.close();
			toastStore.trigger(resetPasswordToast);

		}
        
	};
</script>

<div class="container">
	<form class="card p-4 flex flex-col gap-3">
		{#if resetError}
			<p class="text-red-500">{resetError}</p>
		{/if}
		<h2>Reset password</h2>
		<input
			bind:value={currentPassword}
			class="input"
			type="password"
			placeholder="Current Password"
		/>
		<input bind:value={newPassword} class="input" type="password" placeholder="New Password" />
		<input
			bind:value={confirmNewPassword}
			class="input"
			type="password"
			placeholder="Re - New Password"
		/>
		<button
			type="button"
			class="btn bg-primary-500 ml-auto"
			style="width:10rem"
			on:click={() => resetPassword()}
		>
			Reset
		</button>
	</form>
</div>
