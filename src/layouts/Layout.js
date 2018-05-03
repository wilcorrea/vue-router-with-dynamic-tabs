export default {
  props: {
    path: String,
    back: {
      default: true
    }
  },
  data: () => ({
    model: ''
  }),
  methods: {
    navigate (path) {
      const tab = this.$route.params.tab
      let push = `/${tab}/${path}`
      if (this.path) {
        push = `/${tab}/${this.path}/${path}`
      }
      this.$router.push(push)
    }
  }
}
