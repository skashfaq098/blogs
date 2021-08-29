<template>
  <div>
    <h4 style="padding-left:100px">{{post.title }}</h4>
    <img :src="post.image" alt="" width="90%">
    <div style="width:90%;margin:0 !important:padding:0 !important" >
    <p>
    {{post.description}}
    </p>
     <div class="row">
        <div class="col-12">
<button @click="updateLikes(post.id)">Likes:{{post.likes}}</button>
     <input type="text" v-model="comment">
     <button @click="updateComment(post.id)">Comment </button>
        </div>
        <p>
                       {{post.comments}}

        </p>
        <br><br>
        <button type="button" class="btn btn-danger" @click="deleteBlog(post.id)">Delete</button>

     </div>
    </div>
  </div>
  
</template>

<script>
export default {
    name:"BlogDetail",
    data(){
      return {
        comment:"",

      }
    },
    props:{
            post:Object
        },
    methods:{
      updateLikes(value){
this.$store.commit("increaseLikes",value)
      },
      updateComment(val1){
        var commentdata={
          id:val1,
          comment:this.comment
        }
        console.log(val1)
        console.log(this.comment)
        this.$store.commit("updateComments",commentdata)
    
      },
      deleteBlog(id){
        this.$store.commit("deleteBlog",id)
    
      }
    }
    

}
</script>

<style>

</style>