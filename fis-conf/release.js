/**
 * Created by julien.zhang on 2014/10/10.
 */

var _domains_ = '{#$assets_url#}';

//开启simple插件，注意需要先进行插件安装 npm install -g fis-postpackager-simple
fis.config.set('modules.postpackager', 'simple');

fis.config.set('project.include', /^\/(?:templates|js|css|img)\/.*$/i);


fis.config.set('roadmap.path', [
    {
        reg: /^\/css\/.+\.css/i,
        release: '/assets/vcn$&',
        url: _domains_ + '$&',
        useSprite: true,
        useHash: true
    },
    //pic目录下图片
    {
        reg: /^\/(?:img|templates)\/((?:[\w_-]+\/)*pic\/.+)$/i,
        release: '/assets/vcn/img/$1',
        url: _domains_ + '/img/$1',
        useHash: true
    },
    {
        reg: /^\/img\/.+/i,
        release: '/assets/vcn$&',
        url: '/vcn$&',
        useHash: true
    },
    {
        reg: /^\/js\/.+\.js/i,
        release: '/assets/vcn$&',
        url: _domains_ + '$&',
        isJsLike: true,
        useHash: true
    },
    {
        reg: /^\/templates\/(.+\.html)/i,
        release: '/view/$1',
        useSprite: true,
        isHtmlLike: true
    },
    {
        reg: '**.js',
        release: '/assets/vcn/js$&',
        url: _domains_ + '/js$&',
        isJsLike: true,
        useHash: true
    },
    {
        reg: /.*(?:include|src|demo)\/.+\.css/i,
        release: '/assets/vcn/css$&',
        url: _domains_ + '/css$&',
        useSprite: true,
        isCssLike: true,
        useHash: true
    },
    {
        reg: /.*\/(.+\.css)/i,
        release: '/assets/vcn/css/$1',
        url: _domains_ + '/css/$1',
        useSprite: true,
        isCssLike: true,
        useHash: true
    },
    {
        reg: /^\/.*\/(_[-_\w]+\.(?:jpg|png|gif))/i,
        release: '/assets/vcn/img/$1',
        url: '/vcn/img/$1'
    },
    //处理css目录里的sprite图片
    {
        reg: /^\/css\/(.+\.(?:jpg|png|gif))/i,
        release: '/assets/vcn/img/$1',
        url:'/vcn/img/$1',
        useHash: true
    },
    {
        reg: /\/templates\/(.+\.(?:jpg|png|gif))/i,
        release: '/assets/vcn/img/$1',
        url: _domains_ + '/img/$1',
        useHash: true
    },
    {
        reg: /.*\.(?:jpg|png|gif)/i,
        release: '/assets/vcn/img$&',
        url: _domains_ + '/img$&',
        useHash: true
    }
]);


fis.config.set('settings.spriter.csssprites.margin', 10);
fis.config.set('settings.spriter.csssprites.layout', 'matrix');
fis.config.set('settings.spriter.csssprites.htmlUseSprite', true);
fis.config.set('settings.spriter.csssprites.styleReg', /(<style(?:(?=\s)[\s\S]*?["'\s\w\/\-]>|>))([\s\S]*?)(<\/style\s*>|$)/ig);


//使用fis release --dest remote来使用这个配置
fis.config.merge({
    deploy : {
        remote : {
            to : './php',
            exclude : /(?:\/(?:include|src|demo|example|data|test)\/.+\.(?:html|js|css))|(?:\/_[-_\w\d]+\.html)|(?:\/.+\.md)/i
        }
    }
});