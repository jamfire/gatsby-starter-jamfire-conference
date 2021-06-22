module.exports = {
  /**
   * Flags
   */
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    DEV_SSR: true,
    FAST_DEV: true
  },
  /**
   * Plugins
   */
  plugins: [
    {
      resolve: `gatsby-theme-jamfire-conference`,
    },
  ],
}
