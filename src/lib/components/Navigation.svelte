<script lang="ts">
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import { deleteCookie } from './cookies';
	import { browser } from '$app/environment';

	function drawerClose(l?: boolean): void {
		if (l) {
			// If l is truthy (i.e., passed as an argument), delete the token from local storage and logout user

			try {
				deleteCookie('token');
				deleteCookie('userID');
			} catch (error) {
				console.error('Error deleting cookies:', error);
			}
		}

		drawerStore.close();
	}
</script>

<nav class="list-nav p-5">
	<ul>
		<li>
			<a href="../../application/invitationReceived" on:click={() => drawerClose(false)}>
				<i class="fa-regular fa-envelope-open" />&nbsp; Invitations Received</a
			>
		</li>
		<li>
			<a href="../../application/invitationSent" on:click={() => drawerClose(false)}
				><i class="fa-regular fa-envelope" /> &nbsp; Invitations Sent</a
			>
		</li>
		<!--<li>
            <a href="../../application/new" on:click={() => drawerClose(false)}>Create</a>
        </li> -->
		<li>
			<a href="../../application/searchUsers" on:click={() => drawerClose(false)}>
				<i class="fa-solid fa-magnifying-glass" /> &nbsp; Search Candidate</a
			>
		</li>
		<!--<li>
            <a href="/" on:click={() => drawerClose(false)}>Add Skills</a>
        </li>
        <li>
            <a href="/" on:click={() => drawerClose(false)}>Add Experience</a>
        </li> -->
		<li>
			<a href="../../application/myProfile" on:click={() => drawerClose(false)}
				><i class="fa-regular fa-user" /> &nbsp; My Profile</a
			>
		</li>
		<li>
			<a href="/login" on:click={() => drawerClose(true)}
				><i class="fa-solid fa-right-from-bracket" /> &nbsp; Logout
			</a>
		</li>
	</ul>
</nav>
