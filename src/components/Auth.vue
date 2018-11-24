<template>
  <div class='auth'>
    <h1>Secret Content</h1>
  </div>
</template>

<script>
  export default {
    name: 'auth',

    props: ['isAuth'],

    mounted () {
      if (!this.isAuth) {
        this.$router.replace({ name: 'index' });
      }
    },

    methods: {

    }
  }
</script>