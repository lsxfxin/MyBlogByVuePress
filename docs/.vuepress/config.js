module.exports = {
  base: '/',
  title: '程序人生-Nicholas',
  description: 'Vuepress blog demo',
  themeConfig: {
    // 你的GitHub仓库，请正确填写
    repo: 'https://github.com/xxxxxxx/blog-demo',
    // 自定义仓库链接文字。
    repoLabel: 'My GitHub',
	//启用页面滚动效果
	smoothScroll: true,
    nav: [
        { text: 'Home', link: '/' },
        { text: 'FirstBlog', link: '/blog/FirstBlog.md' }
    ],	
	sidebar: 'auto'
  }
}