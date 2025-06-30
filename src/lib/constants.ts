// 网站配置
export const SITE_CONFIG = {
  name: "娄敏的个人网站",
  title: "娄敏 - 金融投资专家 | 科技创新投资人",
  description: "娄敏的个人网站 - 10年科技创新股权投资经验，专注于产业数字化、企业服务、金融科技等领域的早期创新项目投资。",
  url: "https://loumin.dev",
  ogImage: "https://loumin.dev/og.jpg",
  author: {
    name: "娄敏",
    email: "loumin_pku@163.com",
    twitter: "@loumin",
    github: "loumin",
    linkedin: "loumin"
  }
};

// 导航链接
export const NAVIGATION_LINKS = [
  { name: "首页", href: "#home", icon: "home" },
  { name: "关于", href: "#about", icon: "user" },
  { name: "投资组合", href: "#portfolio", icon: "briefcase" },
  { name: "行业洞察", href: "#insights", icon: "document" },
  { name: "联系", href: "#contact", icon: "envelope" }
];

// 社交媒体链接
export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/loumin",
    icon: "linkedin"
  },
  {
    name: "微信",
    url: "/wechat-qr.jpg",
    icon: "wechat"
  },
  {
    name: "邮箱",
    url: "mailto:loumin_pku@163.com",
    icon: "email"
  }
];

// 投资领域
export const INVESTMENT_AREAS = [
  {
    name: "产业数字化",
    description: "关注传统产业数字化转型升级机会",
    icon: "chart-bar"
  },
  {
    name: "企业服务",
    description: "专注于B2B企业服务软件和平台",
    icon: "building-office"
  },
  {
    name: "金融科技",
    description: "投资金融科技创新项目和解决方案",
    icon: "banknotes"
  },
  {
    name: "汽车科技",
    description: "关注智能出行和汽车产业科技创新",
    icon: "truck"
  }
];

// 工作经历
export const WORK_EXPERIENCE = [
  {
    company: "亲家集团",
    position: "总裁 联合创始人",
    period: "2021.02 - 至今",
    description: "作为联合创始人兼公司总裁，全面负责公司战略规划、业务管理、组织和团队建设、市场品牌、资本市场等领导和管理工作。",
    current: true
  },
  {
    company: "能猫资本",
    position: "董事总经理",
    period: "2021.03 - 至今",
    description: "负责产业数字化、企业服务、金融科技等领域的早期创新项目投资全流程。",
    current: true
  },
  {
    company: "复星锐正资本",
    position: "投资副总裁",
    period: "2017.02 - 2021.02",
    description: "负责产业数字化、金融科技、汽车交通科技等领域投资，期间交流考察约1500个创新创业项目，参与投资及管理的项目有开思时代、博车网、量化派等；荣获复星集团年度优秀员工。",
    current: false
  },
  {
    company: "人人公司(NYSE:RENN)",
    position: "投资经理",
    period: "2014.12 - 2017.01",
    description: "关注中美互联网科技创新项目的参股投资、集团投资性资产优化、资产重组等业务，参与约15亿人民币股权交易；参与投资及管理的项目包括：SoFi(Nasdaq:SOFI)、金斧子、易速中国、多牛科技等。",
    current: false
  }
];

// 教育背景
export const EDUCATION = [
  {
    school: "北京大学",
    degree: "国际政治、经济学双学士",
    period: "2009.09 - 2013.07"
  },
  {
    school: "京都大学",
    degree: "暑期交换生",
    period: "2012.07 - 2012.08"
  },
  {
    school: "乌特勒支大学",
    degree: "金融经济学硕士",
    period: "2013.09 - 2014.08"
  }
];

// 奖项荣誉
export const AWARDS = [
  "2017年福布斯中国30岁以下精英",
  "2013年北京市优秀毕业生", 
  "2013年北京大学优秀毕业生",
  "2011年国家奖学金获得者"
];

// 投资项目案例
export const INVESTMENT_CASES = [
  {
    name: "SoFi",
    description: "美国金融科技独角兽，现已在纳斯达克上市(SOFI)",
    stage: "成长期",
    sector: "金融科技",
    status: "已上市"
  },
  {
    name: "开思时代",
    description: "企业数字化转型服务平台",
    stage: "早期",
    sector: "企业服务",
    status: "持续增长"
  },
  {
    name: "博车网",
    description: "汽车交易服务平台",
    stage: "成长期", 
    sector: "汽车科技",
    status: "稳定发展"
  },
  {
    name: "量化派",
    description: "金融科技和数据驱动的消费金融公司",
    stage: "成长期",
    sector: "金融科技",
    status: "行业领先"
  }
];

// 行业洞察文章
export const BLOG_POSTS = [
  {
    title: "产业数字化投资的新机遇",
    excerpt: "随着数字化转型的深入，传统产业正迎来新的投资机会。本文分析了当前产业数字化的发展趋势和投资策略。",
    date: "2024.01.15",
    category: "产业数字化",
    readTime: "5分钟"
  },
  {
    title: "金融科技的下一个十年",
    excerpt: "从支付到借贷，从保险到投资，金融科技正在重塑整个金融行业。探讨未来十年的发展方向和投资机会。",
    date: "2024.01.08",
    category: "金融科技",
    readTime: "8分钟"
  },
  {
    title: "企业服务市场的投资逻辑",
    excerpt: "B2B企业服务市场正在快速增长，本文分析了优秀企业服务公司的共同特征和投资判断标准。",
    date: "2023.12.20",
    category: "企业服务",
    readTime: "6分钟"
  }
];

// 技能分类
export const SKILL_CATEGORIES = [
  {
    category: '前端开发',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'HTML/CSS', level: 92 },
    ]
  },
  {
    category: '后端开发',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Python', level: 70 },
      { name: 'MongoDB', level: 68 },
      { name: 'PostgreSQL', level: 65 },
      { name: 'Express.js', level: 72 },
      { name: 'GraphQL', level: 60 },
    ]
  },
  {
    category: '工具与平台',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 65 },
      { name: 'AWS', level: 60 },
      { name: 'Vercel', level: 80 },
      { name: 'Figma', level: 75 },
      { name: 'VS Code', level: 90 },
    ]
  }
];

// 项目类别
export const PROJECT_CATEGORIES = [
  '全部',
  'Web应用',
  '全栈应用',
  '内容管理',
  '电商平台',
  '移动应用',
  '开发工具'
];

// 博客分类
export const BLOG_CATEGORIES = [
  '全部',
  '技术分享',
  '项目经验',
  '学习笔记',
  '行业见解',
  '工具推荐',
  '生活随想'
];

// 联系方式
export const CONTACT_INFO = {
      email: 'loumin_pku@163.com',
  phone: '+86 138 0000 0000',
  location: '中国, 北京',
  availability: '周一至周五 9:00-18:00'
};

// 常见问题
export const FAQ_ITEMS = [
  {
    question: '如何与您取得联系？',
    answer: '您可以通过邮件、联系表单或社交媒体平台与我联系。我通常会在24小时内回复。'
  },
  {
    question: '您接受远程工作吗？',
    answer: '是的，我很乐意接受远程工作机会。我有丰富的远程协作经验。'
  },
  {
    question: '您的技术栈是什么？',
    answer: '我主要专注于前端开发，使用React、Next.js、TypeScript等技术。同时也有一定的后端开发经验。'
  },
  {
    question: '您有哪些项目经验？',
    answer: '我完成了多个全栈项目，包括电商平台、内容管理系统、数据可视化应用等。'
  }
];

// API 端点
export const API_ENDPOINTS = {
  contact: '/api/contact',
  newsletter: '/api/newsletter',
  projects: '/api/projects',
  blog: '/api/blog'
};

// 分页配置
export const PAGINATION_CONFIG = {
  projectsPerPage: 12,
  blogPostsPerPage: 8,
  relatedPostsCount: 3
};

// 动画配置
export const ANIMATION_CONFIG = {
  duration: {
    fast: 200,
    normal: 300,
    slow: 500
  },
  easing: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out'
  }
}; 