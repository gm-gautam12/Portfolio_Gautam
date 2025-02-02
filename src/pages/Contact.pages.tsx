import { useState,useRef, Suspense } from "react";
import emailjs from '@emailjs/browser';
import { Canvas } from "@react-three/fiber";
import Fox from "../models/Fox.models";
import Loader from "../components/Loader.components";
import useAlert from "../hooks/useAlert.hooks";
import Alert from "../components/Alert.components";

type formDataType = {
    name:string,
    email:string,
    message:string
}


const Contact: React.FC = () => {

    const [formData,setFormData] = useState<formDataType>({name:'',email:'',message:''});
    const [loading,setLoading] = useState<boolean>(false);

    const [currentAnimation,setCurrentAnimation] = useState<string>('idle');

    const {alert,showAlert,hideAlert} = useAlert();

    const formRef = useRef<HTMLFormElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(
            {...formData,
             [e.target.name]:e.target.value
            });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setCurrentAnimation('hit');

        emailjs.send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            {
                from_name:formData.name,
                to_name: "Gautam",
                from_email:formData.email,
                to_email:"njoygautam12@gmail.com",
                message:formData.message
            },
            import.meta.env.VITE_PUBLIC_KEY 
        ).then(()=>{
            setLoading(false);

            //alert
            showAlert({ show:true, text:'Message Sent Successfully! 😃',type:'success' });

            setTimeout(()=>{
                hideAlert();
                setCurrentAnimation('idle');
                setFormData({name:'',email:'',message:''});
            },2000);

            
        }).catch((error:Error)=>{
            setLoading(false);
            console.log(error);
            setCurrentAnimation('idle');
            showAlert({ show:true, text:"I didn't receive your message 😢",type:'danger' });
        })
        
    };

    const handleFocus = () => {setCurrentAnimation('walk')};
    const handleBlur = () => {setCurrentAnimation('idle')};

    return(
        <section className="relative flex lg:flex-row flex-col max-container">
            {alert.show && <Alert {...alert}/>}
           
            <div className="flex-1 min-w-[50%] flex flex-col">
                <h1 className="head-text">Get in Touch</h1>

                <form className="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit}>
                    <label className="text-black font-semibold">
                        Name
                        <input type="text" name="name" 
                        className="input outline-none" 
                        placeholder="Your Name" 
                        required 
                        value={formData.name} 
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        />
                    
                    </label>
                    <label className="text-black font-semibold">
                        Email
                        <input type="email" name="email" 
                        className="input outline-none" 
                        placeholder="xyz@gmail.com" 
                        required 
                        value={formData.email} 
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        />
                    
                    </label>
                    <label className="text-black font-semibold">
                        Your Message
                        <textarea name="message"
                        rows={4}
                        className="textarea outline-none" 
                        placeholder="Let me know how I can help you!" 
                        required 
                        value={formData.message} 
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        />
                    </label>
                    <button
                    type="submit"
                    className="btn"
                    disabled={loading}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    >
                    {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>

            <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
                <Canvas camera={{
                    position:[0,0,5],
                    fov:75,
                    near:0.1,
                    far:1000
                    }}>
                    <directionalLight intensity={2.5} position={[0,0,1]}/>
                    <ambientLight intensity={0.5}/>
                    <Suspense fallback={<Loader/>}>
                        <Fox
                        currentAimation={currentAnimation}
                         position={[0.5,0.35,0]} 
                         rotation={[12.6,-0.6,0]}
                         scale={[0.5,0.5,0.5]}
                        />
                    </Suspense>
                </Canvas>
            </div>

        </section>
    )
}

export default Contact;