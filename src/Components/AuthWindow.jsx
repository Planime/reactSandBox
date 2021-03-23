import AuthContext from "../Context/AuthContext";
import {useContext} from "react"

function AuthWindow() {
    const {isAuth, setAuth} = useContext(AuthContext);


    function onClickSignIn() {
        setAuth(!isAuth)
    }

    return(
        <div>
            <p>Login</p>
            <button onClick={onClickSignIn}>Sign in</button>
        </div>
    )
}



export default AuthWindow