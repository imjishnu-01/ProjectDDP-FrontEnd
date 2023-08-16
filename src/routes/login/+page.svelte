<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { baseAPIURL } from '$lib/components/publicVar';
	import { setCookie } from '$lib/components/cookies';
	import { getCookie } from '$lib/components/cookies';
	import { Modal, modalStore } from '@skeletonlabs/skeleton';
	import type { ModalComponent, ModalSettings } from '@skeletonlabs/skeleton';
	import ResendEmailVerficationForm from '$lib/components/resendEmailVerficationForm.svelte';
	import ForgotPasswordForm from '$lib/components/forgotPasswordForm.svelte';

	let email = '';
	let password = '';
	let errorMessage = '';
	let disableLoginButton = false;

	const login = async () => {
		try {
			const response = await fetch(`${baseAPIURL}/api/user/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email, password })
			});

			if (response.ok) {
				const data = await response.json();
				const { token, userID } = data;

				// Store the userID in a cookie

				// Store the token in local storage for future API requests

				//cookie implementation

				setCookie('token', token, 1);
				setCookie('userID', userID, 1);
				//End cookie implementation

				// Redirect the user to the application view
				goto('/application/invitationReceived');
			} else {
				// Handle authentication error
				const errorData = await response.json();
				errorMessage = errorData.error;
				if (errorMessage === 'Email verification pending') {
					disableLoginButton = true;
					/*
					 */
				}
			}
		} catch (error) {
			console.error('Error:', error);
		}
	};
	function openResendEmail() {
		const c: ModalComponent = { ref: ResendEmailVerficationForm };
		const modal: ModalSettings = {
			type: 'component',
			component: c,
			title: 'Email verification pending',
			body: 'Resend verification email',
			response: (r: boolean) => console.log('Kol')
		};
		modalStore.trigger(modal);
	}

	function openForgotPasswordl() {
		const c: ModalComponent = { ref: ForgotPasswordForm };
		const modal: ModalSettings = {
			type: 'component',
			component: c,
			title: 'Reset password',
			body: 'Send password reset email',
			response: (r: boolean) => console.log('Kol')
		};
		modalStore.trigger(modal);
	}
	function handleKeyPress(event: KeyboardEvent & { currentTarget: EventTarget & HTMLInputElement; }) {
		if(event.key === 'Enter'){
			if(email !== '' && password !== ''){
				login();
			}else{
				errorMessage = 'Please fill in details'
			}
		}
	}
	// Check if the user is already logged in
	onMount(async () => {
		const token = getCookie('token');
		if (token) {
			// User is already logged in, redirect to application view
			window.location.href = '/application/invitationReceived';
		}
	});
</script>

<div class="container flex justify-center items-center h-screen">
	<form class="card p-4 flex flex-col gap-3 w-80" on:submit|preventDefault={login}>
		<h1 class="text-center text-3xl font-bold">Login</h1>
		<label class="label">
			<span>Email</span>
			<input class="input w-full" type="email" placeholder="Email" bind:value={email} on:keydown={handleKeyPress} />
		</label>
		<label class="label">
			<span>Password</span>
			<input class="input w-full" type="password" placeholder="Password" bind:value={password} on:keydown={handleKeyPress}/>
		</label>

		{#if errorMessage}
			<p class="text-red-500">{errorMessage}</p>
			{#if disableLoginButton}
			<button class="btn bg-primary-500 ml-auto" on:click={() => openResendEmail()}> Resend verification email </button>
			
			{/if}
			
		{/if}
		{#if !disableLoginButton}
			<button
				type="button"
				class="btn bg-primary-500 ml-auto"
				style="width: 10rem"
				on:click={() => login()}
			>
				Login
			</button>
			<button class="text-right pe-3 text-blue-600 dark:text-blue-500" on:click={() => openForgotPasswordl()}>Forgo Password</button>

		{/if}
		<hr />
		<span>Create new account <a href="/register" class="btn bg-surface-500 m-2">Register</a></span>
	</form>
</div>
