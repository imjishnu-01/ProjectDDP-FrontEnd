<svelte:head>
   <title>Reset Password</title>
</svelte:head>
<!-- src/routes/reset-password.svelte -->
<script>
    import { page } from "$app/stores";
	import { baseAPIURL } from '$lib/components/publicVar';
    
  
    let newPassword = '';
    let confirmPassword = '';
    let successMessage = '';
    let errorMessage = '';
    
    const  token  = $page.params.token;
    async function resetPassword() {
      errorMessage = '';
      successMessage = '';
  
      if (newPassword !== confirmPassword) {
        errorMessage = 'Passwords do not match';
        return;
      }
  
      try {
        const response = await fetch(`${baseAPIURL}/api/user/reset-password`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token, newPassword }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          successMessage = data.message;
        } else {
          errorMessage = data.error;
        }
      } catch (error) {
        console.error(error);
        errorMessage = 'An error occurred while resetting the password';
      }
    }
  
  </script>
  
  
 

  
<div class="container flex justify-center items-center h-screen">
	<form class="card p-4 flex flex-col gap-3">
        <h2>Reset Password</h2>
        {#if successMessage}
          <p class="success-message text-green-500">{successMessage}</p>
          <a href="/login">Goto Login</a>
        {:else}
          <input type="password" class="input" placeholder="New Password" bind:value={newPassword} />
          <input type="password" class="input" placeholder="Confirm Password" bind:value={confirmPassword} />
          <button type="button" class="btn bg-surface-500" on:click={resetPassword}>Reset Password</button>
          {#if errorMessage}
            <p class="error-message text-red-500">{errorMessage}</p>
          {/if}
        {/if}
    </form>
</div>
