
<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from "$app/stores";
	import { baseAPIURL } from '$lib/components/publicVar';
	import { goto } from '$app/navigation';
	import { toastStore } from '@skeletonlabs/skeleton';
		import type { ToastSettings } from '@skeletonlabs/skeleton';
		const  token  = $page.params.token;
	console.log(token)
	// Function to send the verification request
	const verifyEmail = async () => {
	  try {
		// Make the API call using the fetch API
		const response = await fetch(`${baseAPIURL}/api/user/verify/${token}`);
		if (response.ok) {
		  const data = await response.json();
		  const emailVerifiedMsg: ToastSettings = {
				background: 'bg-primary-500',
				message: 'Email verified successfully'
			};
			toastStore.trigger(emailVerifiedMsg);
		  goto('/login')
		} else {
		  console.log('Email verification failed:', response.statusText);
		}
	  } catch (error) {
		console.error('Error verifying email:', error);
	  }
	};
  
	// Call the verification function on component mount
	//onMount(verifyEmail);
  </script>
  
<div class="container flex justify-center items-center h-screen">
	<form class="card p-4 flex flex-col gap-3 w-80">
		<h1 class="btn text-center text-3xl font-bold">Verifying email...</h1>
	</form>
</div>
