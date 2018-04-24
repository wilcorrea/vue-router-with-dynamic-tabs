import factory from "./factory";

export default {
  name: "Container",
  props: ["name"],
  data: () => ({
    vue: {}
  }),
  template: '<div :id="name"></div>', // :name="name"
  methods: {
    open(route) {
      this.vue.$router.push(route);
    }
  },
  mounted() {
    this.vue = factory(`#${this.name}`);
  }
};
