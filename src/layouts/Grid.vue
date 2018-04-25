<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">
          <button class="btn btn-light" @click="navigate('edit/1')">1</button>
        </th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">
          <button class="btn btn-light" @click="navigate('edit/2')">2</button>
        </th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">
          <button class="btn btn-light" @click="navigate('edit/3')">3</button>
        </th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Layout from "./Layout.js";

export default {
  mixins: [Layout],
  name: "LayoutGrid"
};
</script>
