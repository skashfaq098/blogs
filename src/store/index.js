import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts:[
        {id:0, title: 'blog on vue.js', image: "https://res.cloudinary.com/practicaldev/image/fetch/s--ON6smotD--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/xa7en7o59vtxdhgte92u.jpeg", description: "Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members ",likes:0,comments:["Hello"] },
        {id:1,title: 'blog on flutter', image: "https://tech.pelmorex.com/wp-content/uploads/2020/10/flutter.png", description: "Flutter is an open-source UI software development kit created by Google. It is used to develop cross platform applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a single codebase. The first version of Flutter was known as codename Sky and ran on the Android operating system",likes:0,comments:["Hello"] },
        {id:2, title: 'blog on angular', image: "https://wallpaperaccess.com/full/3910941.jpg", description: "AngularJS is a JavaScript-based open-source front-end web framework for developing single-page applications. It is maintained mainly by Google and a community of individuals and corporations." ,likes:0,comments:["Hello"]}],
          mainblog: 0,
          books:[]
  },
  mutations: {
    setBooks(state, books) {
      state.books = books;
    },
    
    changeId(state,id){
state.mainblog=id
    },
    increaseLikes(state,id){
      state.posts[id].likes++
      console.log("hjh",state.posts)

    },
    updateComments(state,commentdata){
      console.log("index",commentdata)
      state.posts[commentdata.id].comments.push(commentdata.comment)


    },
    deleteBlog(state,id){
      state.posts.splice(id,1)

    },
    addBlogs(state,blogdata){
      state.posts.push(blogdata)

    }
    
  },
  getters:{
    getBlog(state,id){
      return state.posts[id].likes
    },
  },
  actions: {
    loadBooks(context) {
      axios
.get('http://localhost:8080/posts')
.then(function(response) {
  context.commit('setBooks', response.data);  })
    },
    addPosts(context,data){
      axios({
        method: 'post',
        url: 'http://localhost:8080/posts', 
        data: data
      });
    }
  }
})
