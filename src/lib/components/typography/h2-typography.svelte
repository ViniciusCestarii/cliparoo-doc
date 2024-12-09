<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLHeadingElement> {}

	let { class: className, children, ...props }: Props = $props();
</script>

<h2 {...props} class={cn('text-4xl font-bold', className)}>
	{@render children?.()}
</h2>
