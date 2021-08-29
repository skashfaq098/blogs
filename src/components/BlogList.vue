<template>
  <div>
    <div>
      {{$store.state.books}}
    </div>
    <div v-for="post in $store.state.posts" v-bind:key="post.id" >
      <div class="card" style="width: 18rem; margin-left: 2%">
        <img :src="post.image" />
        <div class="card-body">
          <h5 class="card-title">{{ post.title }}</h5>
          <p class="card-text">{{ post.description | truncate(60) }}</p>
          <router-link to="/"
            ><button class="btn btn-primary" @click="updateId(post.id)">
              Read
            </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'

export default {
  name: "BlogList",
  props: {
    posts: Array,
  },
  created() {
    this.$store.dispatch('loadBooks');
    console.log("hello",this.$store.state.books)
    // this.loadBooks()
  },
  methods: {
    updateId(value) {
      this.$store.commit("changeId", value);
    },
        ...mapActions(["loadBooks"])

  },
  filters: {
    truncate: function (data, num) {
      const reqdString = data.split("").slice(0, num).join("");
      return reqdString;
    },
  },
};
</script>
<style scoped>
</style>
