/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    colors: {
      black: "#1A1A1A",
      yellow: "#FFEBA1",
      white: "#FFFFFF",
      shadow: "#222222",
      gray: "#cbd5e0",
      github: "#28a745",
      githubdark: "#1b6e2f",
      linkedin: "#2867B2",
      linkedindark: "#1a477d",
      red: "#D44638",
      reddark: "#7d2216"
    },
    fontFamily: {
      body: ["'Futura PT'", "sans-serif"]
    },
    fill: theme => ({
      yellow: theme("colors.yellow"),
    })
  },
  variants: {
    fill: ["hover"]
  },
  plugins: []
};
