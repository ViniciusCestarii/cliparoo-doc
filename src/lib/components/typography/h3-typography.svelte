<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLHeadingElement> {}

	let { class: className, children, ...props }: Props = $props();
</script>

<h3 {...props} class={cn('mt-8 text-3xl font-bold', className)}>
	{@render children?.()}
</h3>
