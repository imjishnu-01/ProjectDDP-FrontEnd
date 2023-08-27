<svelte:head>
   <title>Register</title>
</svelte:head>
<!-- Register.svelte -->

<script lang="ts">
	import { goto } from '$app/navigation';
	import { baseAPIURL } from '$lib/components/publicVar';
	import { modalStore, Modal } from '@skeletonlabs/skeleton';
	import type { ModalSettings } from '@skeletonlabs/skeleton';

	let firstName = '';
	let lastName = '';
	let email = '';
	let password = '';
	let confirmPassword = '';
	let errorMessage = '';

	async function registerUser() {
		// Validate input fields
		if (!firstName || !lastName || !email || !password || !confirmPassword) {
			errorMessage = 'Please fill in all fields.';
			return;
		}

		if (password !== confirmPassword) {
			errorMessage = 'Passwords do not match.';
			return;
		}

		// Make API call to register user
		try {
			const response = await fetch(`${baseAPIURL}/api/user/register`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					firstName,
					lastName,
					email,
					password
				})
			});

			if (response.ok) {
				const modal: ModalSettings = {
					type: 'confirm',
					title: 'Email verification',
					body: `You will shortly receive an email with the verification link to activate your account`,
					response: async (r: boolean) => {
						if (r) {
							goto('/login'); // Change the route to your desired success page
						}
						// User registered successfully, navigate to a success page or login page
					}
				};
				modalStore.trigger(modal);
			} else {
				const data = await response.json();
				errorMessage = data.error || 'Failed to register user.';
			}
		} catch (error) {
			errorMessage = 'An error occurred while registering the user.';
		}
	}
	
</script>

<div class="container flex justify-center items-center h-screen">
	<form class="card p-4 flex flex-col gap-3 w-80" on:submit|preventDefault={registerUser}>
		<h1 class="text-center text-3xl font-bold">Register</h1>
		{#if errorMessage}
			<p class="text-red-500">{errorMessage}</p>
		{/if}
		<label class="label">
			<span>First Name</span>
			<input bind:value={firstName} class="input w-full" type="text" placeholder="First Name" />
		</label>
		<label class="label">
			<span>Last Name</span>
			<input bind:value={lastName} class="input w-full" type="text" placeholder="Last Name" />
		</label>
		<label class="label">
			<span>Email</span>
			<input bind:value={email} class="input w-full" type="email" placeholder="Email" />
		</label>
		<label class="label">
			<span>Password</span>
			<input bind:value={password} class="input w-full" type="password" placeholder="Password" />
		</label>
		<label class="label">
			<span>Re-Password</span>
			<input
				bind:value={confirmPassword}
				class="input w-full"
				type="password"
				placeholder="Confirm Password"
			/>
		</label>
		<hr class="m-2">
		
		<button on:click={registerUser} class="btn bg-primary-500 ml-auto" style="width: 10rem">
			Register
		</button>
		<hr />
		<span>Already have a account? <a href="/login" class="btn bg-surface-500 m-2">Login</a></span>
	</form>

</div>
