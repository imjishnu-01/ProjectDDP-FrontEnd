<script lang="ts">
    import { onMount } from 'svelte';
	import { baseAPIURL } from './publicVar';
    import { modalStore, toastStore } from '@skeletonlabs/skeleton';
    import type { ToastSettings } from '@skeletonlabs/skeleton';
   
    import { getCookie } from './cookies';
	const userID = getCookie('userID');
	const token = getCookie('token');

    let userProfile: string | any[] = [];

    async function fetchUserProfile() {
      const response = await fetch(`${baseAPIURL}/api/user/profile/${userID}` ,{
        headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'application/json'
				},
      });
      if (response.ok) {
        userProfile = await response.json();
        console.log(userProfile);
      } else {
        console.error('Failed to fetch user profile');
      }
    }
  
    async function updateUserProfile() {
    const response = await fetch(`${baseAPIURL}/api/user/profile/${userID}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userProfile[0]) // Assuming you want to update the first profile in the array
    });

    if (response.ok) {
        const updateUserProfile: ToastSettings = {
					background: 'bg-primary-500',
					message: 'Profile updated sucessfully'
				};
				modalStore.close();
				toastStore.trigger(updateUserProfile);
                window.location.href = `/application/myProfile`
    } else {
        const updateUserProfile: ToastSettings = {
					background: 'bg-surface-500',
					message: 'Error, please try again later'
				};
				modalStore.close();
				toastStore.trigger(updateUserProfile);
                window.location.href = `/application/myProfile`
    }
  }

    onMount(async () => {
    await fetchUserProfile();
   });


  </script>
  
  <div class="container">
    <form class="card p-4 flex flex-col gap-3">
      <h2>Edit profile</h2>
      {#if userProfile.length > 0}
        {#each userProfile as userProfile}
          <input class="input" type="text" placeholder="First Name" bind:value={userProfile.firstName} />
          <input class="input" type="text" placeholder="Last Name" bind:value={userProfile.lastName} />
          <input class="input" type="text" placeholder="City" bind:value={userProfile.city} />
          <input class="input" type="text" placeholder="State" bind:value={userProfile.state} />
        {/each}
        <button type="button" class="btn bg-primary-500 ml-auto" on:click={updateUserProfile}>Update</button>
      {:else}
        <p>No user profile data available.</p>
      {/if}
    </form>
  </div>
  
  
  
  
  
  
  
  
  
  
  