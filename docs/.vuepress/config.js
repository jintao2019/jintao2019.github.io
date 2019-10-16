const path = require('path');
const fs = require('fs');
module.exports = {
  title: '快去喂猪',
  description: '人生路漫漫,选择自己喜欢的事.',
  themeConfig: {
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: '前端',
        link: '/web/'
      },
      {
        text: '面试题',
        link: '/interview/'
      },
      {
        text: '读书笔记',
        link: '/reading/'
      },
      {
        text: '关于',
        link: '/about/'
      }
    ],
    sidebar: {
      '/web/': [{
          title: "JS",
          collapsable: true,
          children: genSidebarConfig("web/js", true)
        },
        {
          title: "Node",
          collapsable: true,
          children: genSidebarConfig("web/node", true)
        }
      ],
      '/interview/': [{
          title: "Vue面试题",
          collapsable: true,
          children: genSidebarConfig("interview/vue", true)
        },
        {
          title: "js面试题",
          collapsable: true,
          children: genSidebarConfig("interview/js", true)
        },
      ],
      '/reading/': [{
        title: "读书笔记",
        collapsable: true,
        children: genSidebarConfig("reading/reading-notes", true)
      }]
    }

  }
}

function genSidebarConfig(dir, hasSub) {
  let p = path.join(__dirname, '../', dir);
  let files = fs.readdirSync(p);
  let subDir = hasSub ? dir.split('/')[1] : '';
  files = files.map(item => {
    item = subDir ? subDir + '/' + path.basename(item, '.md') : path.basename(item, '.md');
    return item;
  });
  return files;
}