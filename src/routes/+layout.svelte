<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	//import '../theme.postcss';
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { Toast } from '@skeletonlabs/skeleton';

	import { Avatar, AppBar, AppShell, Drawer, drawerStore, Modal } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/Navigation.svelte';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import Analytics from '$lib/components/analytics.svelte';

	function drawerOpen(): void{
		drawerStore.open()
	}
	
</script>
<Modal />
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"> 

<Analytics />
<slot />

	
	<AppShell>
		<!--<svelte:fragment slot="header">
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
		</svelte:fragment>--> 
		<!--<svelte:fragment slot="sidebarLeft">
			<Navigation />
		</svelte:fragment>-->
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
	


	<!--<svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment>
	<svelte:fragment slot="pageHeader">Page Header</svelte:fragment> -->
	<!-- Router Slot -->
	<!--<div class="container h-full">
		<slot />
	</div> -->
	<!-- ---- / 
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<svelte:fragment slot="footer">Footer</svelte:fragment>---- -->
