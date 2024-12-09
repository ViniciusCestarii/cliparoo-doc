<script lang="ts">
	import Accordion from './accordion.svelte';
	import Section from './section.svelte';
	import H3Typography from './typography/h3-typography.svelte';
</script>

<Section id="faq">
	<H3Typography>Frequently Asked Questions</H3Typography>

	<div class="join join-vertical mt-8 max-w-screen-md mx-auto flex">
		<Accordion accordionTitle="What is Cliparoo?" accordionName="faq" startOpen>
			Cliparoo is a clipboard manager that allows you to save and organize your clipboard history.
		</Accordion>

		<Accordion accordionTitle="How does Cliparoo work?" accordionName="faq">
			Cliparoo automatically captures clipboard content and stores it as entries. You can view,
			organize, and interact with these entries.
		</Accordion>

		<Accordion accordionTitle="What types of content can Cliparoo handle?" accordionName="faq">
			Cliparoo currently supports text-based content and may expand to support other formats like
			images or files in future updates.
		</Accordion>

		<Accordion
			accordionTitle="Does Cliparoo save clipboard history between sessions?"
			accordionName="faq"
		>
			Yes, Cliparoo uses localStorage to persist clipboard entries, ensuring your history is
			available even after closing the app.
		</Accordion>

		<Accordion accordionTitle="How do I reset my clipboard history?" accordionName="faq">
			You can reset your clipboard history by selecting the "Reset Data" option in Cliparoo's menu,
			clearing all saved entries.
		</Accordion>

		<Accordion accordionTitle="Is Cliparoo secure?" accordionName="faq">
			Cliparoo values your privacy and stores all data locally on your device. No clipboard data is
			sent to external servers.
		</Accordion>

		<Accordion accordionTitle="What operating systems does Cliparoo support?" accordionName="faq">
			Cliparoo is a desktop application built with Tauri, making it compatible with Windows, macOS,
			and Linux.
		</Accordion>
	</div>
</Section>
