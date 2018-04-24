export default {
  data: () => ({
    model: ""
  }),
  methods: {
    navigate(path) {
      this.$router.push(`/${this.$route.params.tab}/${path}`);
    }
  }
};
