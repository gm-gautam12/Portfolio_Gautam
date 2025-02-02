

type AlertProps = {
    type:"success" | "danger" | "warning" | "info";
    text:string;
}


const Alert = ({type,text}:AlertProps) => {
    return(
        <div className="absolute top-10 left-0 right-0 flex justify-center items-center">
            <div className={`${type === 'danger'? 'bg-red-800':'bg-green-800'} p-2 text-indigo-100 leading-none 
            rounded-full flex lg:inline-flex items-center`} role="alert">

                <p className={`${type === 'danger' ? 'bg-red-500' : 'bg-green-500'} flex rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs text-center`}>{type === 'danger' ? 'Failed' : 'Success'}</p>
                <p className="mr-2 text-center py-1">{text}</p>
            </div>
        </div>
    )
}


export default Alert;