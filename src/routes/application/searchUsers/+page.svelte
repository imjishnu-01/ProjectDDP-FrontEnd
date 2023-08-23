<svelte:head>
   <title>Search Candidates</title>
</svelte:head>

<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { baseAPIURL } from '$lib/components/publicVar';
	import { getCookie } from '$lib/components/cookies';

	const token = getCookie('token');
	let showContent = false;

	onMount(() => {
		if (!token) {
			// If the token is not available, redirect to the login page
			goto('/login');
		}
	});
	let skillsInput = '';
	/**
	 * @type {any[]}
	 */
	let usersWithSkills = [];

	const searchUsersBySkills = async () => {
		try {
			// Split the skillsInput into an array and trim whitespace
			const skillsArray = skillsInput.split(',').map(skill => skill.trim());

			// Join the skillsArray back into a comma-separated string
			const formattedSkillsInput = skillsArray.join(',');

			// Encode the formatted skills input
			const encodedSkillsInput = encodeURIComponent(formattedSkillsInput);
			//console.log(skillsInput);
			const response = await fetch(
				`${baseAPIURL}/api/user/search?skills=${encodedSkillsInput}`,
				{
					headers: {
						Authorization: `Bearer ${token}`
					}
				}
			);

			if (response.ok) {
				usersWithSkills = await response.json();
				if(usersWithSkills.length < 1){
					showContent = true;
				}else{
					showContent = false;
				}
			} else {
				console.error('Error fetching users:', response.statusText);
			}
		} catch (error) {
			console.error('Error fetching users:', error);
		}
	};
</script>

<h1>Search candidates</h1>
<div class="container">
	<form class="card m-5 p-4 flex flex-col gap-3">
		
		<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
			<div class="input-group-shim"></div>
			<input type="search" bind:value={skillsInput} placeholder="Skills or Postions " />
			<button class="bg-surface-500" on:click={searchUsersBySkills}
				><i class="fa-solid fa-magnifying-glass" /></button
			>
		</div>
	</form>
</div>

<div class="grid grid-cols-1 grid-cols-1 md:grid-cols-2 gap-4">
	{#each usersWithSkills as user}
		<div
			class="card p-4 bg-primary-warning flex flex-col gap-10 relative flex-shrink-0 flex-grow-0"
		>
			<div>{user.firstName} {user.lastName}</div>
			<!--<div>Email: {user.email}</div>-->
			<div>Experience: {user.total_years_of_experience || 0}</div>
			<div class="flex gap-2 flex-wrap">
				<span>Skills:</span>
				{#each user.user_skills.split(',') as skill}
					<span class="chip variant-filled">{skill}</span>
				{/each}
			</div>
			<!-- Display work experience
        {#if user.user_companies && user.user_companies.trim() !== ''}
          <div class="flex gap-2 flex-wrap">
            <span>Worked at:</span>
            {#each user.user_companies.split(',') as company}
              <span class="chip variant-filled">{company}</span>
            {/each}
          </div>
        {/if}-->
			<a
				href="/application/userProfile/{user.id}"
				class="btn-icon btn-icon-bg bg-secondary-500 m-4 absolute bottom-0 right-0 -mb-2 -mr-2"
			>
				<i class="fas fa-chevron-right text-white" />
			</a>
			<!-- Add other user details here if available -->
		</div>
	{/each}
</div>

{#if showContent}
  <p>No mataches found</p>
{/if}