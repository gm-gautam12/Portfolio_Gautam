import { useState } from "react";


type AlertProps = {
    show:boolean;
    text:string;
    type:"success" | "danger" | "warning" | "info";
}


const useAlert = () => {

    const [alert,setAlert] = useState<AlertProps>({show:false,text:'',type:'danger'});

    const showAlert = ({text,type='danger'}:{text:string;type:"success"|"danger"|"warning"|"info"}) => {
        setAlert({
            show:true,
            text,
            type
        })
    }

    const hideAlert = () => {
        setAlert({
            show:false,
            text:'',
            type:'danger'
        })
    }

    return {alert,showAlert,hideAlert};
}



export default useAlert;