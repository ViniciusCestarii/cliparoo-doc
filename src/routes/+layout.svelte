<script lang="ts">
	import Analytics from '$lib/components/analytics.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<Header />
{@render children()}
<Analytics />
<Footer />
