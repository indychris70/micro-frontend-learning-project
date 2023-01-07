<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/signin">Sign In</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
