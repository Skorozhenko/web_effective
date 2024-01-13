import "./Footer.css"

const Footer: React.FC = () => {


    return (<footer>
        <div className="wrapperFooter">
            <div className="pointFooter2"> <img src="/src/assets/image/element3.png"  /></div>
            <div className="pointFooter"> <img src="/src/assets/image/element2.png" /></div>
            <div className="footerText">
                <div className="sign">
                    <div className="siteIcon"> <div>T</div> </div>
                    <div className="healthCare"> <h2>Health Care</h2></div>
                </div>
                <div className="description">HealthCare provides progressive, and affordable healthcare, accessible on mobile and online for everyone</div>
                <div className="infoFooter">©HealthCare PTY LTD 2023. All rights reserved</div>
            </div>
            <div className="innerWrapper">
                <div className="categories">
                    <ul>
                        <li><a> <h3>Company</h3></a> </li>
                        <li> <a>About</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>Find a doctor</a></li>
                        <li><a>Apps</a></li>
                    </ul>
                </div>
                <div className="categories">
                    <ul>
                        <li> <a> <h3>Region</h3></a> </li>
                        <li><a>Indonesia</a></li>
                        <li><a>Singapore</a></li>
                        <li><a>Hongkong</a></li>
                        <li><a>Canada</a></li>
                    </ul>
                </div>
                <div className="categories">
                    <ul>
                        <li> <a> <h3>Help</h3></a> </li>
                        <li><a>Help center</a></li>
                        <li><a>Contact support</a></li>
                        <li><a>Instructions</a></li>
                        <li><a>How it works</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>)
}
export default Footer;