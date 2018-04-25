import Mirror from "./pages/Mirror.vue";

import Index from "./layouts/Index.vue";
import Grid from "./layouts/Grid.vue";
import Form from "./layouts/Form.vue";

import category from "./domains/general/category/routes";
import person from "./domains/general/person/routes";

const layouts = {
  index: Index,
  grid: Grid,
  form: Form
};

export default [
  {
    path: "/:tab",
    component: Mirror,
    children: [...category(layouts), ...person(layouts)]
  }
];
