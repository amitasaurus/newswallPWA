console.happy = console.log.bind(console, '😀');
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('sw.js')
		.then(function(registration) {
			console.happy('ServiceWorker registration successful :) ', registration);
		})
		.catch(function(err) {
			console.log('ServiceWorker registration failed :( ', err);
		});
}