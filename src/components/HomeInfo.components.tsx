import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.svg";

type InfoBoxProps = {
    text: string;
    link: string;
    btnText: string;
};

const InfoBox = ({text, link, btnText}: InfoBoxProps) => (
    <div className="info-box info-box-text neo-brutalism-blue">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>
    </div>
)


const renderContent: Record<number,React.ReactNode> = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I'm <span className="font-semibold">Gautam</span>👋
            <br/>
            An aspiring Software Engineer from India.
        </h1>
    ),
    2: (
        <InfoBox 
        text={`Worked with startups and teams to build impactful solutions while gaining real-world experience.`}
        link="/about"
        btnText="Learn More"
        />
    ),
    3: (
        <InfoBox 
        text="Done multiple projects to success over the years."
        link="/Project"
        btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox 
        text="Need a project done or looking for a dev? I'm just a few keystrokes away."
        link="/contact"
        btnText="Let's Talk"
        />
    ),
}



type HomeInfoProps = {
    currentStage:number;
}

const HomeInfo = ({currentStage}:HomeInfoProps) => {
    return renderContent[currentStage] ?? null;
}

export default HomeInfo;