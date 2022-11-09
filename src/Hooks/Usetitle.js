import { useEffect } from "react";


const Usetitle = title => {
    useEffect(()=>{
        document.title = `${title} - Cloud kitchen`;
    },[title])
};

export default Usetitle;