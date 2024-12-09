<script>
	import { docState } from '$lib/state.svelte';
	import { themes } from '../../../tailwind.config';
	import ThemePreview from './theme-preview.svelte';
	import Section from './section.svelte';
	import CliparooPageExample from './cliparoo-page-example.svelte';
	import CliparooSearchExample from './cliparoo-search-example.svelte';
</script>

<Section id="features">
	<h2 class="text-4xl font-bold">Why use Cliparoo?</h2>

	<h3 class="mt-8 text-3xl font-bold">🎨 Fancy Themes</h3>

	<p class="text-lg">
		Because life's too short for boring apps. Pick a theme that screams <b>you</b>! Or at least
		mumbles it.
	</p>

	<div class="mt-4 grid grid-cols-3 gap-0 sm:gap-6">
		<div class="col-span-2 -mt-1">
			<CliparooPageExample />
		</div>
		<div class="grid max-h-[44rem] grid-cols-1 overflow-y-auto">
			{#each themes as theme}
				<label class="relative p-2">
					<input
						data-theme={theme}
						type="radio"
						class="radio-primary radio absolute left-3 top-4 size-4 sm:left-4 sm:size-6"
						bind:group={docState.theme}
						value={theme}
						id={theme}
					/>
					<ThemePreview {theme} />
				</label>
			{/each}
		</div>
	</div>

	<h3 class="mt-8 text-3xl font-bold">🔍 Powerful Search</h3>

	<p class="text-lg">
		Searching for something shouldn't feel like a treasure hunt. With Cliparoo, you can quickly find
		what you need, whether it's a recent entry or a specific snippet. Fast, efficient, and always at
		your fingertips.
	</p>

	<CliparooSearchExample />

	<h2 class="text-4xl font-bold">📊 Clean Dashboard</h2>

	<p class="mt-4 text-lg">
		Visualize your clipboard like never before. Cliparoo's dashboard gives you a bird's-eye view of
		your saved entries, making visualization a breeze. Every app should have one!
	</p>

	<div class="relative h-[28rem]" aria-hidden="true">
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
			class="lucide lucide-chart-bar-big absolute left-2 top-4 size-44 text-primary opacity-80 sm:size-56"
			><path d="M3 3v16a2 2 0 0 0 2 2h16" /><rect x="7" y="13" width="9" height="4" rx="1" /><rect
				x="7"
				y="5"
				width="12"
				height="4"
				rx="1"
			/></svg
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
			class="lucide lucide-trending-up absolute right-1 top-6 size-44 text-secondary opacity-80 sm:size-56"
			><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg
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
			class="lucide lucide-chart-pie absolute bottom-6 left-1/2 size-56 -translate-x-1/2 text-accent opacity-80 sm:size-80"
			><path
				d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"
			/><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /></svg
		>
		<span class="absolute bottom-0 left-0 text-sm italic">
			*Images are for illustrative purposes only.
		</span>
	</div>
</Section>
