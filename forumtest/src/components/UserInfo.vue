<template>
    <nav class="navbar">
        <div class="usermenu">
            <img :src="user.photoURL" alt="User photo" class="userphoto">
            <p>Signed in as: <b>{{ user.displayName }}</b> (<router-link :to="'/user/' + user.id">Settings</router-link>)</p>
        </div>
        <button class="button" @click="signOut">Sign out</button>
    </nav>
</template>

<script>
export default {
    name: 'UserInfo',
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    methods: {
        async signOut() {
            await this.$firebase.auth().signOut();
            this.$router.push('/login');
        }
    }
}
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #f8f8f8;
    border-bottom: 1px solid #ccc;
    height: 50px;
}
</style>
