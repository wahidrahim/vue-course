// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue({
	el: '#app',
	data: {
		title: 'Hello World!',
		link: 'https://google.ca',
		finishedLink: '<a href="http://google.com">google</a>'
	},
	methods: {
		hello: function() {
			this.title = 'lolol'
			return this.title
		}
	}
})
