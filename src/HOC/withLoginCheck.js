import {Redirect} from "react-router-dom";
import React, {useContext} from "react";
import Modal from "../Components/Modal"
import AuthWindow from "../Components/AuthWindow"
import AuthContext from "../Context/AuthContext"


function withLoginCheck(WrapperComponent) {
    const NewComponent = (props) => {
    const {isAuth} = useContext(AuthContext);


        if (!isAuth) {

            return <Modal>
                <AuthWindow/>
            </Modal>
        }


        return <WrapperComponent  {...props}/>
    };

    return NewComponent
}

export default withLoginCheck