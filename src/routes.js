import Mirror from "./pages/Mirror.vue";
import Foo from "./pages/Foo.vue";
import Bar from "./pages/Bar.vue";

export default [
  {
    path: "/:tab",
    component: Mirror,
    children: [
      {
        path: "foo",
        component: Foo
      },
      {
        path: "bar",
        component: Bar
      },
      {
        path: "bar",
        component: Bar,
        children: [
          {
            path: "foo",
            component: Foo
          }
        ]
      }
    ]
  }
];
