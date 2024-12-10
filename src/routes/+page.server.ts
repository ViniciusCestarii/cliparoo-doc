import { getVersion } from '$lib/fetch-cliparoo';

export async function load() {
	const version = await getVersion();

	if (!version) throw new Error('Failed to fetch version');

	return {
		version
	};
}
