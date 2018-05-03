<template>
  <form @submit="submit">
    <button v-if="back" class="btn btn-light" @click="navigate('index')">Voltar</button>
    <hr>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" placeholder="Password">
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import Layout from './Layout'

export default {
  mixins: [Layout],
  name: 'LayoutForm',
  methods: {
    submit ($event) {
      $event.preventDefault()
    }
  }
}
</script>
