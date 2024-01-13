import './Learn.css'

const Learn: React.FC = () => {
    return (<div className = "wrapperLearn">
        <div> <img src="src/assets/image/learn.png" /></div>
        <div className = "titleLearn"><h2>Leading healhcare <br /> providers</h2>
            <div className = "divider"></div>
            <br />
            <div className = "textLearn"><p>We provides progressive, and affordable healthcare,
                <br /> accessible on mobile and online for everyone. To us, it’s 
                <br /> not just work. We take pride in the solutions we deliver</p></div>
            <button><div>Learn more</div></button>
        </div>
        <div className="points"><img src="src/assets/image/element1.png" /></div>
    </div>)
}
export default Learn