<template>
<div>
    <h1>New Post</h1>
    <form>
        <slot name='blog-title'></slot>
        <slot name='blog-content'></slot>
        <slot name='blog-control'></slot>
    </form>
</div>
</template>

<script>

export default {
    data () {
        return {
        }
    },

}
</script>