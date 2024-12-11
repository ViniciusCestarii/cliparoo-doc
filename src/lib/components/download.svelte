<script lang="ts">
	import Section from './section.svelte';
	import H2Typography from './typography/h2-typography.svelte';
	import H3Typography from './typography/h3-typography.svelte';

	interface Props {
		version: string;
	}

	const { version }: Props = $props();
</script>

<Section id="download">
	<H2Typography>Download Cliparoo <span class="font-normal">V{version}</span></H2Typography>

	<div class="mx-auto mt-8 max-w-screen-md">
		{#snippet downloadButton(
			file: string,
			name: string,
			description: string,
			className: string,
			eventName: string
		)}
			<a
				onclick={() => gtag('event', eventName)}
				href={`https://github.com/ViniciusCestarii/cliparoo/releases/download/cliparoo-v${version}/${file}`}
				class={'btn btn-lg flex h-auto flex-col items-start text-lg ' + className}
			>
				<span>{name}</span>

				<span class="text-sm font-normal">
					{description}
				</span>
			</a>
		{/snippet}

		<H3Typography class="sm: pl-4">Windows</H3Typography>

		<div class="flex flex-col items-center space-y-4">
			{@render downloadButton(
				`Cliparoo_${version}_x64-setup.exe`,
				'🏘️ Windows',
				'Windows 10 or later',
				'btn-primary',
				'windows_download'
			)}
		</div>

		<H3Typography class="sm: pl-4">Linux</H3Typography>

		<div class="flex flex-col items-center space-y-4">
			{@render downloadButton(
				`Cliparoo_${version}_amd64.deb`,
				'📦 .deb Package',
				'Debian/Ubuntu',
				'btn-accent',
				'linux_download'
			)}

			{@render downloadButton(
				`Cliparoo_${version}_amd64.AppImage`,
				'🐧 AppImage',
				'Universal Linux',
				'btn-accent',
				'linux_download'
			)}

			{@render downloadButton(
				`Cliparoo-${version}-1.x86_64.rpm`,
				'📦 .rpm Package',
				'Fedora/RHEL x86_64',
				'btn-accent',
				'linux_download'
			)}
		</div>

		<H3Typography class="sm: pl-4">macOS</H3Typography>

		<div class="flex flex-col items-center space-y-4">
			{@render downloadButton(
				`Cliparoo_${version}_x64.dmg`,
				'💻 Intel Chip',
				'macOS 10.15 or later',
				'btn-secondary',
				'macos_download'
			)}

			{@render downloadButton(
				`Cliparoo_${version}_aarch64.dmg`,
				'🍎 Apple Silicon',
				'macOS 11.0 or later',
				'btn-secondary',
				'macos_download'
			)}
		</div>
	</div>
</Section>
