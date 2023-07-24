import {auth,provider} from "../firebase-config.js";
import {signInWithPopup} from "firebase/auth"
import Cookies from "universal-cookie";
import "../styles/style.css"
const cookies=new Cookies();

export const Auth=(props)=>{
    const {setIsAuth}=props;
    const SignInWithGoogle= async()=>{
        try{
        const result=  await signInWithPopup(auth,provider);
        cookies.set("auth-token",result.user.refreshToken);
        setIsAuth(true);
    }catch(err){
        console.log(err);
    }
    }
        return(
            <div className="auth">
                <h2>Welcome to MyChat </h2>
                <p>Sign in with Google To continue</p>
                <button onClick={SignInWithGoogle}>Sign In with Google</button>

            </div>
        )
    
}