import { getVersion } from '$lib/fetch-cliparoo';

export async function load() {
	const version = await getVersion();

	return {
		version
	};
}
