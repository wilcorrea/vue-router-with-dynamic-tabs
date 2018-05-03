export default layouts => [
  {
    path: 'category',
    component: layouts.form,
    props: route => ({
      path: 'category',
      back: false
    })
  }
]
