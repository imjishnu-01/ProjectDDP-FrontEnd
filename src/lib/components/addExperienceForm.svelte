<script lang="ts">
	import { goto } from '$app/navigation';
	import { baseAPIURL } from '$lib/components/publicVar';
	import { modalStore, toastStore, type ToastSettings } from '@skeletonlabs/skeleton';
	import { getCookie } from './cookies';
	
	const userID = getCookie('userID');
	const token = getCookie('token');
	let company = '';
	let role = '';
	let startDate = '';
	let endDate = '';

	const addExperince = async () => {
		try {
			const response = await fetch(`${baseAPIURL}/api/workExperince/${userID}`, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					company_name: company,
					position: role,
					start_date: startDate,
					end_date: endDate
				})
			});

			if (response.ok) {
				//Skill added successfully
				const experinceModal: ToastSettings = {
					background: 'bg-primary-500',
					message: 'Experince added sucessfully'
				};
				modalStore.close();
				toastStore.trigger(experinceModal);
				window.location.href = `/application/myProfile`;
				//goto('/application/myProfile');
			} else {
				//Error while adding skill
				const experinceModal: ToastSettings = {
					background: 'bg-primary-500',
					message: 'Error, please try again later.'
				};
				modalStore.close();
				toastStore.trigger(experinceModal);
			}
		} catch (error) {
			//Error while adding skill
			const experinceModal: ToastSettings = {
				background: 'bg-primary-500',
				message: 'Error, please try again later.'
			};
			modalStore.close();
			toastStore.trigger(experinceModal);
		}
	};
</script>

<div class="container">
	<form class="card p-4 flex flex-col gap-3">
		<h2>Add Work Experience</h2>
		<label class="label">
			<span>Company</span>
			<input class="input" type="text" bind:value={company} placeholder="Google, HP, etc" />
		</label>
		<label class="label">
			<span>Role</span>
			<input class="input" type="text" bind:value={role} placeholder="SDE, TSE, Sale, etc" />
		</label>
		<label class="label">
			<span>Start Date</span>
			<input class="input" type="date" bind:value={startDate} placeholder="date" />
		</label>
		<label class="label">
			<span>End Date</span>
			<input class="input" type="date" bind:value={endDate} placeholder="date" />
		</label>
		<button
			type="button"
			class="btn bg-primary-500 ml-auto"
			style="width:10rem"
			on:click={() => addExperince()}
		>
			Add
		</button>
	</form>
</div>
