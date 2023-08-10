<script>
	import { baseAPIURL } from './publicVar';

	let email = '';
	let errorMessage = '';
	let successMessage = '';
	let isSending = false;

	async function sendResetEmail() {
		errorMessage = '';
		successMessage = '';
		isSending = true;

		try {
			const response = await fetch(`${baseAPIURL}/api/user/forgot-password`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email })
			});

			const data = await response.json();

			if (response.ok) {
				successMessage = data.message;
			} else {
				errorMessage = data.error;
			}
		} catch (error) {
			console.error(error);
			errorMessage = 'An error occurred while sending the email';
		}
        email = '';
		isSending = false;
	}
</script>

<div class="container">
    <form class="card p-4 flex flex-col gap-3">
      <h2>Reset Password</h2>
      {#if !successMessage} <!-- Render input and button if successMessage is empty -->
        <input class="input" type="text" placeholder="Email" bind:value={email} disabled={isSending} />
        <button type="button" class="btn bg-primary-500 ml-auto" style="width:10rem" on:click={sendResetEmail} disabled={isSending}>
          {#if isSending}
            Sending...
          {:else}
            Send
          {/if}
        </button>
      {/if}
      {#if errorMessage}
        <p class="text-red-500 mt-2">{errorMessage}</p>
      {/if}
      {#if successMessage}
        <p class="text-green-500 mt-2">{successMessage}</p>
      {/if}
    </form>
  </div>
  
  
  
  
  
  