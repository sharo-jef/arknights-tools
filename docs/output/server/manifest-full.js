export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["date.txt","favicon.png","open-jobs.csv"]),
	mimeTypes: {".txt":"text/plain",".png":"image/png",".csv":"text/csv"},
	_: {
		client: {"start":"_app/immutable/entry/start.e2ccdb1d.js","app":"_app/immutable/entry/app.b5e2a9b6.js","imports":["_app/immutable/entry/start.e2ccdb1d.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.47426bdd.js","_app/immutable/entry/app.b5e2a9b6.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.d545fc7a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/public-recruitment",
				pattern: /^\/public-recruitment\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();