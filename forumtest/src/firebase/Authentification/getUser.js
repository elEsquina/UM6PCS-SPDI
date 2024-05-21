import { ref } from 'vue'
import { projectFirestore, projectAuth } from "@/firebase/Config"

const user = ref(projectAuth.currentUser)

projectAuth.onAuthStateChanged(_user => {
  console.log('User state change. Current user is:', _user)
  user.value = _user
});

const getUser = () => {
  return user.value;
}

const isLogged = () => {
  return (user.value == null ? false : true);
}


export {getUser, isLogged}
