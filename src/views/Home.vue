<template>
<div>
  <AddBLog/>
<!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <div class="d-flex flex-column bd-highlight mb-3">

        <input type="text" v-model="title" placeholder="enter title">
        <input type="text" v-model="image" placeholder="image link">
        <input type="text" v-model="description" placeholder="description">
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <router-link to="/"><button type="button" class="btn btn-primary" @click="addBlog()">Add Blog</button></router-link> 
      </div>
    </div>
  </div>
</div> -->
<div class="row">
  <div class="col-4 mt-2 box blogpost overflow-scroll" style="margin-right:2%;margin-left:2%;height:100vh">
    <Nav/>
  </div>
  <div class="col-7 mt-2 box" style="height:100vh">
    <BlogDetail :post="$store.state.posts[$store.state.mainblog]" />

  </div>
</div>
</div>
</template>

<script>
import Nav from '../components/BlogList.vue'
import BlogDetail from '../components/BlogDetail.vue'
import AddBLog from '../views/AddBlog.vue'



export default {
  name: 'Home',
  
  components: {
    Nav,
    BlogDetail,
    AddBLog,
  
},}
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
@media screen 
  and (device-width: 360px) 
  and (device-height: 640px) 
 {
   .blogpost{
     display: none;
   }

}

</style>