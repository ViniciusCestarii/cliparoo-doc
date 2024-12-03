<script>
	import Section from './section.svelte';
	import cliparooMascot from '$assets/cliparoo-mascot.jpeg?enhanced';
	import CliparooPageExample from './cliparoo-page-example.svelte';
</script>

<Section id="home" class="hero max-w-full overflow-x-hidden bg-base-200">
	<div class="hero-content -mt-20 xl:max-w-screen-lg">
		<div class="flex flex-shrink-0 flex-col text-[4rem] font-bold leading-[1] sm:text-7xl">
			<div class="mb-16 flex flex-col pl-2 sm:mb-8 sm:pl-8">
				<span>Your</span><span>Smart</span> <span>Clipboard</span>
			</div>
			<enhanced:img
				src={cliparooMascot}
				style="mask-size: contain; mask-repeat: no-repeat;"
				alt="Cliparoo Mascot"
				class="mask-squircle w-[calc(100vw-3rem)] max-w-96 sm:size-96 sm:max-w-none"
			/>
		</div>
		<div class="-mr-36 hidden bg-base-100 sm:block">
			<CliparooPageExample />
		</div>
	</div>
</Section>
