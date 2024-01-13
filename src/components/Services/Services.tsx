import './Services.css'
import ServiceCard from './ServicesCard/ServicesCard';

const Services: React.FC = () => {
    return <>
        <section className = "container">
            <h1 className = "title">Our services</h1>
            <div className = "divider"></div>
            <p className = "text">We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment 
                <br /> with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
            <div className = "vector"> <img src= "src/assets/image/Vector.png" /></div>
            <div className = "element"> <img src = "src/assets/image/element2.png" /></div>
            <div className = "cardWrapper">
                <ServiceCard image = "src/assets/image/Frame1.png" 
                    name = "Search doctor" text = "Choose your doctor from thousands of specialist, general, and trusted hospitals" />
                <ServiceCard image = "src/assets/image/Frame2.png" 
                    name = "Online pharmacy" text = "Buy  your medicines with our mobile application with a simple delivery system" />
                <ServiceCard image = "src/assets/image/Frame3.png" 
                    name = "Consultation" text = "Free consultation with our trusted doctors and get the best recomendations" />
                <ServiceCard image = "src/assets/image/Frame4.png" 
                    name = "Details info" text = "Free consultation with our trusted doctors and get the best recomendations" />
                <ServiceCard image = "src/assets/image/Frame5.png" 
                    name = "Emergency care" text = "You can get 24/7 urgent care for yourself or your children and your lovely family" />
                <ServiceCard image="src/assets/image/Frame6.png" 
                    name = "Tracking" text = "Track and save your medical history and health data " />
            </div>
            <button> <div> Learn more </div></button>
            
        </section>
    </>
}
export default Services; 