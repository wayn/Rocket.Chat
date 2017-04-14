
RocketChat.API.v1.addRoute('bots.medium', { authRequired: false }, {
	get() {
		const result = HTTP.call('GET', 'https://news-at.zhihu.com/api/3/stories/latest');
		return RocketChat.API.v1.success(result.data.top_stories);
	}
});
