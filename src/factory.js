import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const Foo = {
  name: "Foo",
  template: "<div>foo: <input> <router-view/> </div>"
};
const Bar = {
  name: "Bar",
  template: "<div>bar: <input> <router-view/> </div>"
};

const routes = [
  {
    path: "/:tab/foo",
    component: Foo,
    children: [
      {
        path: "bar",
        component: Bar
      }
    ]
  },
  {
    path: "/:tab/bar",
    component: Bar,
    children: [
      {
        path: "foo",
        component: Foo
      }
    ]
  }
];

export default el => {
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = new VueRouter({
    routes // short for `routes: routes`
  });

  /* eslint-disable no-new */
  return new Vue({
    el: el,
    router: router,
    template: "<router-view/>"
  });
};
