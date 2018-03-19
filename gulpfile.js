var gulp = require('gulp');
gulp.task('generate-sw', function() {
	var path = require('path');
	var swPrecache = require('sw-precache');
	var rootDir = './assets';
	var swOptions = {
		cacheId: 'static-cache-v2',
		staticFileGlobs: ['./index.html',
						  './index.js',
      					  './assets/**/*.{css,js,html}'],
		verbose: true,
		handleFetch: true,
		stripPrefix: '.',
		runtimeCaching : [{
			urlPattern : /^https:\/\/newsapi.org\/v2\/top-headlines/,
			handler : 'cacheFirst',
			options : {
				cache : {
					name : 'headline',
    				maxEntries : 1,
    				maxAgeSeconds : 60 * 60 * 24
				}
			}
		}]
	}
	return swPrecache.write('./sw.js', swOptions);
})