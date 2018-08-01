import ShowBlogs from './components/ShowBlogs'
import ListBlogs from './components/ListBlogs'
import Ninjas from './components/Ninjas'

export default [
    {path: '/', component: ShowBlogs},
    {path: '/list', component: ListBlogs},
    {path: '/list/:search', component: ListBlogs},

    {path: '/ninjas', component: Ninjas}

]