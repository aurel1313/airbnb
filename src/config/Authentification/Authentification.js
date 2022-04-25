import { Firebase } from "firebase/app";
import { auth } from "../Firebase/Firebase";
export const register=async({email,password})=>{
    const resp = await Firebase.auth().createUserWithEmailAndPassword(email, password);


}