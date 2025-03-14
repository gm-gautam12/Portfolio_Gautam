import { Link } from 'react-router-dom';
import { socialLinks } from '../constants/AboutDetails.contants';


const Footer:React.FC = () => {
    return(
        <footer className='footer'>
            <hr className='border-slate-200 mt-12'/>

            <div className="footer-container">
                <p>
                    © 2025 <strong>Gautam Mishra</strong>. All rights reserved.
                </p>

                <div className="flex gap-3 justify-center items-center">
                    {socialLinks.map((link)=>(
                        <Link key={link.name} to={link.link} target='_blank'>
                            <img
                            src={link.iconUrl}
                            alt={link.name}
                            className='w-6 h-6 object-contain'
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    )
}


export default Footer;