<template>
  <header class="navbar" v-if="visible">
    <h3>Tmail</h3>
    <ul class="navbar-menu">
      <li>
        <router-link to="/dashboard">Main</router-link>
      </li>
      <li>
        <router-link to="/mail" custom v-slot="{ navigate, href}">
          <a href="#" @click="navigate" :class="{
            active: $route.path.indexOf(href) !== -1
          }">Mail</a>
        </router-link>
      </li>
      <li><a href="#" @click.prevent="logout">LogOUT</a></li>
    </ul>
  </header>
</template>

<script>
export default {
  inject: ['logout'],
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  }
}
</script>
