const CONFIG = {
  // profile setting (required)
  profile: {
    name: "goldduck",
    image: "https://notion-avatar.vercel.app/api/svg/eyJmYWNlIjo3LCJub3NlIjoxMywibW91dGgiOjksImV5ZXMiOjQsImV5ZWJyb3dzIjoxMCwiZ2xhc3NlcyI6MTEsImhhaXIiOjM0LCJhY2Nlc3NvcmllcyI6MCwiZGV0YWlscyI6MCwiYmVhcmQiOjAsImZsaXAiOjAsImNvbG9yIjoicmdiYSgyNTUsIDAsIDAsIDApIiwic2hhcGUiOiJub25lIn0=", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Enterpreneur",
    bio: "I solve world's problem.",
    email: "rdh199993@gmail.com",
    linkedin: "",
    github: "https://github.com/DuckHyun-Ryu",
    instagram: "",
  },
  projects: [
    {
      name: `goldduck's blog`,
      href: "https://github.com/morethanmin/morethan-log",
    },
  ],
  // blog setting (required)
  blog: {
    title: "goldduck's blog",
    description: "welcome to goldduck's blog!",
    theme: "light", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://goldduck-blog.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "morethanmin/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
