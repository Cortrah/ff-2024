export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","sgtfury.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.pqLOiwbq.js","app":"_app/immutable/entry/app.v3nc4ofA.js","imports":["_app/immutable/entry/start.pqLOiwbq.js","_app/immutable/chunks/entry.D5plPocN.js","_app/immutable/chunks/runtime.D1ZXRthU.js","_app/immutable/entry/app.v3nc4ofA.js","_app/immutable/chunks/runtime.D1ZXRthU.js","_app/immutable/chunks/render.DLYfWhte.js","_app/immutable/chunks/disclose-version.CCLMpPl5.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
