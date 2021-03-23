import {useHistory} from "react-router-dom";
import withLoginCheck from "../HOC/withLoginCheck";

function PageFour(props) {
    const history = useHistory();

    const onClick = () => {
        history.push("/");
    };


    return (
        <>
            <button
                onClick={onClick}
            >History</button>
            <div>Page 4 {props.text}</div>
        </>
    )
}


export default withLoginCheck(PageFour)