import { projectFirestore, projectAuth } from "@/firebase/Config"
import { ref } from "vue"

const error = ref(null)

const signup = async (email, password, displayName) => {
    error.value = null
    try {
        const response = await projectAuth.createUserWithEmailAndPassword(email, password)

        if(!response)
            throw new Error('Could not signup')
        console.log(response.user)
        
        await response.user.updateProfile({displayName: displayName})
        error.value = null
        return response.message
    } catch (err) {
        console.log(err)
        error.value = err.message
    }

}

const useSignup = () => {
    return {error, signup}
}

export default useSignup