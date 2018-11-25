<template>
  <div class='auth'>
    <h1>Secret Content</h1>
    <DemandChart/>
  </div>
</template>

<script>
import DemandChart from '@/components/demand-chart';

  export default {
    name: 'auth',

components: {
DemandChart
},

    props: ['isAuth'],


    mounted () {
      if (!this.isAuth) {
        this.$router.replace({ name: 'index' });
      }
    }
  }
</script>