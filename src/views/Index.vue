<template>
  <div class='index'>
    <h1>Index Page</h1>
    <div>{{ error }}</div>
    <input v-model="form.username" type="text" placeholder="Enter your username ..."/>
    <input v-model="form.password" type="password" placeholder="Enter your password ..."/>
    <button v-on:click="login">Login</button>
  </div>
</template>

<script>
  export default {
    name: 'index',


    data () {
      return {
        form: {
          username: '',
          password: ''
        },
        error: null
      }
    },

    methods: {
      login () {
        this.clearError();

        // mock username and password
        if (this.form.username === 'admin' && this.form.password === 'password') {
           this.$router.replace({ name: 'auth' })
           this.$emit('authenticated', true);
        }

        this.setError('Sorry, your username or password is incorrect.');
      },

      clearError () {
        this.error = null;
      },

      setError (error) {
        this.error = error;
      }
    }
  }
</script>