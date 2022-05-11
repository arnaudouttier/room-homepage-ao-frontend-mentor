
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
                @import "@/assets/scss/_variables";
                @import "@/assets/scss/_global";
                @import "@/assets/scss/_mixins";
              `
      }
    }
  }
}
