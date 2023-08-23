<svelte:head>
   <title>My Profile</title>
</svelte:head>

<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { modalStore, Modal, toastStore, Toast } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ToastSettings, ModalComponent } from '@skeletonlabs/skeleton';
	import AddSkillForm from '$lib/components/addSkillForm.svelte';
	import AddExperienceForm from '$lib/components/addExperienceForm.svelte';
	import MyProfileForm from '$lib/components/myProfileForm.svelte';
	import UpdatePasswordForm from '$lib/components/updatePasswordForm.svelte';
	import { baseAPIURL } from '$lib/components/publicVar';
	import { getCookie } from '$lib/components/cookies';

	const userID = getCookie('userID');
	const token = getCookie('token');

	onMount(() => {
		if (!token) {
			// If the token is not available, redirect to the login page
			goto('/login');
		} else {
			// If the token is available, fetch the skills and work experiences
			fetchSkillsAndExperiences();
		}
	});

	let userSkills: any[] = [];
	let userWorkExperiences: any[] = [];
	let firstName = '';
	let lastName = '';
	let email = '';
	let yearsOfExperience = '';
	let city = '';
	let state = '';

	const fetchSkillsAndExperiences = async () => {
		try {
			const response = await fetch(`${baseAPIURL}/api/user/${userID}`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});

			if (response.ok) {
				const data = await response.json();
				// Set user info
				firstName = data.firstName;
				lastName = data.lastName;
				email = data.email;
				yearsOfExperience = data.total_years_of_experience;
				city = data.city;
				state = data.state;

				// Process skills with IDs
				const skillsWithIds = data.user_skills.split(',');
				userSkills = skillsWithIds.map((skillWithId: { split: (arg0: string) => [any, any] }) => {
					const [skillName, skillId] = skillWithId.split('|');
					return { name: skillName, id: skillId };
				});

				// Process work experiences with IDs
				const experiencesWithIds = data.user_companies_with_experience.split(',');
				userWorkExperiences = experiencesWithIds.map((experienceWithId: string) => {
					const [experienceDetails, experienceId, _, position] = experienceWithId.split('|');
					return { details: experienceDetails, id: experienceId, position: position || '' };
				});
				console.log(experiencesWithIds);
				console.log(userWorkExperiences);
			} else {
				console.error('Error fetching skills and work experiences:', response.statusText);
			}
		} catch (error) {
			console.error('Error fetching skills and work experiences:', error);
		}
	};

	// Prompt and logic to delete user skill
	function confirmDeleteSkill(skill: { name: string; id: string }): void {
		const { name, id } = skill;
		// Create a modal with the delete skill confirmation message
		const modal: ModalSettings = {
			type: 'confirm',
			title: 'Delete Skill',
			body: `Are you sure you want to delete the skill "${name}"?`,
			response: async (r: boolean) => {
				if (r) {
					// If the user confirms deletion, proceed with the delete API call

					try {
						// Send a DELETE request to the server to delete the specified skill
						const response = await fetch(`${baseAPIURL}/api/skill/${userID}/${id}/`, {
							method: 'DELETE',
							headers: {
								Authorization: `Bearer ${token}`
							}
						});

						if (response.ok) {
							// Toast for successful deletion
							const skillDeleted: ToastSettings = {
								background: 'bg-primary-500',
								message: 'Deleted successfully'
							};
							toastStore.trigger(skillDeleted);

							// Fetch the updated skills list after successful deletion
							fetchSkillsAndExperiences();
						} else if (response.status === 404) {
							// Toast for skill not found
							const skillNotFound: ToastSettings = {
								background: 'bg-surface-500',
								message: 'Skill not found'
							};
							toastStore.trigger(skillNotFound);
						} else {
							// Toast for other errors
							const skillError: ToastSettings = {
								background: 'bg-surface-500',
								message: 'Something went wrong'
							};
							toastStore.trigger(skillError);
						}
					} catch (error) {
						console.error('Error deleting skill:', error);
					}
				} else {
					// If the user cancels deletion, display a toast for cancellation
					const skillDeleteCancelled: ToastSettings = {
						background: 'bg-surface-500',
						message: 'Cancelled'
					};
					toastStore.trigger(skillDeleteCancelled);
				}
			}
		};

		// Trigger the modal to display the confirmation dialog
		modalStore.trigger(modal);
	}

	// Prompt and logic to delete user Work experience
	function confirmDeleteWorkExperience(experience: { details: string; id: string }): void {
		const { id } = experience;
		// Create a modal with the delete work experience confirmation message
		const modal: ModalSettings = {
			type: 'confirm',
			title: 'Delete Work Experience',
			body: `Are you sure you want to delete the work experience?`,
			response: async (r: boolean) => {
				if (r) {
					// If the user confirms deletion, proceed with the delete API call
					try {
						// Send a DELETE request to the server to delete the specified work experience
						const response = await fetch(`${baseAPIURL}/api/workExperince/${userID}/${id}/`, {
							method: 'DELETE',
							headers: {
								Authorization: `Bearer ${token}`
							}
						});

						if (response.ok) {
							// Toast for successful deletion
							const experienceDeleted: ToastSettings = {
								background: 'bg-primary-500',
								message: 'Deleted successfully'
							};
							toastStore.trigger(experienceDeleted);

							// Fetch the updated work experiences list after successful deletion
							//fetchSkillsAndExperiences();
							window.location.href = '/application/myProfile';
						} else if (response.status === 404) {
							// Toast for work experience not found
							const experienceNotFound: ToastSettings = {
								background: 'bg-surface-500',
								message: 'Work experience not found'
							};
							toastStore.trigger(experienceNotFound);
						} else {
							// Toast for other errors
							const experienceError: ToastSettings = {
								background: 'bg-surface-500',
								message: 'Something went wrong'
							};
							toastStore.trigger(experienceError);
						}
					} catch (error) {
						console.error('Error deleting work experience:', error);
					}
				} else {
					// If the user cancels deletion, display a toast for cancellation
					const experienceDeleteCancelled: ToastSettings = {
						background: 'bg-surface-500',
						message: 'Cancelled'
					};
					toastStore.trigger(experienceDeleteCancelled);
				}
			}
		};

		// Trigger the modal to display the confirmation dialog
		modalStore.trigger(modal);
	}

	//Add skill modal form
	function addSkillForm(): void {
		const c: ModalComponent = { ref: AddSkillForm };
		const modal: ModalSettings = {
			type: 'component',
			component: c,
			title: 'Add Skill',
			body: 'Complete the form below and then press submit.',
			response: (r: any) => console.log('response:', r)
		};
		modalStore.trigger(modal);
	}

	//Add experience modal form
	function addExperienceForm(): void {
		const c: ModalComponent = { ref: AddExperienceForm };
		const modal: ModalSettings = {
			type: 'component',
			component: c,
			title: 'Add Expereince',
			body: 'Complete the form below and then press submit.',
			response: (r: any) => console.log('response:', r)
		};
		modalStore.trigger(modal);
	}

	//edit user profile form
	function editProfileForm(): void {
		const c: ModalComponent = { ref: MyProfileForm };
		const modal: ModalSettings = {
			type: 'component',
			component: c,
			title: 'Edit Profile',
			body: 'Complete the form below and then press submit.',
			response: (r: any) => console.log('response:', r)
		};
		modalStore.trigger(modal);
	}

	function updatePassworForm(): void {
		const c: ModalComponent = { ref: UpdatePasswordForm };
		const modal: ModalSettings = {
			type: 'component',
			component: c,
			title: 'Edit Profile',
			body: 'Complete the form below and then press submit.',
			response: (r: any) => console.log('response:', r)
		};
		modalStore.trigger(modal);
	}
	// Fetch skills and work experiences on component mount
</script>

<div class="container h-full mx-auto flex gap-8 flex flex-col">
	<!-- Display Skills -->
	<div class="flex items-center justify-between">
		<h2>Skills</h2>
		<button class="btn bg-secondary-500" on:click={() => addSkillForm()}> Add Skill </button>
	</div>
	<hr />
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
		{#each userSkills as skill}
			<div class="card p-4 bg-primary-warning flex flex-col gap-10 relative">
				<div>{skill.name}</div>
				<button
					class="btn-icon btn-icon-sm bg-secondary-500 absolute -top-1.5 -right-1.5"
					on:click={() => confirmDeleteSkill(skill)}
				>
					X
				</button>
				<!-- Add other skill details here if available -->
			</div>
		{/each}
	</div>

	<!-- Display Work Experiences -->
	<div class="flex items-center justify-between mt-8">
		<h2>Work Experience</h2>
		<button class="btn bg-secondary-500" on:click={() => addExperienceForm()}>
			Add Work Experience
		</button>
	</div>
	<hr />
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
		{#each userWorkExperiences as experience}
			<div class="card p-4 bg-primary-warning flex flex-col gap-10 relative">
				<div>{experience.details}</div>
				<div>Role: {experience.position}</div>
				<button
					class="btn-icon btn-icon-sm bg-secondary-500 absolute -top-1.5 -right-1.5"
					on:click={() => confirmDeleteWorkExperience(experience)}
				>
					X
				</button>
			</div>
		{/each}
	</div>
	<hr />
	<!--End-->

	<!-- Display User details Experiences -->
	<div class="flex items-center justify-between mt-8">
		<h2>User details</h2>
		<button class="btn bg-secondary-500" on:click={() => editProfileForm()}> Edit </button>
	</div>
	<hr />
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
		
		<div class="card p-4 bg-primary-warning flex flex-col gap-10 relative">
			<div>{firstName} {lastName}</div>
		</div>
		<div class="card p-4 bg-primary-warning flex flex-col gap-10 relative">
			<div>{email}</div>
		</div>
		<div class="card p-4 bg-primary-warning flex flex-col gap-10 relative">
			<div>Total Experience: {yearsOfExperience}</div>
		</div>
		<div class="card p-4 bg-primary-warning flex flex-col gap-10 relative">
			{#if city !== null}
				{city}
			{:else}
				City not added
			{/if}
		</div>
		<div class="card p-4 bg-primary-warning flex flex-col gap-10 relative">
			{#if state !== null}
				{state}
			{:else}
				State not added
			{/if}
		</div>
		<button class="btn bg-secondary-500" on:click={() => updatePassworForm()}> Reset Password </button>
	</div>
</div>
