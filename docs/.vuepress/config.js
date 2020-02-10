module.exports = {
    base: '/MyBlogByVuePress/',
    title: '程序人生-Nicholas',
    description: 'Vuepress blog demo',
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/xxxxxxx/blog-demo',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        //启用页面滚动效果
        smoothScroll: true,
        //最后更新时间
        lastUpdated: 'Last Updated', // string | boolean
        nav: [
            { text: 'Home', link: '/' },
            { text: 'FirstBlog', link: '/blog/FirstBlog.md' },
            {
                text: '常用工具',
                // ariaLabel: 'Language Menu',
                items: [
                    { text: '常用开发工具', items: [
                        { text: 'Json编辑器', link: 'https://www.bejson.com/jsoneditoronline',target: "_blank", rel: "noopener noreferrer" },
                        { text: 'Unix时间戳', link: 'http://tool.chinaz.com/Tools/unixtime.aspx',target: "_blank", rel: "noopener noreferrer" },
                        { text: 'Cron表达式', link: 'http://cron.qqe2.com',target: "_blank", rel: "noopener noreferrer" },
                        { text: '正则表达式', link: 'http://tool.chinaz.com/regex/?qq-pf-to=pcqq.c2c',target: "_blank", rel: "noopener noreferrer" },
                        { text: 'YAML <-> Properties ', link: 'https://www.toyaml.com/index.html',target: "_blank", rel: "noopener noreferrer" },
                        { text: 'BASE64', link: 'http://tool.chinaz.com/tools/base64.aspx',target: "_blank", rel: "noopener noreferrer" },
                        { text: 'MD5', link: 'http://tool.chinaz.com/tools/md5.aspx',target: "_blank", rel: "noopener noreferrer" },
                        { text: '二维码生成', link: 'https://cli.im',target: "_blank", rel: "noopener noreferrer" }
                    ] },
                    { text: 'Japanese', items: [
                        { text: 'Chinese', link: '/language/chinese/',target: "_blank", rel: "noopener noreferrer" },
                        { text: 'Japanese', link: '/language/japanese/',target: "_blank", rel: "noopener noreferrer" }
                    ]}
                ]
            }
        ],
        sidebar: 'auto'
    }
}