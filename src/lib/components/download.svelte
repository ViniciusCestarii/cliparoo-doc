<script lang="ts">
	import Section from './section.svelte';

	interface Props {
		version: string;
	}

	const { version }: Props = $props();
</script>

<Section id="download">
	<h2 class="text-4xl font-bold">Download Cliparoo <span class="font-normal">V{version}</span></h2>

	<div class="mt-8">
		{#snippet downloadButton(file: string, name: string, description: string, className: string)}
			<a
				href={`https://github.com/Abdenasser/neohtop/releases/download/v${version}/${file}`}
				class={'btn btn-lg flex h-auto flex-col items-start text-lg ' + className}
			>
				<span>{name}</span>

				<span class="text-sm font-normal">
					{description}
				</span>
			</a>
		{/snippet}

		<h3>Windows</h3>

		<div class="flex flex-col items-center space-y-4">
			{@render downloadButton(
				`Cliparoo_${version}_x64-setup.exe`,
				'🏘️ Windows',
				'Windows 10 or later',
				'btn-primary'
			)}
		</div>

		<h3>Linux</h3>

		<div class="flex flex-col items-center space-y-4">
			{@render downloadButton(
				`Cliparoo_${version}_amd64.deb`,
				'📦 .deb Package',
				'Debian/Ubuntu',
				'btn-accent'
			)}

			{@render downloadButton(
				`Cliparoo_${version}_amd64.AppImage`,
				'🐧 AppImage',
				'Universal Linux',
				'btn-accent'
			)}

			{@render downloadButton(
				`Cliparoo-${version}-1.x86_64.rpm`,
				'📦 .rpm Package',
				'Fedora/RHEL x86_64',
				'btn-accent'
			)}
		</div>

		<h3>macOS</h3>

		<div class="flex flex-col items-center space-y-4">
			{@render downloadButton(
				`Cliparoo_${version}_x64.dmg`,
				'💻 Intel Chip',
				'macOS 10.15 or later',
				'btn-secondary'
			)}

			{@render downloadButton(
				`Cliparoo_${version}_aarch64.dmg`,
				'🍎 Apple Silicon',
				'macOS 11.0 or later',
				'btn-secondary'
			)}
		</div>
	</div>
</Section>
