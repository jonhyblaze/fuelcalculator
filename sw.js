if (!self.define) {
	let e,
		i = {};
	const r = (r, c) => (
		(r = new URL(r + ".js", c).href),
		i[r] ||
			new Promise((i) => {
				if ("document" in self) {
					const e = document.createElement("script");
					(e.src = r), (e.onload = i), document.head.appendChild(e);
				} else (e = r), importScripts(r), i();
			}).then(() => {
				let e = i[r];
				if (!e) throw new Error(`Module ${r} didn’t register its module`);
				return e;
			})
	);
	self.define = (c, o) => {
		const s =
			e ||
			("document" in self ? document.currentScript.src : "") ||
			location.href;
		if (i[s]) return;
		let n = {};
		const d = (e) => r(e, s),
			f = { module: { uri: s }, exports: n, require: d };
		i[s] = Promise.all(c.map((e) => f[e] || d(e))).then((e) => (o(...e), n));
	};
}
define(["./workbox-b3f8ee23"], function (e) {
	"use strict";
	self.addEventListener("message", (e) => {
		e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
	}),
		e.precacheAndRoute(
			[
				{
					url: "img/apple-touch-icon.png",
					revision: "fa50d4fbddec773291f38a88fd78b67b",
				},
				{
					url: "img/favicon.ico",
					revision: "bc9cd05d643d52ce6b07509107ffb5a6",
				},
				{
					url: "img/favicon16.png",
					revision: "eb096df0eda0ac2c3b8512bb5b44f27d",
				},
				{
					url: "img/favicon32.png",
					revision: "5145748c37ca6ee5ccfbdf8c78b49e58",
				},
				{
					url: "img/logo192.png",
					revision: "f9bda1214519871f3df8abe3a2bd7b23",
				},
				{
					url: "img/logo512.png",
					revision: "26804d7f5556e79c76a025993db8e7ca",
				},
				{ url: "index.html", revision: "9215ff90bbe72f482742b6278bc16735" },
				{ url: "manifest.json", revision: "4f0a1458c02bb24d410dc9cae19011e4" },
				{ url: "README.md", revision: "d41d8cd98f00b204e9800998ecf8427e" },
				{ url: "reset.css", revision: "b325f9a2643f872acc8614b1a5deeb13" },
				{ url: "script.js", revision: "908d84d360ede918de45f5d6e1ed0ba9" },
				{
					url: "service-worker.js",
					revision: "1eb136d2f87c6394150241bc53fa4e9d",
				},
				{ url: "style.css", revision: "91d192ca35c0528ce2b23b7dab55bf4e" },
			],
			{ ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
		);
});
//# sourceMappingURL=sw.js.map
