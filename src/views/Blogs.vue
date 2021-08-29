<template>
  <div class="d-flex justify-content-center">
<Nav :posts="$store.state.posts" @getBlogId="getBlogId"/>
     
  </div>


</template>

<script>
import Nav from '../components/BlogList.vue'


export default {
  name: 'Home',
 methods: {
    getBlogId: function (id) {
      this.$store.state.mainblog = id;
    },
   },
  components: {
    Nav,
  
}}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.box{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}
</style>