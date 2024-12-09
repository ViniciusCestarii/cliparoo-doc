export async function getVersion() {
  try {
    const response = await fetch('https://api.github.com/repos/ViniciusCestarii/cliparoo/releases/latest');
    const data = await response.json();
    const version = data.tag_name as string;
    const versionNumber = version.match(/\d+\.\d+\.\d+/)?.[0];

    if (!versionNumber) {
      console.error('Failed to parse version:', version);
    }

    return versionNumber;
  } catch (error) {
    console.error('Failed to fetch version:', error);
  }
}