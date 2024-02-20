import React from "react";
import { Link } from "react-router-dom";

function withLink(OriginalComponent){
    return (props) => {
        const sirve = props.max / 16
        const height = sirve * 9
        return(
            <Link to={'/'}>
             <OriginalComponent height={Math.floor(height)} width={props.max} {...props}/>
            </Link>
        )
    }
}

export default withLink