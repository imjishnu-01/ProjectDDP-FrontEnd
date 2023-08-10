<script lang="ts">
	import { goto } from '$app/navigation';
    import { InputChip, modalStore, toastStore, type ToastSettings } from '@skeletonlabs/skeleton';
	import { baseAPIURL } from "$lib/components/publicVar";
	import { getCookie } from './cookies';
	const userID = getCookie('userID');
	const token = getCookie('token');
	
	let skill: string[] = [];
    function isNotNull(value: string): boolean {
	    return value !== null
    }
	const addSkills = async () => {
		try {
			const response = await fetch(`${baseAPIURL}/api/skill/${userID}`, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					skills: skill
				})
			});

			if (response.ok) {
				//Skill added successfully
				const skillModal: ToastSettings = {
					background: 'bg-primary-500',
					message: 'Skill(s) added sucessfully'
				};
				modalStore.close();
				toastStore.trigger(skillModal);
                window.location.href = `/application/myProfile`
                //goto('/application/myProfile');
			} else {
				//Error while adding skill
				const skillModal: ToastSettings = {
					background: 'bg-primary-500',
					message: 'Error, please try again later.'
				};
				modalStore.close();
				toastStore.trigger(skillModal);
			}
		} catch (error) {
			console.log(error)
			//Error while adding skill
			const skillModal: ToastSettings = {
				background: 'bg-primary-500',
				message: 'Error1, please try again later.'
			};
			modalStore.close();
			toastStore.trigger(skillModal);
		}
	};
</script>

<div class="container">
	<form class="card p-4 flex flex-col gap-3">
		<h2>Add Skill</h2>
		<InputChip
			bind:value={skill}
            validation={isNotNull}
			name="chips"
			placeholder="JavaScript, PHP, Technical support, ..."
		/>
        {#if skill.length !== 0}
		<button type="button" class="btn bg-primary-500 ml-auto" style="width:10rem" on:click={() => addSkills()}> Add </button>
        {/if}
    </form>
</div>
