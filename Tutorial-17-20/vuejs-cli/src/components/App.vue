<template>
<div>
    <app-header v-on:changeTitle="updateTitle($event)" v-bind:title="title"></app-header>
    <ninjas v-bind:ninjas="ninjas"></ninjas>
    <div>
        <keep-alive>
            <component v-bind:is="formComponent">
                <div slot='blog-title'>
                    <label>{{ slotTitle }}</label> 
                    <input type="text" v-model.lazy="blog.title" required />   
                </div>
                <div slot='blog-content'>
                    <label>Blog Content</label>
                    <textarea v-model.lazy="blog.content"/>
                </div>
                <div slot='blog-control'>
                    <label>Private</label>
                    <input type="checkbox" value="private" v-model="blog.options"/>
                    <label>Anonymous</label>
                    <input type="checkbox" value="anonymous" v-model="blog.options"/>
                    <select v-model="blog.author">
                        <option v-for="author in ninjas">{{ author.name }}</option>
                    </select>
                </div>
            </component>
        </keep-alive>
        <br>
        <p>Blog Title: {{ blog.title }}</p>
        <p>Blog Content:</p>
        <p>{{ blog.content }}</p>
        <p>Options:</p>
        <ul>
            <li v-for="option in blog.options">{{ option }}</li>
        </ul>
        <p>Author: {{ blog.author }}</p>

    </div>
    <app-footer v-bind:title="title"></app-footer>
</div>

</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Ninjas from './Ninjas.vue'
import formHelper from './formhelper'

export default {
    components: {
        'app-header': Header,
        'app-footer': Footer,
        'ninjas': Ninjas,
        'form-helper': formHelper,

    },
    data () {
        return {
            title: "Vue App",
            ninjas: [
                {name: 'Ryu', speciality: 'Vue Components', show: false},
                {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
                {name: 'Hitoshi', speciality: 'Click Events', show: false},
                {name: 'Tango', speciality: 'Conditionals', show: false},
                {name: 'Kami', speciality: 'Webpack', show: false},
                {name: 'Yoshi', speciality: 'Data Diggin', show: false}
            ],
            slotTitle: 'Blog Title',
            formComponent: 'form-helper',
            blog: {
                title: 'Title',
                content: 'Content',
                options: [],
                author: '',
            }
           
        }
    },
    methods: {
        updateTitle: function(event) {
            this.title = event
        }
    }
}
</script>

<style scoped>
</style>