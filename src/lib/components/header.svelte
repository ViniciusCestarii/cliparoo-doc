<script lang="ts">
	import cliparooSrc from '$assets/cliparoo.png?enhanced';
	import { cn } from '$lib/utils';
	import ThemeToggle from './theme-toggle.svelte';

	let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function handleClickOutside(event: MouseEvent) {
		const noCloseElements = document.querySelectorAll('.no-close');
		let clickedInside = false;

		noCloseElements.forEach((element) => {
			if (element.contains(event.target as Node)) {
				clickedInside = true;
			}
		});

		if (!clickedInside) {
			isMenuOpen = false;
		}
	}

	$effect(() => {
		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	});
</script>

<header class="sticky top-0 z-10 border-b border-base-300 bg-base-100/70 backdrop-blur-md">
	<nav class="flex flex-col">
		<div class="no-close navbar mx-auto max-w-screen-lg justify-between px-4 sm:px-6 lg:px-8">
			<div class="flex items-center space-x-1">
				<enhanced:img src={cliparooSrc} alt="Cliparoo Logo" class="size-10" />
				<span class="text-lg">Cliparoo</span>
			</div>
			<button
				class="btn btn-circle btn-ghost btn-sm sm:hidden"
				aria-label="menu"
				onclick={toggleMenu}
			>
				<div class={cn('swap', isMenuOpen && 'swap-active')}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-x swap-on size-5"
						><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg
					>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-menu swap-off size-5"
						><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line
							x1="4"
							x2="20"
							y1="18"
							y2="18"
						/>
					</svg>
				</div>
			</button>
			<ul class="hidden space-x-2 sm:flex">
				<li><a href="#home">Home</a></li>
				<li><a href="#features">Features</a></li>
				<li><a href="#download">Download</a></li>
				<li><a href="#faq">FAQ</a></li>
				<li class="flex items-center justify-center">
					<ThemeToggle />
				</li>
			</ul>
		</div>
		{#if isMenuOpen}
			<ul class="flex w-full flex-col items-center space-y-2 pb-4 sm:hidden">
				<li><a href="#home">Home</a></li>
				<li><a href="#features">Features</a></li>
				<li><a href="#download">Download</a></li>
				<li><a href="#faq">FAQ</a></li>
				<li class="no-close flex items-center justify-center">
					<ThemeToggle />
				</li>
			</ul>
		{/if}
	</nav>
</header>
