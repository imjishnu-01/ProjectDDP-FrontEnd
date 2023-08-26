<svelte:head>
   <title>User Profile</title>
</svelte:head>

<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { modalStore, type ModalSettings, type ModalComponent } from '@skeletonlabs/skeleton';
	import InviteForm from '$lib/components/inviteForm.svelte';
	import { baseAPIURL } from '$lib/components/publicVar';
	import { getCookie } from '$lib/components/cookies';

	const token = getCookie('token');

	onMount(async () => {
		try {
			if (!token) {
				// If the token is not available, redirect to the login page
				goto('/login');
				return;
			}

			const response = await fetch(`${baseAPIURL}/api/user/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});

			if (response.ok) {
				user = await response.json();
				//console.log(user);
			} else {
				//console.error('Error fetching user:', response.statusText);
			}
		} catch (error) {
			//console.error('Error fetching user:', error);
		}
	});

	export let id = $page.params.slug;
	/**
	 * @type {{ user_skills: string; user_companies: string; total_months_of_experience: Intl; firstName: string; lastName: string; id:string; } | null}
	 */
	let user: {
		user_companies_with_experience: any;
		firstName: any;
		lastName: any;
		user_skills: string;
		total_months_of_experience: any;
		user_companies: string;
		id: string;
	} | null = null;

	// Fetch the user details when the component is mounted

	function modalComponentForm(): void {
		const c: ModalComponent = { ref: InviteForm };
		const modal: ModalSettings = {
			type: 'component',
			component: c,
			title: 'Custom Form Component',
			body: 'Complete the form below and then press submit.',
			response: (r: any) => {} //console.log('response:', r)
		};
		modalStore.trigger(modal);
	}
</script>

{#if user}
	<div class="container h-full mx-auto flex gap-8 flex flex-col">
		<!-- Display User's Name -->
		<div class="flex items-center justify-between">
			<h1 class="text-xl font-bold">{user.firstName} {user.lastName}</h1>
			<button class="btn bg-secondary-500" on:click={() => modalComponentForm()}>
				Send Invite
			</button>
		</div>
		<hr />
		<!-- Display Skills -->
		<div class="flex items-center justify-between">
			<h2>Skills</h2>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
			{#each user.user_skills.split(',') as skill}
				<div class="card p-4 bg-primary-warning flex flex-col gap-10 relative">
					<div>{skill.split('|')[0]}</div>
					<!-- Add other skill details here if available -->
				</div>
			{/each}
		</div>
		<!-- Display Work Experiences -->
		{#if user.total_months_of_experience || user.user_companies}
			<div class="flex items-center justify-between mt-8">
				<h2>Work Experience - { Math.floor(user.total_months_of_experience/ 12)|| 0} Years</h2>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
				{#if user.user_companies && user.user_companies.trim() !== ''}
					{#each user.user_companies_with_experience.split(',') as experience}
						<div class="card p-4 bg-primary-warning flex flex-col gap-10 relative">
							{#if experience.includes('||')}
								{@html experience.split('|')[0]}

								<div>Role: {experience.split('||')[1]}</div>
								<!-- Add other work experience details here if available -->
							{/if}
						</div>
					{/each}
				{:else}
					<p>No work experience available.</p>
				{/if}
			</div>
		{:else}
			<p>No work experience available.</p>
		{/if}
	</div>
{:else}
	<p>Loading user details...</p>
{/if}
