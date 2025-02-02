import { Canvas } from "@react-three/fiber";
import { Suspense, useState,useEffect,useRef } from "react";
import Loader from "../components/Loader.components";
import Island from "../models/Island.models";
import Sky from "../models/Sky.models";
import Plane from "../models/Plane.models";
import Bird from "../models/Bird.models";
import HomeInfo from "../components/HomeInfo.components";
import sakura from '../assets/sakura.mp3';
import soundon from '../assets/icons/soundon.png';
import soundoff from '../assets/icons/soundoff.png';

type vec3 = [number,number,number];



const Home:React.FC = () => {

    const audioRef = useRef<HTMLAudioElement>(new Audio(sakura));

    audioRef.current.volume = 0.4;
    audioRef.current.loop = true;


    const [isRotating,setIsRotating] = useState<boolean>(false);
    const [currentStage, setCurrentStage] = useState<number | null>(1);
    const [isPlayingMusic,setIsPlayingMusic] = useState<boolean>(false);

    useEffect(()=>{
        if(isPlayingMusic){
            audioRef.current.play();
        }
        return()=>{
            audioRef.current.pause();
        }

    },[isPlayingMusic]);


    const adjustIslandforScreenSize = ():[vec3,vec3,vec3] => {

        let screenScale:vec3;
        let screenPosition:vec3;
        let rotation:vec3 = [0.1,4.7,0];

        if(window.innerWidth <768){
            screenScale = [0.9,0.9,0.9];
            screenPosition = [0,-6.5,-43];
        }else{
            screenScale = [1,1,1];
            screenPosition = [0,-6.5,-43];
        }

        return [screenScale,screenPosition,rotation];
    }

    const adjustPlaneforScreenSize = ():[vec3,vec3] => {

        let screenScale:vec3;
        let screenPosition:vec3;

        if(window.innerWidth < 768){
            screenScale = [1.5,1.5,1.5];
            screenPosition = [0,-1.5,0];
        }else{
            screenScale = [3,3,3];
            screenPosition = [0,-4,-4];
        }

        return [screenScale,screenPosition];
    }

    const [islandScale,islandPosition,islandRotation]:[vec3,vec3,vec3] = adjustIslandforScreenSize();
    const [planeScale,planePosition]:[vec3,vec3] = adjustPlaneforScreenSize();

    return(
        <section className="w-full h-screen relative">
            <div className="absolute top-28 left-0 right-0 z-10 flex justify-center items-center">
                {currentStage && <HomeInfo currentStage={currentStage}/>}
            </div>

            <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
             camera={{ near:0.1, far:1000 }}
            >

                <Suspense fallback={<Loader/>}>
                <directionalLight position={[1,1,1]} intensity={2}/>
                <ambientLight intensity={0.5}/>
                <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
                
                
                <Bird/>
                <Sky isRotating={isRotating}/>
                <Island 
                position={islandPosition} 
                scale={islandScale} 
                rotation={islandRotation}
                isRotating = {isRotating}
                setIsRotating = {setIsRotating}
                setCurrentStage = {setCurrentStage}
                />
                <Plane 
                 isRotating = {isRotating}
                 scale = {planeScale}
                 position = {planePosition}
                 rotation={[0,20,0]}

                />

                </Suspense>
                
            </Canvas>

            <div className="absolute bottom-2 left-2" >
                <img src={!isPlayingMusic ? soundoff : soundon}
                 alt="sound"
                 className="w-10 h-10 cursor-pointer object-contain"
                 onClick={()=>setIsPlayingMusic(!isPlayingMusic)}
                  />
            </div>

        </section>
    )

}

export default Home;