<script lang="ts">
	import Download from '$lib/components/download.svelte';
	import Faq from '$lib/components/faq.svelte';
	import Features from '$lib/components/features.svelte';
	import Home from '$lib/components/home.svelte';

	interface Props {
		data: {
			version: string;
		}
	}

	let { data }: Props = $props()
	let { version } = data
</script>

<svelte:head>
	<title>Cliparoo</title>
	<meta name="description" content="Your Smart Clipboard" />
	<meta name="keywords" content="clipboard, cliparoo, smart clipboard" />
</svelte:head>

<main>
	<Home />
	<Features />
	<Download {version} />
	<Faq />
</main>
