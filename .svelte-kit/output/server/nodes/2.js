

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BeQ3GyvZ.js","_app/immutable/chunks/disclose-version.CCLMpPl5.js","_app/immutable/chunks/runtime.D1ZXRthU.js"];
export const stylesheets = [];
export const fonts = [];
