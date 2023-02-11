module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "strapi-production-15df.up.railway.app",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
    ],
  },
  experimental: {
    newNextLinkBehavior: false,
  },
};
