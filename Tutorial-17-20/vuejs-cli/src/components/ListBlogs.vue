<template>
<div id="list-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search"/>
    <div class="single-blog" v-for="post in filteredPosts">
        <h2>{{ post.title | to-uppercase}}</h2>
    </div>
</div>
</template>

<script>

import ShowBlogs from './ShowBlogs.vue'
import searchMixin from '../mixins/searchMixin'

export default {
    data () {
        return {
           posts: [],
           search: this.$route.params.search,
        }
    },
    computed: {
        
    },
    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data) {
            this.posts = data.body.slice(0,10);
        })
    },
    
    filters: {
        toSnippet(value) {
            return value.slice(0,100) + ' ...';
        }
    },
    mixins:[searchMixin]

}
</script>

<style scoped>
</style>