<script>
	import { baseAPIURL } from './publicVar';
	let email = '';
	let errorMessage = '';
	let isEmailSent = false;
	async function resendVerificationEmail() {
		try {
			const response = await fetch(`${baseAPIURL}/api/user/resend-verification`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email })
			});

			if (response.ok) {
				const data = await response.json();
				isEmailSent = true;
				// You can display a success message or update the UI as needed
			} else {
				const errorData = await response.json();
				errorMessage = errorData.error;
				console.error('Error resending verification email:', errorData.error);
				// Display error message or handle error as needed
			}
		} catch (error) {
			console.error('Error resending verification email:', error);
			errorMessage = 'An error occurred while sending the verification email.';
			// Display error message or handle error as needed
		}
	}
</script>

<div class="container">
	<form class="card p-4 flex flex-col gap-3">
		{#if isEmailSent}
			<h2 class="text-center">You will receive an verification email shortly</h2>
		{:else}
			<h2>Resend verification email</h2>
			<input class="input" type="text" placeholder="Email" bind:value={email} />
			<button
				type="button"
				class="btn bg-primary-500 ml-auto"
				style="width:10rem"
				on:click={resendVerificationEmail}
			>
				Send
			</button>
			{#if errorMessage}
				<p class="text-red-500 mt-2">{errorMessage}</p>
				<!-- Display error message -->
			{/if}
		{/if}
	</form>
</div>
