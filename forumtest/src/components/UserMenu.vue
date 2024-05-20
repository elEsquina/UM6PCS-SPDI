<template>
	<div class="user-menu" v-if="authUser">
		<div class="user-menu--content">
			<p>Signed in as: <b>{{ authUser.displayName }}</b> (<router-link to="/user/settings">Settings</router-link>)</p>
			<button class="button" @click="signOut">Sign out</button>
		</div>
	</div>
</template>

<script>
import { projectAuth } from "@/firebase/Config";
import getUser from '@/firebase/getUser';

export default {
	data () {
		return {
			authUser: null,
		}
	},
	methods: {
		signOut () {
			projectAuth.signOut()
		}
	},
	created () {
		const user  = getUser();
		if (user) {
			console.log(user);
			this.authUser = user; 
		}
	}
}
</script>

<style scoped>
	.user-menu {
		background: var(--green-dark);

		.user-menu--content {
			color: #ffffff;
			max-width: 1200px;
			margin: 0 auto;
			font-size: 18px;
			line-height: 27px;
			padding: 5px 20px 25px;
			text-align: center;
			align-items: center;

			@media (min-width: 420px) {
				padding: 20px 40px;
			}

			@media (min-width: 445px) {
				display: flex;
				justify-content: space-between;
				text-align: left;
			}

			@media (min-width: 820px) {
				display: flex;
				justify-content: space-between;
				text-align: left;
			}

			@media (min-width: 1290px) {
				padding: 20px 0px;
			}

			a {
				color: #cccccc;
				font-weight: bold;
			}

			button.button {
				background: var(--green-light);
				color: #ffffff;
				cursor: pointer;
			}
		}
	}
</style>