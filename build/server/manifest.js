const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".env","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.de1a36f5.js","app":"_app/immutable/entry/app.92577eea.js","imports":["_app/immutable/entry/start.de1a36f5.js","_app/immutable/chunks/index.cdd841bc.js","_app/immutable/chunks/singletons.20660946.js","_app/immutable/chunks/index.3e411c39.js","_app/immutable/entry/app.92577eea.js","_app/immutable/chunks/index.cdd841bc.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-f8cdd6f1.js')),
			__memo(() => import('./chunks/1-998e45ff.js')),
			__memo(() => import('./chunks/2-ec3fe2b3.js')),
			__memo(() => import('./chunks/3-925ad27e.js')),
			__memo(() => import('./chunks/4-b47cfd7d.js')),
			__memo(() => import('./chunks/5-ce84bd0f.js')),
			__memo(() => import('./chunks/6-ed5efc14.js')),
			__memo(() => import('./chunks/7-d3035e8f.js')),
			__memo(() => import('./chunks/8-51293e2e.js')),
			__memo(() => import('./chunks/9-0d166ae9.js')),
			__memo(() => import('./chunks/10-0cccd0ea.js')),
			__memo(() => import('./chunks/11-339793d7.js')),
			__memo(() => import('./chunks/12-40b3877e.js')),
			__memo(() => import('./chunks/13-bd72bc38.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/application/invitationReceived",
				pattern: /^\/application\/invitationReceived\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/application/invitationSent",
				pattern: /^\/application\/invitationSent\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/application/myProfile",
				pattern: /^\/application\/myProfile\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/application/searchUsers",
				pattern: /^\/application\/searchUsers\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/application/userProfile/[slug]",
				pattern: /^\/application\/userProfile\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/resetPassword",
				pattern: /^\/resetPassword\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/resetPassword/[token]",
				pattern: /^\/resetPassword\/([^/]+?)\/?$/,
				params: [{"name":"token","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/verifyEmail/[token]",
				pattern: /^\/verifyEmail\/([^/]+?)\/?$/,
				params: [{"name":"token","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

export { manifest };
//# sourceMappingURL=manifest.js.map
