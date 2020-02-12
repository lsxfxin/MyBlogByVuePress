module.exports = {
    base: '/MyBlogByVuePress/',
    title: '程序人生-Nicholas',
    description: 'Coding Life',
    head: [
        ['link', {rel: 'icon', href: '/assets/img/favicon.ico'}]
    ],
    markdown: {
        lineNumbers: true //代码块显示行号
    },
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/xxxxxxx/blog-demo',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        //启用页面滚动效果
        smoothScroll: true,
        //最后更新时间
        lastUpdated: 'Last Updated', // string | boolean
        // logo: 'hero.png',//导航栏整体的图标
        displayAllHeaders: true, // 默认值：false
        nav: [
            // {text: 'Home', link: '/'},
            {text: '万家之言', link: '/books/'},
            {
                text: '在线文档',
                // ariaLabel: 'Language Menu',
                items: [
                    {
                        text: 'Java开发文档', items: [
                        {
                            text: 'Json编辑器',
                            link: 'https://www.bejson.com/jsoneditoronline',
                            target: "_blank",
                            rel: "noopener noreferrer"
                        },
                    ]},
                    {
                        text: '其他在线文档', items: [
                        {text: 'Markdown语法文档', link: 'https://www.runoob.com/markdown/md-code.html', target: "_blank", rel: "noopener noreferrer"},
                    ] }
                ]
            },
            {
                text: '在线工具',
                // ariaLabel: 'Language Menu',
                items: [
                    {
                        text: '常用开发工具', items: [
                        {
                            text: 'Json编辑器',
                            link: 'https://www.bejson.com/jsoneditoronline',
                            target: "_blank",
                            rel: "noopener noreferrer"
                        },
                        {
                            text: 'Unix时间戳',
                            link: 'http://tool.chinaz.com/Tools/unixtime.aspx',
                            target: "_blank",
                            rel: "noopener noreferrer"
                        },
                        {text: 'Cron表达式', link: 'http://cron.qqe2.com', target: "_blank", rel: "noopener noreferrer"},
                        {
                            text: '正则表达式',
                            link: 'http://tool.chinaz.com/regex/?qq-pf-to=pcqq.c2c',
                            target: "_blank",
                            rel: "noopener noreferrer"
                        },
                        {
                            text: 'YAML <-> Properties ',
                            link: 'https://www.toyaml.com/index.html',
                            target: "_blank",
                            rel: "noopener noreferrer"
                        },
                        {
                            text: 'BASE64',
                            link: 'http://tool.chinaz.com/tools/base64.aspx',
                            target: "_blank",
                            rel: "noopener noreferrer"
                        },
                        {
                            text: 'MD5',
                            link: 'http://tool.chinaz.com/tools/md5.aspx',
                            target: "_blank",
                            rel: "noopener noreferrer"
                        },
                        {text: '二维码生成', link: 'https://cli.im', target: "_blank", rel: "noopener noreferrer"}
                    ]},
                    {
                        text: '其他在线工具', items: [
                        {text: 'Markdown在线编辑器', link: 'https://www.mdeditor.com/', target: "_blank", rel: "noopener noreferrer"},
                    ] }
                ]
            }
        ],
        sidebar: {
            '/books/': [
                {
                    title: '项目管理',   // 必要的
                    sidebarDepth: 2,    // 可选的, 默认值是 1
                    children: [
                        {
                            title: 'PMP',   // 必要的
                            sidebarDepth: 2,    // 可选的, 默认值是 1
                            children: [
                                '/books/projectmanagement/pmp/one',
                                '/books/projectmanagement/pmp/two',
                                '/books/projectmanagement/pmp/three'
                            ]
                        },
                       {
                            title: 'ACP',   // 必要的
                            sidebarDepth: 2,    // 可选的, 默认值是 1
                            children: [
                                '/books/projectmanagement/acp/《敏捷项目管理与PMI-ACP应试指南》',
                                '/books/projectmanagement/acp/two',
                                '/books/projectmanagement/acp/three'
                            ]
                        }
                    ]
                },
                {
                    title: 'Group 2',
                    sidebarDepth: 2,    // 可选的, 默认值是 1
                    children: [/* ... */]
                }
            ],

            '/bar/': [
                '', /* /bar/ */
                'three', /* /bar/three.html */
                'four'   /* /bar/four.html */
            ],

            // fallback
            '/': [
                '', /* / */
                'contact', /* /contact.html */
                'about'    /* /about.html */
            ]
        }
    }
}
