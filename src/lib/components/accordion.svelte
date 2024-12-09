<script lang="ts">
	import { cn } from '$lib/utils';
import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		accordionTitle: string;
    accordionName: string;
    startOpen?: boolean;
	}

	let { accordionTitle, children, startOpen, accordionName, class:className, ...props }: Props = $props();
</script>

<div {...props} class={cn("collapse collapse-arrow join-item border-base-300 border", className)}>
	<input type="radio" name={accordionName} checked={startOpen} />
	<div class="collapse-title text-xl font-medium">{accordionTitle}</div>
	<div class="collapse-content">
		<p>{@render children?.()}</p>
	</div>
</div>
