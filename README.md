### Example showing Deck.gl does not work correctly with Google Maps and Angular/Webpack AOT prod build
1.  `npm install`
2.  `npm run start` - This will run the app in dev mode with JIT compilation. Go to http://localhost:4201 in your browser and observe that deck.gl is loading correctly and placing an image of a cat over San Francisco. Ignore the Google maps no-api-key errors.
3.  `npm run start:prod-mode` - This will run the app in prod mode with AOT compilation. Observe that deck.gl does not load and has errors in the browser console. I did set `"sourceMap": true` in angular.json to make the console errors more understandable.
