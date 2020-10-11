const extendsNetworks = {
    pinterest: {
      sharer: 'https://pinterest.com/pin/create/button/?url=@url&media=@media&description=@title',
      type: 'popup',
      icon: '/pinterest.png',
    },
    linkedin: {
      sharer: 'https://www.linkedin.com/shareArticle?mini=true&url=@url&title=@title&summary=@description',
      type: 'popup',
      color: '#1786b1',
      icon: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M910.336 0H113.664A114.005333 114.005333 0 0 0 0 113.664v796.672A114.005333 114.005333 0 0 0 113.664 1024h796.672A114.005333 114.005333 0 0 0 1024 910.336V113.664A114.005333 114.005333 0 0 0 910.336 0zM352.256 796.330667H207.189333V375.466667h145.066667z m-72.021333-477.866667a77.824 77.824 0 0 1-81.237334-74.069333A77.824 77.824 0 0 1 280.234667 170.666667a77.824 77.824 0 0 1 81.237333 73.728 77.824 77.824 0 0 1-81.237333 73.386666z m582.314666 477.866667H716.8v-227.669334c0-46.762667-18.432-93.525333-73.045333-93.525333a84.992 84.992 0 0 0-81.237334 94.549333v226.304h-140.629333V375.466667h141.653333v60.757333a155.989333 155.989333 0 0 1 136.533334-71.338667c60.416 0 163.498667 30.378667 163.498666 194.901334z" /></svg>',
    },
}

module.exports = {
    base: '/chartxcl/',
    head: [
        ['link', { rel: 'icon', href: '/chartxcl_small.png' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'keywords', content: 'chart,gtk' }],
        ['script', { 'data-ad-client': 'ca-pub-3975819313740938', async: true, src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' }],
    ],
    locales: {
        '/': {
            lang: 'English',
            title: 'chartxcl',
            description: 'Port [XCL-Charts](https://github.com/xcltapestry/XCL-Charts) to GLib/GTK with Vala',
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'chartxcl',
            description: '用 Vala 实现项目 [XCL-Charts](https://github.com/xcltapestry/XCL-Charts) 的 GLib/GTK 移植版本'
          }
    },
    themeConfig: {
        logo: '/chartxcl_small.png',
        repo: 'taozuhong/chartxcl',
        docsDir: 'docs',
        editLinks: true,
        search: true,
        searchMaxSuggestions: 10,
        locales: {
            '/': {
                label: 'English',
                selectText: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                nav: require('./nav/en'),
                sidebar: {
                    '/document/': get_sidebar_documents(),
                    '/download/': get_sidebar_versions(),
                }
            },
            '/zh/': {
                label: '简体中文',
                selectText: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                nav: require('./nav/zh'),
                sidebar: {
                    '/zh/document/': get_sidebar_documents(),
                    '/zh/download/': get_sidebar_versions(),
                }
            },
        }
    },
    plugins: [
        [ '@vuepress/google-analytics', {
            'ga': 'UA-149848419-1'
        }],
        ['social-share', {
            networks: ['facebook', 'qq', 'twitter', 'line', 'reddit', 'skype', 'douban', 'whatsapp', 'telegram', 'weibo', 'linkedin', 'pinterest'],
            email: 'taozuhong@gmail.com',
            twitterUser: 'taozuhong',
            fallbackImage: '/social-share.png',
            autoQuote: true,
            isPlain: false,
            noGlobalSocialShare: true,
            extendsNetworks,
        }],
        ['flowchart'],
        ['vuepress-plugin-zooming'],
    ],
    extraWatchFiles: [
        '.vuepress/nav/en.js',
        '.vuepress/nav/zh.js'
    ]
}

function get_sidebar_versions()
{
    return [
        '',
    ]
}

function get_sidebar_documents()
{
    return [
        '',
    ]
}
