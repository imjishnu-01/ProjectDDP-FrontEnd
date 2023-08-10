<script lang='ts'>
	
	import { Avatar, AppBar, AppShell, Drawer, drawerStore, Toast, Modal } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/Navigation.svelte';
	import { LightSwitch } from '@skeletonlabs/skeleton';


	function drawerOpen(): void{
		drawerStore.open()
	}
</script>

<Toast position="br"/>
<Modal />
<Drawer>
	<Navigation />
</Drawer>
<AppShell slotSidebarLeft="w-0 md:w-60 bg-surface-500/10">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<button class="md:hidden btn btn-sm mr-4" on:click={drawerOpen}>
					<span>
						<svg viewBox="0 0 100 80" class="fill-token w-4 h4">
							<rect width="100" height="20"/>
							<rect y="30" width="100" height="20"/>
							<rect y="60" width="100" height="20"/>
						</svg>
					</span>
				</button>
				<span class="fa-solid fa-handshake text-6xl"></span>
				<strong class="text-xl uppercase">ProjectDDP</strong>
				
				
			</svelte:fragment>
			<svelte:fragment slot="trail">
					<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Navigation />
	</svelte:fragment>
	<!--<svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment>
	<svelte:fragment slot="pageHeader">Page Header</svelte:fragment> -->
	<!-- Router Slot -->
	<div class="container p-10 w-full h-full">
		<slot />
	</div>
	<!-- ---- / 
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<svelte:fragment slot="footer">Footer</svelte:fragment>---- -->
</AppShell>
