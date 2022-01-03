var page = (function()
{
	// Needs to be async as wasm compilation is async :/
	async function init()
	{
		// We can pass in the container element and any config options for each instance
		var webgl_a = await webgl.init(
		{
			container: document.querySelector('.webgl-a'),
			background: [33,40,60],
		});

		var webgl_b = await webgl.init(
		{
			container: document.querySelector('.webgl-b'),
			background: [0,0,0],
		});

		// Example of exposing a function called set_scroll than can be used to update the webgl animation on page scroll.
		window.addEventListener('scroll', function(e)
		{
			var sp = window.scrollY / (document.body.offsetHeight - window.innerHeight);

			webgl_a.set_scroll(sp);
			webgl_b.set_scroll(sp - 1.0);
		});
	}

	window.addEventListener('load', init);
})();