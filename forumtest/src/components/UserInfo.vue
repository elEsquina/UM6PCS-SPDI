<template>
    <nav class="navbar">
        <div class="usermenu">
            <router-link :to="'/profile/' + user.uid" class="username"><img :src="URLimg" class="userphoto"></router-link>
            <router-link :to="'/profile/' + user.uid" class="username">Hello <b>{{ user.displayName }}</b> !</router-link>
        </div>
        <div>
            <router-link to="/dashboard" class="button">Dashboard</router-link>
            <router-link to="/create" class="button">Start thread</router-link>
            <button class="button" @click="leave">Sign out</button>
        </div>
    </nav>
</template>

<script>
import signOut from '@/firebase/Authentification/SignOut';
export default {
    name: 'UserInfo',
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            URLimg: "https://th.bing.com/th/id/OIP.DQdhyRifE5tywz-uIlBKUAHaHa?rs=1&pid=ImgDetMain"
        }
    },
    methods: {
        leave() {
            signOut();
            this.$router.push('/auth');
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
    background-color: #2c3e50;
    color: #fff; 
    height: 60px; 
}
.usermenu {
    display: flex;
    align-items: center;
}

.userphoto {
    width: 40px;
    height: 40px;
    border-radius: 50%; 
    margin-right: 10px; 
}

.username {
    text-decoration: none; 
    color: #fff; 
    font-weight: bold; 
}

.button {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    background-color: #3498db; 
    color: #fff; 
    cursor: pointer;
    transition: background-color 0.3s; 
    text-decoration: none;
    margin-left: 10px
}

button.button:hover {
    background-color: #2980b9; 
}

button.button:focus {
    outline: none; 
}
</style>
