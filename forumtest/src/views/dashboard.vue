<template>
    <div>
        <h1>Welcome to the Forum!</h1>
        <p>Here you can find and participate in discussions on various topics.</p>
        <div v-if="posts.length > 0">
            <h2>Latest Posts:</h2>
            <ul>
                <li v-for="post in posts" :key="post.id">
                    <h3>{{ post.title }}</h3>
                    <p>{{ post.content }}</p>
                    <p>Posted by: {{ post.author }}</p>
                </li>
            </ul>
        </div>
        <div v-else>
            <p>No posts found.</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [] // Array to store the forum posts
        };
    },
    mounted() {
        // Fetch the latest posts from the server
        this.fetchPosts();
        
    },
    methods: {
        fetchPosts() {
            // Make an API call to fetch the posts
            // Replace this with your actual API call
            // Example:
            // axios.get('/api/posts')
            //   .then(response => {
            //     this.posts = response.data;
            //   })
            //   .catch(error => {
            //     console.error(error);
            //   });
        }
    }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>