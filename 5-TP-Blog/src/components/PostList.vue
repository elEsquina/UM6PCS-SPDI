<template>
    <div>
        {{ selectedTag }} effstges
        <div v-for="post in posts">
            <SinglePost v-show="true" @viewdetails="viewdetails" :post="post"/>
            <br>
        </div>
    </div>
</template>

<script>
import SinglePost from "@/components/SinglePost.vue";

export default {
    name: "PostList",
    props: ['posts', 'selectedTag'],
    components: {
        SinglePost
    },
    methods: {
        viewdetails(id) {
            this.$router.push({ name: 'details', params: { id: id } });
        }
    }
};
</script>