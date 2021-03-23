import reactDOM from "react-dom"


function Modal(props) {
    return reactDOM.createPortal(
        <div>{props.children}</div>,
        document.getElementById("modal")
    )
}


export default Modal