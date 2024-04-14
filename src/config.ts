import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://43322.cn/", // replace this with your deployed domain
  author: "秦超",
  desc: "学有所成",
  title: "学有所成",
  ogImage: "qinchao-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "zh", // html lang code. Set this empty and default will be "en"
  langTag: ["zh-CN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/kkkh",
    linkTitle: ` ${SITE.title} 我的 Github`,
    active: false,
  },
  {
    name: "Facebook",
    href: "https://github.com/kkkh",
    linkTitle: `${SITE.title} 我的 Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://github.com/kkkh",
    linkTitle: `${SITE.title} 我的 Instagram`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://github.com/kkkh",
    linkTitle: `${SITE.title} 我的 LinkedIn`,
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:qinchao@43322.cn",
    linkTitle: `发送电子邮件至 ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://github.com/kkkh",
    linkTitle: `${SITE.title} 我的 Twitter`,
    active: false,
  },
  {
    name: "Twitch",
    href: "https://github.com/kkkh",
    linkTitle: `${SITE.title} 我的 Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://github.com/kkkh",
    linkTitle: `${SITE.title} 我的 YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://github.com/kkkh",
    linkTitle: `${SITE.title} 我的 WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://github.com/kkkh",
    linkTitle: `${SITE.title} 我的 Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://github.com/kkkh",
    linkTitle: `${SITE.title} 我的 Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://www.douyin.com/user/MS4wLjABAAAA0hh227P5Ylh12-y2pIocvYK0GIDwpVr4IjPj4FhZtGk",
    linkTitle: `${SITE.title} 我的 抖音`,
    active: true,
  },
  {
    name: "CodePen",
    href: "https://github.com/kkkh",
    linkTitle: `${SITE.title} 我的 CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://github.com/kkkh",
    linkTitle: `${SITE.title} 我的 Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/kkkh",
    linkTitle: `${SITE.title} 我的 GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/kkkh",
    linkTitle: `${SITE.title} 我的 Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://github.com/kkkh",
    linkTitle: `${SITE.title} 我的 Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://steamcommunity.com/id/uukh/",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://github.com/kkkh",
    linkTitle: `${SITE.title} 我的 Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://github.com/kkkh",
    linkTitle: `${SITE.title} 我的 Mastodon`,
    active: false,
  },
];
