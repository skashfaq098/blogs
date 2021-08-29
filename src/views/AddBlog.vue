<template>
  <div>
      <div class="d-flex flex-column bd-highlight mb-3">

        <input type="text" v-model="title" placeholder="enter title">
        <input type="text" v-model="image" placeholder="image link">
        <input type="text" v-model="description" placeholder="description">
    </div>
        <button @click="addBlog()">add</button>

  </div>
</template>

<script>
export default {
    name:"AddBlog",
    data(){
    return{
      title:"",
      image:"",
      description:"",
      idCount:this.$store.state.posts.length-1
    }

  },

methods:{
    addBlog(){
      this.idCount++
      var blogdata={
        id:this.idCount,
        title:this.title,
        image:this.image,
        description:this.description,
        likes:0,
        comments:["Hello"]

      }
      this.$store.commit("addBlogs", blogdata)
      console.log(this.$store.state.posts)
    }
  },

}
</script>

<style>

</style>