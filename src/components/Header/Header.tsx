import Navigation from './Navigation/Navigation';
import './Header.css'

const Header: React.FC = () => {
    return (<header>
        <div className="wrapperHeader">
        <Navigation />
        <span><img src="src/assets/image/element1.png"/></span>
        <div className="headerText ">
            <div className="textTitle"> <h1> Virtual healthcare <br /> for you</h1>
                <div className="textData"> <text>Our service provides progressive, and
                    <br /> affordable healthcare, accessible on mobile<br /> 
                    and online for everyone</text></div>
                <button className="headerButton">Consult today</button>
            </div>
            <div><img src="src/assets/image/header.png" /></div>
        </div>
    </div>
</header>)
}
export default Header;
