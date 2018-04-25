export default layouts => [
  {
    path: "person",
    component: layouts.index,
    props: route => ({
      path: "person"
    }),
    children: [
      {
        path: "",
        redirect: "index"
      },
      {
        path: "index",
        component: layouts.grid,
        props: route => ({
          path: "person"
        })
      },
      {
        path: "edit/:id",
        component: layouts.form,
        props: route => ({
          path: "person"
        })
      }
    ]
  }
];
