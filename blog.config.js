// 注: process.env.XX是Vercel的环境变量，配置方式见：https://docs.tangly1024.com/article/how-to-config-notion-next#c4768010ae7d44609b744e79e2f9959a
const BLOG = {
  // Important page_id！！！Duplicate Template from  https://www.notion.so/tanghh/02ab3b8678004aa69e9e415905ef32a5
  NOTION_PAGE_ID:
        process.env.NOTION_PAGE_ID || 'a66d4a535117410080a2ba0742bbae4a',
  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false, // The pseudo -static path, all articles URL ended at HTML after opening。
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 3, // Update the content cache separate unit (second); that is, each page has a pure static period of 5 seconds, no matter how many access this period, it will not capture the NOTION data; the value of the larger value will help save Vercel resources and increase the access rate at the same time , But it will also make the article update delay。
  THEME: process.env.NEXT_PUBLIC_THEME || 'hexo', // The current theme, you can find all the support themes under the themes folder; the theme name is the folder name, such as Example, Fukasawa, Gitbook, Heo, Hexo, LANDING, Matery, Medium, Next, Nobelium, Plog, Simpler, Simpler
  THEME_SWITCH: process.env.NEXT_PUBLIC_THEME_SWITCH || true, // Whether to display the switch theme button
  LANG: process.env.NEXT_PUBLIC_LANG || 'en-US', // e.g 'zh-CN','en-US'  see /lib/lang.js for more.
  SINCE: process.env.NEXT_SINCE || 2023, // e.g if leave this empty, current year will be used.
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'light', // ['light', 'dark', 'auto'], // light Day mode, dark night mode, Auto automatic night mode according to time and theme
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], // From the night mode to time, turn off the night mode automatically according to time

  // After version 3.14.1, welcome to configuration here, and the English comma is separated to support multiple welcome typing effects。
  GREETING_WORDS: process.env.NEXT_PUBLIC_GREETING_WORDS || 'To the cold moon and back, Noone was there ! ',

  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || false, // Support the Menu type. From the 3.12.0 version, each theme will gradually support flexible secondary menu configuration to replace the original Page type. This configuration is the test function, the default shutdown is closed。

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || 'Noone', // Your nickname, such as tangly1024
  BIO: process.env.NEXT_PUBLIC_BIO || 'Noone on the moon', // About the Author
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://thecoldmoon.vercel.app', // Website address
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'Noone, cold moon', // Website keyword English comma is separated

  // 社交链接，不需要可留空白，例如 CONTACT_WEIBO:''
  CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '', // Email address, such as mail@tangly1024.com
  CONTACT_WEIBO: process.env.NEXT_PUBLIC_CONTACT_WEIBO || '', // Your Weibo personal homepage
  CONTACT_TWITTER: process.env.NEXT_PUBLIC_CONTACT_TWITTER || '', // Your Twitter personal homepage
  CONTACT_GITHUB: process.env.NEXT_PUBLIC_CONTACT_GITHUB || '', // Your github personal homepage, such as https://github.com/tangly1024
  CONTACT_TELEGRAM: process.env.NEXT_PUBLIC_CONTACT_TELEGRAM || 'https://t.me/Clarkmann09', // Your Telegram address, such as https://t.me/tangly_1024
  CONTACT_LINKEDIN: process.env.NEXT_PUBLIC_CONTACT_LINKEDIN || '', // Your LinkedIn homepage
  CONTACT_INSTAGRAM: process.env.NEXT_PUBLIC_CONTACT_INSTAGRAM || '', // Your Instagram address
  CONTACT_BILIBILI: process.env.NEXT_PUBLIC_CONTACT_BILIBILI || '', // Station B homepage

  CONTACT_YOUTUBE: process.env.NEXT_PUBLIC_CONTACT_YOUTUBE || '', // Youtube homepage


  NOTION_HOST: process.env.NEXT_PUBLIC_NOTION_HOST || 'https://www.notion.so', // NOTION domain name, you can choose to use your own domain name for reverse proxy. If you don’t know what the reverse proxy is, please do not modify this item


  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico', // blog favicon configuration, use /public/Favicon.ico default to support online pictures, such as https://img.imesong.com/favicon.png

  RANDOM_IMAGE_URL: process.env.NEXT_PUBLIC_RANDOM_IMAGE_URL || '', // Random picture API, if the keywords below, the cover of the homepage, the avatar, the cover map of the article will be replaced by random picture

  RANDOM_IMAGE_REPLACE_TEXT: process.env.NEXT_PUBLIC_RANDOM_IMAGE_NOT_REPLACE_TEXT || 'images.unsplash.com', // The URL keyword of the replacement picture is triggered (multiple supports are supported by English commas). Only this keyword contains this keyword in the picture address will replace it with random picture URL
// Eg: Images.unsplash.com (All pictures in the notion graph will be replaced), if you have added a random picture URL in the note, it happens that the service runs or hangs up. Configure the url here
// By default, you will upload you to the cover map and avatars of the Notion's homepage. It is recommended to put the homepage cover and avatar in other graph beds and configure link in the note.

  
  // START ************Website font*****************

  FONT_STYLE: process.env.NEXT_PUBLIC_FONT_STYLE || 'font-sans', // ['font-serif','font-sans'] Two options, both sages and non -sterilization: refer to https://www.jianshu.com/p/55e410BD2115
// Font CSS, such as https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.csss
  FONT_URL: [
    // 'https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css',
    'https://fonts.googleapis.com/css?family=Bitter&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300&display=swap'
  ],
// No -screen fonts such as '"lxgwwenkai"'
  FONT_SANS: [
    // '"LXGW WenKai"',
    '"PingFang SC"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Hiragino Sans GB"',
    '"Microsoft YaHei"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Segoe UI"',
    '"Noto Sans SC"',
    'HarmonyOS_Regular',
    '"Helvetica Neue"',
    'Helvetica',
    '"Source Han Sans SC"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"'
  ],
  // Setting fonts such as '"lxgwwenkai"'
  FONT_SERIF: [
    // '"LXGW WenKai"',
    'Bitter',
    '"Noto Serif SC"',
    'SimSun',
    '"Times New Roman"',
    'Times',
    'serif',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Apple Color Emoji"'
  ],
  FONT_AWESOME: process.env.NEXT_PUBLIC_FONT_AWESOME_PATH || 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', // font-aWESOME font icon address; optional /CSS/all.min.css, https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1- m/font-Awesome/6.0.0/css/ all.min.css

  // END ************Website font*****************

  
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true, // Whether the content of the page is allowed to be allowed to be allowed by default, if it is set to false, the full stack is prohibited from copying content。
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU: process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU || true, // Custom right -click menu, cover the system menu

  // Custom outer script, external style

  CUSTOM_EXTERNAL_JS: [''], // e.g. ['http://xx.com/script.js','http://xx.com/script.js']
  CUSTOM_EXTERNAL_CSS: [''], // e.g. ['http://xx.com/style.css','http://xx.com/style.css']

  // Whether the sidebar layout is reversed (change from left, right, right to the left) has supported theme: hexo Next Medium Fukasawa Example
  LAYOUT_SIDEBAR_REVERSE: process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,

  // A small plug-in display your Facebook Fan Page ~ @See https://tw.andys.pro/article/add-faceBook-fanpage-notionnext
  FACEBOOK_PAGE_TITLE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_TITLE || null, // The title bar of the Facebook Page Widget of the sidebar, fill in '' 'without the title bar E.G Facebook fan group'
  FACEBOOK_PAGE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE || null, // Facebook Page connection e.g https://www.facebook.com/tw.andys.pro
  FACEBOOK_PAGE_ID: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID || '', //Facebook Page ID to enable Messenger chat function
  FACEBOOK_APP_ID: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '', // Facebook App ID to enable messenger chat function to get: https://developers.Facebook.com/

  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '', // Record number of Fujian ICP for XXXXXXX

  // START********Code -related********
  // PrismJs Code -related
  PRISM_JS_PATH: 'https://npm.elemecdn.com/prismjs@1.29.0/components/',
  PRISM_JS_AUTO_LOADER: 'https://npm.elemecdn.com/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js',

  // Code theme @See https://github.com/prismjs/prism- themes
  PRISM_THEME_PREFIX_PATH: process.env.NEXT_PUBLIC_PRISM_THEME_PREFIX_PATH || 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.css', // Code block default theme
  PRISM_THEME_SWITCH: process.env.NEXT_PUBLIC_PRISM_THEME_SWITCH || true, // Whether to turn on the light/dark mode code theme switch; after opening, the following two themes will be displayed
  PRISM_THEME_LIGHT_PATH: process.env.NEXT_PUBLIC_PRISM_THEME_LIGHT_PATH || 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-solarizedlight.css', // Light color mode theme
  PRISM_THEME_DARK_PATH: process.env.NEXT_PUBLIC_PRISM_THEME_DARK_PATH || 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.min.css', // Dark mode theme

  CODE_MAC_BAR: process.env.NEXT_PUBLIC_CODE_MAC_BAR || true, // The red, yellow and green icon of MAC display in the upper left corner of the code
  CODE_LINE_NUMBERS: process.env.NEXT_PUBLIC_CODE_LINE_NUMBERS || false, // Whether to display line number
  CODE_COLLAPSE: process.env.NEXT_PUBLIC_CODE_COLLAPSE || true, // Whether to support folding code box
  CODE_COLLAPSE_EXPAND_DEFAULT: process.env.NEXT_PUBLIC_CODE_COLLAPSE_EXPAND_DEFAULT || true, // Folding code default is the unfolding state

  // END********Code -related********

  // Mermaid Chart CDN
  MERMAID_CDN: process.env.NEXT_PUBLIC_MERMAID_CDN || 'https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.2.4/mermaid.min.js', // CDN
  // QRCodeCDN
  QR_CODE_CDN: process.env.NEXT_PUBLIC_QR_CODE_CDN || 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',

  BACKGROUND_LIGHT: '#eeeeee', // use hex value, don't forget '#' e.g #fffefc
  BACKGROUND_DARK: '#000000', // use hex value, don't forget '#'
  SUB_PATH: '', // leave this empty unless you want to deploy in a folder

  POST_SHARE_BAR_ENABLE: process.env.NEXT_PUBLIC_POST_SHARE_BAR || 'true', // Article sharing function will display a sharing strip at the bottom
  POSTS_SHARE_SERVICES: process.env.NEXT_PUBLIC_POST_SHARE_SERVICES || 'link,wechat,qq,weibo,email,facebook,twitter,telegram,messenger,line,reddit,whatsapp,linkedin', // Share service, display in order, comma is separated
  // 所有支持的分享服务：link(复制链接),wechat(微信),qq,weibo(微博),email(邮件),facebook,twitter,telegram,messenger,line,reddit,whatsapp,linkedin,vkshare,okshare, Tumblr, LiveJournal, Mailru, Viber, Workplace, Pocket, Instapaper, Hatena

  POST_URL_PREFIX: process.env.NEXT_PUBLIC_POST_URL_PREFIX || 'article',
  // POST The default path prefix of the type article, for example, the path of the default POST type is  /article/[slug]
  // If this item is configured as '' empty, the article will have no prefix path. Use scene: I hope that the article prefix path is /Post, support multi -level
  // Support the function similar to WP can customize articles connecting format: https://wordpress.org/documentation/article/customize- permalinks/.
  // Example: If you want to connect and change to the prefix Article + timestamp, the variable can be changed to: 'article/%year%/%month%day%'

  POST_LIST_STYLE: process.env.NEXT_PUBLIC_POST_LIST_STYLE || 'page', // ['page','scroll] Article list style: page number paging, single page rolling loading
  POST_LIST_PREVIEW: process.env.NEXT_PUBLIC_POST_PREVIEW || 'false', //  Whether to load the article preview in the list
  POST_PREVIEW_LINES: 12, // Preview the number of blogs
  POST_RECOMMEND_COUNT: 6, // Recommended articles
  POSTS_PER_PAGE: 12, // post counts per page
  POSTS_SORT_BY: process.env.NEXT_PUBLIC_POST_SORT_BY || 'notion', // Sorting method 'date' press time, 'notion' controlled by notion

  ALGOLIA_APP_ID: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || null, // Check here https://dashboard.algolia.com/account/api-keys/
  ALGOLIA_ADMIN_APP_KEY: process.env.ALGOLIA_ADMIN_APP_KEY || null, // Key in the background, don't be exposed to the code, check here https://dashboard.algolia.com/account/api- keys/
  ALGOLIA_SEARCH_ONLY_APP_KEY: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_APP_KEY || null, // Client search key
  ALGOLIA_INDEX: process.env.NEXT_PUBLIC_ALGOLIA_INDEX || null, // Create an index in Algolia for databases
  //   ALGOLIA_RECREATE_DATA: process.env.ALGOLIA_RECREATE_DATA || process.env.npm_lifecycle_event === 'build', // Construct indexing data for True; build


  PREVIEW_CATEGORY_COUNT: 16, // The maximum number of classifications displayed on the homepage, 0 is not limited
  PREVIEW_TAG_COUNT: 16, // The number of labels displayed at the most homepage, 0 is not limited

  POST_DISABLE_GALLERY_CLICK: process.env.NEXT_PUBLIC_POST_DISABLE_GALLERY_CLICK || false, // The album view is prohibited from clicking, which is convenient for the album on the friend chain page to insert the link

  //   ********Dynamic special effects related********
  // Mouse click firework special effect
  FIREWORKS: process.env.NEXT_PUBLIC_FIREWORKS || false, // switch
// Fireworks color, thank you https://github.com/vixCity submitted color
  FIREWORKS_COLOR: [
    '255, 20, 97',
    '24, 255, 146',
    '90, 135, 255',
    '251, 243, 140'
  ],

  // Sakura fall special effect
  SAKURA: process.env.NEXT_PUBLIC_SAKURA || false, // switch
  // Floating line special effect
  NEST: process.env.NEXT_PUBLIC_NEST || false, // switch
  // Dynamic ribbon special effect
  FLUTTERINGRIBBON: process.env.NEXT_PUBLIC_FLUTTERINGRIBBON || false, // switch
  // Static ribbon special effect
  RIBBON: process.env.NEXT_PUBLIC_RIBBON || false, // switch
 // Starry rain special effects night mode will take effect
  STARRY_SKY: process.env.NEXT_PUBLIC_STARRY_SKY || false, // switch

  //   ********Delivery component related********
  // Chatbase Whether to display the Chatbase robot https://www.chatbase.co/
  CHATBASE_ID: process.env.NEXT_PUBLIC_CHATBASE_ID || null,
  // Webwhizai robot @see https://github.com/webwhiz-ai/webwhiz
  WEB_WHIZ_ENABLED: process.env.NEXT_PUBLIC_WEB_WHIZ_ENABLED || false, // Whether to display
  WEB_WHIZ_BASE_URL: process.env.NEXT_PUBLIC_WEB_WHIZ_BASE_URL || 'https://api.webwhiz.ai', // You can build a server
  WEB_WHIZ_CHAT_BOT_ID: process.env.NEXT_PUBLIC_WEB_WHIZ_CHAT_BOT_ID || null, // Get ID in the background

  // Suspended pendant
  WIDGET_PET: process.env.NEXT_PUBLIC_WIDGET_PET || true, // Whether to show pet pendant
  WIDGET_PET_LINK:
        process.env.NEXT_PUBLIC_WIDGET_PET_LINK ||
        'https://cdn.jsdelivr.net/npm/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json', // Pendant model address @see https://github.com/xiazeyu/live2d-widget-models
  WIDGET_PET_SWITCH_THEME: process.env.NEXT_PUBLIC_WIDGET_PET_SWITCH_THEME || true, // Click on pet pendant to switch blog theme

  // Music playback plug -in
  MUSIC_PLAYER: process.env.NEXT_PUBLIC_MUSIC_PLAYER || false, // Whether to play plug -in with music
  MUSIC_PLAYER_VISIBLE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_VISIBLE || true, // Whether the playback and switching in the lower left corner, if you use the player, open the automatic playback before hiding, it will be played in a similar background music.
  MUSIC_PLAYER_AUTO_PLAY:
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_AUTO_PLAY || true, // Whether to play automatically, but automatic playback often does not take effect (mobile devices do not support automatic playback)
  MUSIC_PLAYER_LRC_TYPE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_LRC_TYPE || '0', // Lyrics display type, optional value: 3 | 1 | 0 (0: disable LRC lyrics, 1: LRC format string, 3: LRC file URL) (premise that there is a configuration lyrics path, which is invalid for meting)
  MUSIC_PLAYER_CDN_URL:
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_CDN_URL ||
        'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.js',
  MUSIC_PLAYER_ORDER: process.env.NEXT_PUBLIC_MUSIC_PLAYER_ORDER || 'list', // Default playback method, order list, random Random

  MUSIC_PLAYER_AUDIO_LIST: [
    // Example music list. In addition to the following configuration, lyrics can also be configured. https://aplayer.js.org/#/zh-Hans/
    {
      name: 'Feelings to dance together',
      artist: 'Falcom Sound Team jdk',
      url: 'https://music.163.com/song/media/outer/url?id=731419.mp3',
      cover:
            'https://p2.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    },
    {
      name: 'Royal City Grannel',
      artist: 'Falcom Sound Team jdk',
      url: 'https://music.163.com/song/media/outer/url?id=731355.mp3',
      cover:
            'https://p1.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    }
  ],
  MUSIC_PLAYER_METING: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING || false, // Whether you want to open MetingJS and get a song list from the platform. Will cover the custom Music_player_audio_list, more configuration information: https://github.com/metowolf/metingjs
  MUSIC_PLAYER_METING_SERVER:
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_SERVER || 'netease', // Music platform，[netease, tencent, kugou, xiami, baidu]
  MUSIC_PLAYER_METING_ID:
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_ID || '60198', // Corresponding song list id
  MUSIC_PLAYER_METING_LRC_TYPE:
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_LRC_TYPE || '1', // Optional value: 3 | 1 | 0 (0: disable LRC lyrics, 1: LRC format string, 3: LRC file URL)

  //   ********Delivery component related********
  // ----> Comment interaction can also open multiple support for Waline Valine Giscus Cusdis Utterrances Gitalk

  // artalk Comments plug -in
  COMMENT_ARTALK_SERVER: process.env.NEXT_PUBLIC_COMMENT_ARTALK_SERVER || '', // ArtalkServert Back -end address https://artalk.js.org/guide/deploy.html
  COMMENT_ARTALK_JS: process.env.NEXT_PUBLIC_COMMENT_ARTALK_JS || 'https://cdnjs.cloudflare.com/ajax/libs/artalk/2.5.5/Artalk.js', // ArtalkServert js cdn
  COMMENT_ARTALK_CSS: process.env.NEXT_PUBLIC_COMMENT_ARTALK_CSS || 'https://cdnjs.cloudflare.com/ajax/libs/artalk/2.5.5/Artalk.css', // ArtalkServert css cdn

  // twikoo
  COMMENT_TWIKOO_ENV_ID: process.env.NEXT_PUBLIC_COMMENT_ENV_ID || '', // TWIKOOBack-end address Tencent Cloud Environment Fill in ENVID; Vercel environment fill domain name, tutorial: https://tangly1024.com/article/notionnext-twikoo
  COMMENT_TWIKOO_COUNT_ENABLE: process.env.NEXT_PUBLIC_COMMENT_TWIKOO_COUNT_ENABLE || false, // Whether the blog list shows the number of comments
  COMMENT_TWIKOO_CDN_URL: process.env.NEXT_PUBLIC_COMMENT_TWIKOO_CDN_URL || 'https://cdn.staticfile.org/twikoo/1.6.17/twikoo.min.js', // twikoo客户端cdn

  // utterance
  COMMENT_UTTERRANCES_REPO:
        process.env.NEXT_PUBLIC_COMMENT_UTTERRANCES_REPO || '', // Your code warehouse name, for example, I am 'Tangly1024/Notionnext'; more documentation refers to https://utteranc.es/

  // giscus @see https://giscus.app/
  COMMENT_GISCUS_REPO: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO || '', // Your Github warehouse name E.G 'Tangly1024/NOTIONNEXT'
  COMMENT_GISCUS_REPO_ID: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO_ID || '', // Your github repo ID e.g (you can see it after setting GISCUS)
  COMMENT_GISCUS_CATEGORY_ID:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_CATEGORY_ID || '', // Category ID in your Github Discussions (you can see it after setting GISCUS)
  COMMENT_GISCUS_MAPPING:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_MAPPING || 'pathname', // Which method of your github discussions is used to calibrate articles, preset "PathName '
  COMMENT_GISCUS_REACTIONS_ENABLED:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_REACTIONS_ENABLED || '1', // Is your giscus open the article and emoticons '1' to open "0" to close the default opening
  COMMENT_GISCUS_EMIT_METADATA:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_EMIT_METADATA || '0', // Whether your giscus extract MetAdata '1' 1 ‘0 'Close the default closure
  COMMENT_GISCUS_INPUT_POSITION:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_INPUT_POSITION || 'bottom', // Your giscus published a message location 'top' 'top' top 'top, preset' bottom '
  COMMENT_GISCUS_LANG: process.env.NEXT_PUBLIC_COMMENT_GISCUS_LANG || 'zh-CN', // Your giscus language e.g 'en', 'zh-tw', 'zh-cn', preset 'en'
  COMMENT_GISCUS_LOADING:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_LOADING || 'lazy', // Whether your giscus is loaded gradually and loaded, the preset "lazy '
  COMMENT_GISCUS_CROSSORIGIN:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_CROSSORIGIN || 'anonymous', // Your giscus can cross the network, preset 'anonymous'

  COMMENT_CUSDIS_APP_ID: process.env.NEXT_PUBLIC_COMMENT_CUSDIS_APP_ID || '', // data-app-id 36位 see https://cusdis.com/
  COMMENT_CUSDIS_HOST:
        process.env.NEXT_PUBLIC_COMMENT_CUSDIS_HOST || 'https://cusdis.com', // data-host, change this if you're using self-hosted version
  COMMENT_CUSDIS_SCRIPT_SRC:
        process.env.NEXT_PUBLIC_COMMENT_CUSDIS_SCRIPT_SRC ||
        '/js/cusdis.es.js', // change this if you're using self-hosted version

// gitalk comments plug -in more refer to https://gitalk.github.io/
  COMMENT_GITALK_REPO: process.env.NEXT_PUBLIC_COMMENT_GITALK_REPO || '', // Your Github warehouse name, such as 'NOTIONNEXT'
  COMMENT_GITALK_OWNER: process.env.NEXT_PUBLIC_COMMENT_GITALK_OWNER || '', // Your username E.G Tangly1024
  COMMENT_GITALK_ADMIN: process.env.NEXT_PUBLIC_COMMENT_GITALK_ADMIN || '', // Administrator username, usually E.G 'Tangly1024'
  COMMENT_GITALK_CLIENT_ID:
        process.env.NEXT_PUBLIC_COMMENT_GITALK_CLIENT_ID || '', // E.G 20 -bit ID, get in the Gitalk background
  COMMENT_GITALK_CLIENT_SECRET:
        process.env.NEXT_PUBLIC_COMMENT_GITALK_CLIENT_SECRET || '', // E.G 40 -digit ID, get in the gitalk background
  COMMENT_GITALK_DISTRACTION_FREE_MODE: false, // Similar to Facebook's interference modeless mode
  COMMENT_GITALK_JS_CDN_URL: process.env.NEXT_PUBLIC_COMMENT_GITALK_JS_CDN_URL || 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js', // gitalk客户端 js cdn
  COMMENT_GITALK_CSS_CDN_URL: process.env.NEXT_PUBLIC_COMMENT_GITALK_CSS_CDN_URL || 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css', // gitalk客户端 css cdn

  COMMENT_GITTER_ROOM: process.env.NEXT_PUBLIC_COMMENT_GITTER_ROOM || '', // Gitter chat room see https://gitter.im/ No need to leave empty
  COMMENT_DAO_VOICE_ID: process.env.NEXT_PUBLIC_COMMENT_DAO_VOICE_ID || '', // DaoVoice http://dashboard.daovoice.io/get-started
  COMMENT_TIDIO_ID: process.env.NEXT_PUBLIC_COMMENT_TIDIO_ID || '', // [tidio_id] -> //code.tidio.co/[tidio_id].js

  COMMENT_VALINE_CDN: process.env.NEXT_PUBLIC_VALINE_CDN || 'https://unpkg.com/valine@1.5.1/dist/Valine.min.js',
  COMMENT_VALINE_APP_ID: process.env.NEXT_PUBLIC_VALINE_ID || '', // Valine @see https://valine.js.org/quickstart.html 或 https://github.com/stonehank/react-valine#%E8%8E%B7%E5%8F%96app-id-%E5%92%8C-app-key
  COMMENT_VALINE_APP_KEY: process.env.NEXT_PUBLIC_VALINE_KEY || '',
  COMMENT_VALINE_SERVER_URLS: process.env.NEXT_PUBLIC_VALINE_SERVER_URLS || '', //This configuration is suitable for domestic custom domain name users, and the overseas version will automatically detect (no need to fill in manually) @see https://valine.js.org/configuration.html#serverURLs
  COMMENT_VALINE_PLACEHOLDER:
        process.env.NEXT_PUBLIC_VALINE_PLACEHOLDER || '抢个沙发吧~', // You can match background management comments https://github.com/desertsp/valine-dmin for easy viewing comments, email notifications, spam review filtering and other functions

  COMMENT_WALINE_SERVER_URL: process.env.NEXT_PUBLIC_WALINE_SERVER_URL || '', // Please configure the complete Waline comment address, such as hhttps://preview-waline.tangly1024.com @See https://waline.js.org/guide/get-started.html
  COMMENT_WALINE_RECENT: process.env.NEXT_PUBLIC_WALINE_RECENT || false, // latest comment

// This comment system is based on webmentation. For details, please refer to https://webmentation.io
// It is an open comment system based on the INDIEEWEB concept. Below comments_webmentation contains the attributes all need to be configured:
// Enable: Whether to open
// authelogin used by Autbmention, you can use Twitter or Github personal page link
// Hostname: The web are bound to webmention, usually the website of this site
// Twitter_username: Comment shows the information required by the area
// Token: Webmention -like API TOKEN
  COMMENT_WEBMENTION_ENABLE: process.env.NEXT_PUBLIC_WEBMENTION_ENABLE || false,
  COMMENT_WEBMENTION_AUTH: process.env.NEXT_PUBLIC_WEBMENTION_AUTH || '',
  COMMENT_WEBMENTION_HOSTNAME: process.env.NEXT_PUBLIC_WEBMENTION_HOSTNAME || '',
  COMMENT_WEBMENTION_TWITTER_USERNAME: process.env.NEXT_PUBLIC_TWITTER_USERNAME || '',
  COMMENT_WEBMENTION_TOKEN: process.env.NEXT_PUBLIC_WEBMENTION_TOKEN || '',

  // <---- Comments plug -in

  // ----> Site statistics
  ANALYTICS_VERCEL: process.env.NEXT_PUBLIC_ANALYTICS_VERCEL || false, // Vercel's own statistics https://vercel.com/docs/concepts/analytics/quickstart https://github.com/tangly1024/notionnext/897
  ANALYTICS_BUSUANZI_ENABLE: process.env.NEXT_PUBLIC_ANALYTICS_BUSUANZI_ENABLE || true, // Display website reading, access number see http://busuanzi.ibruce.info/
  ANALYTICS_BAIDU_ID: process.env.NEXT_PUBLIC_ANALYTICS_BAIDU_ID || '', // E.G only needs to fill in the ID of Baidu statistics, [baidu_id] -> https://hm.baidu.com/hm.js?
  ANALYTICS_CNZZ_ID: process.env.NEXT_PUBLIC_ANALYTICS_CNZZ_ID || '', // Just fill in the ID of the webmaster statistics, [cnzz_id] -> https://s9.cnzz.com/z_stat.php?id= # cnzz_id, &Web_id= baszz_id]
  ANALYTICS_GOOGLE_ID: process.env.NEXT_PUBLIC_ANALYTICS_GOOGLE_ID || '', // Google Analytics ID e.g: G-XXXXXXXXXX

  // Matomo Website statistics
  MATOMO_HOST_URL: process.env.NEXT_PUBLIC_MATOMO_HOST_URL || '', // MATOMO server address, without the slope
  MATOMO_SITE_ID: process.env.NEXT_PUBLIC_MATOMO_SITE_ID || '', // Matomo website ID
  // ACKEEWebsite visiting statistics tool
  ANALYTICS_ACKEE_TRACKER: process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_TRACKER || '', // e.g 'https://ackee.tangly1024.com/tracker.js'
  ANALYTICS_ACKEE_DATA_SERVER: process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DATA_SERVER || '', // e.g https://ackee.tangly1024.com , don't end with a slash
  ANALYTICS_ACKEE_DOMAIN_ID: process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DOMAIN_ID || '', // e.g '82e51db6-dec2-423a-b7c9-b4ff7ebb3302'

  SEO_GOOGLE_SITE_VERIFICATION:
        process.env.NEXT_PUBLIC_SEO_GOOGLE_SITE_VERIFICATION || '', // Remove the value or replace it with your own google site verification code

  SEO_BAIDU_SITE_VERIFICATION:
        process.env.NEXT_PUBLIC_SEO_BAIDU_SITE_VERIFICATION || '', // Remove the value or replace it with your own google site verification code

  // <---- Site statistics

  // START---->// Start -----> Revenue-related

  // Google Advertising
  ADSENSE_GOOGLE_ID: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_ID || '', //Google Advertising ID E.G CA-PUB-XXXXXXXXXXXXXX
  ADSENSE_GOOGLE_TEST: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_TEST || false, // Google Advertising ID test mode, this mode obtains fake test advertisements for the development of https://www.tangly1024.com/article/local-dev-google-adsense
  ADSENSE_GOOGLE_SLOT_IN_ARTICLE: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_IN_ARTICLE || '3806269138', // Google Adscene> Advertising> According to unit advertisements> New articles embedded advertisement paste the data-add-slot value in the HTML code
  ADSENSE_GOOGLE_SLOT_FLOW: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_FLOW || '1510444138', // Google Adscene> Advertising> According to unit advertisements> New information flow advertisements
  ADSENSE_GOOGLE_SLOT_NATIVE: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_NATIVE || '4980048999', // Google Adscene> Advertising> According to unit advertising> New native ads
  ADSENSE_GOOGLE_SLOT_AUTO: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_AUTO || '8807314373', // Google Adscene> Advertising> According to unit advertisements> New display advertisements (automatic advertising)

  // Wanwei Advertising
  AD_WWADS_ID: process.env.NEXT_PUBLIC_WWAD_ID || null, // https://wwads.cn/ Create your Wanwei advertising unit ID
  AD_WWADS_BLOCK_DETECT: process.env.NEXT_PUBLIC_WWADS_AD_BLOCK_DETECT || false, // Whether to turn on the wwads advertising shielding plug-in detection, after opening, it will be prompted in the advertising position @See https://github.com/bytegravity/whitelist-wwads

  // END<----Revenue -related

  // Custom configuration NOTION database field name
  NOTION_PROPERTY_NAME: {
    password: process.env.NEXT_PUBLIC_NOTION_PROPERTY_PASSWORD || 'Kamelot@2142',
    type: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE || 'type', // Type，
    type_post: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_POST || 'Post', // When the type of Type article is the same as this value, it is a blog post.
    type_page: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_PAGE || 'Page', // When the type of Type article is the same as this value, it is a single page.
    type_notice:
          process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_NOTICE || 'Notice', // When the type of Type article is the same as this value, it is an announcement
    type_menu: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_MENU || 'Menu', // When the type of Type article is the same as this value, it is the menu.
    type_sub_menu:
          process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_SUB_MENU || 'SubMenu', // When the type of Type article is the same as this value, it is a sub -menu.
    title: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TITLE || 'title', // Article title
    status: process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS || 'status',
    status_publish:
          process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_PUBLISH || 'Published', // When the status value of the Status is the same as this, it can be Chinese
    status_invisible:
          process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_INVISIBLE || 'Invisible', // When the status value of the Status is hidden at the same time, it can be Chinese. In addition, other page status will not be displayed on the blog
    summary: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SUMMARY || 'summary',
    slug: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SLUG || 'slug',
    category: process.env.NEXT_PUBLIC_NOTION_PROPERTY_CATEGORY || 'category',
    date: process.env.NEXT_PUBLIC_NOTION_PROPERTY_DATE || 'date',
    tags: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TAGS || 'tags',
    icon: process.env.NEXT_PUBLIC_NOTION_PROPERTY_ICON || 'icon'
  },

  // RSS subscription
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true, // Whether to turn on the RSS subscription function
  MAILCHIMP_LIST_ID: process.env.MAILCHIMP_LIST_ID || null, // Open the Mailichimp mail to subscribe to the customer list ID, see the document for the specific usage method
  MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY || null, // Open Mailichimp mail to subscribe to Apikey

  // Invalidation
  AVATAR: process.env.NEXT_PUBLIC_AVATAR || '/avatar.svg', // The author's avatar is covered by the icon in Notion. If there is no icon, take Avatar.png in the Public directory
  TITLE: process.env.NEXT_PUBLIC_TITLE || 'Noone Blog', // Site title, covered by the page title in NOTION; please do not leave blank here, otherwise the server cannot compile
  HOME_BANNER_IMAGE:
        process.env.NEXT_PUBLIC_HOME_BANNER_IMAGE || '/bg_image.jpg', // The background of the homepage will be covered by the cover chart in the note. If there is no cover, the /public/bg_image.jpg file in the code will be used
  DESCRIPTION:
        process.env.NEXT_PUBLIC_DESCRIPTION || 'This is a site generated by NOTIONNEXT', // Site description, covered by page description in the note

  // Website picture
  IMG_LAZY_LOAD_PLACEHOLDER: process.env.NEXT_PUBLIC_IMG_LAZY_LOAD_PLACEHOLDER || 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', // Lazy loading the picture address, support Base64 or URL
  IMG_URL_TYPE: process.env.NEXT_PUBLIC_IMG_TYPE || 'Notion', // This configuration has been invalidated, please do not use it; the Amazon solution is no longer supported, only supports the NOTION solution. ['NOTION', 'Amazon'] Site Picture Prefix default NOTION: (https://notion.so/images/xx) ， AMAZON(https://s3.us-west-2.amazonaws.com/xxx)
  IMG_SHADOW: process.env.NEXT_PUBLIC_IMG_SHADOW || false, // Whether the picture picture is automatically added to the shadow

  // Development related
  NOTION_ACCESS_TOKEN: process.env.NOTION_ACCESS_TOKEN || '', // Useful if you prefer not to make your database public
  DEBUG: process.env.NEXT_PUBLIC_DEBUG || false, // Whether to display the debug button
  ENABLE_CACHE: process.env.ENABLE_CACHE || process.env.npm_lifecycle_event === 'build', // Selective opening in the process of development, commissioning and packing, and formal deployment to open this function is not significant。
  isProd: process.env.VERCEL_ENV === 'production', // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  VERSION: process.env.NEXT_PUBLIC_VERSION // version number

}

module.exports = BLOG
