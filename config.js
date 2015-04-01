var PULP_SETTINGS = {
	"pubDate": "Jan 1, 1970",
	"imgFormat": "jpg",
	"whitelabel": {
		"files": {
			"js": [] // A list of paths for any other javascript files to include. Example configuation `["header.js"]`. Path starts at the `whitelist` folder
		},
		"logo": "" // HTML for a logo. Example configuration `"<img src='imgs/assets/logo.png'/>"`. Path starts at the project root folder
	},
	"startOnFirstPage": true,
	"lazyLoadExtent": 6,
	"transitionDuration": "400ms",
	"gutterWidth": 2,
	"drawerTransitionDuration": 500,
	"social": {
		"twitter_text": "THE TEXT TO DISPLAY WHEN SOMEONE CLICKS ON THE TWEET BUTTON",
		"twitter_account": "THE RELATED TWITTER ACCOUNT.", // Example configuration `"ajam"`. Displays in tweet as `via @ajam`.
		"fb_text": "THE TEXT TO DISPLAY WHEN SOMEONE CLICKS ON THE FACEBOOK SHARE BUTTON",
		"promo_img_url": "PUBLISHED URL FOR IMAGE TO USE AS SOCIAL PROMO", // Example configuration: `"http://projects.aljazeera.com/2014/terms-of-service/imgs/promos/promo.jpg"`. TODO, this could be removed and tweet buttson grab path in og tag
		"fb_app_id": "YOUR FB APP ID" // Facebook requires that you tie these buttons to an app. Example configuration: `"892982325351256"`
	}
}
