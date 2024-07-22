export function handleProfileChange(profile: string, callback: (profile: string) => void) {
    console.log(`Selected Profile: ${profile}`);
    callback(profile);
}