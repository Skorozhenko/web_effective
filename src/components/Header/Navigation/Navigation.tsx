import "./Navigation.css"

const Navigation: React.FC = () => {
    return (
    <div>
        <div className="bar">
            <div className="label">
                <div className="circle"> <text> T</text> </div>
                <div className="pageName"> <h2>HealthCare</h2> </div>
            </div>
            <nav>
                <ul className="navUl">
                    <li className="chosen">  <a>Home</a> </li>
                    <li> <a>Find a doctor</a> </li>
                    <li> <a>Apps</a> </li>
                    <li> <a>Testimonials</a> </li>
                    <li> <a>About us</a> </li>
                </ul>
            </nav>
        </div>
    </div>
    )
}
export default Navigation;