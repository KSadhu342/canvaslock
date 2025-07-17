import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from './firebase';


const signUp = async(email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return user;
    }
    catch (error) { 
        console.error("Signup Error: ", error.message);
        throw error;
    }

};


const login = async(email, password) => {
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return user;
    }
    catch (error) {
        console.error("Login Error: ", error.message);
        throw error;
    }
};

const logout = () => signOut(auth);


export { signUp, login, logout }