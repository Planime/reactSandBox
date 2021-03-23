import React from "react";
import withLoginCheck from "../HOC/withLoginCheck"


function PageThree() {
    return(
        <div>Page 3</div>
    )

}





export default withLoginCheck(PageThree)