<template>
<div id="show-blogs">
    <h1>All Blog Articles</h1>
    <div class="single-blog" v-for="post in posts">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
    </div>
</div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Ninjas from './Ninjas.vue'
import formHelper from './formhelper'
import ShowBlogs from './ShowBlogs.vue'

export default {
    data () {
        return {
           posts: [],
        }
    },
    methods: {
    
    },
    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data) {
            this.posts = data.body.slice(0,10);
        })
    }
}
</script>

<style scoped>
</style>