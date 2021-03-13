<template>
  <div class="card">
    <h2>Forget password?</h2>

    <button class="btn" @click="goToLogin">Back to login</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToLogin() {
      this.$router.push('/login');
    }
  },
}
</script>