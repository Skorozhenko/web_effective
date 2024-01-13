import './ServicesCard.css'

const ServiceCard: React.FC<{ image: string; name: string; text: string }> = (props) => {
    return (<div className="block">
        <div className="innerBlock">
            <div className="pictureContainer"><img src={props.image}></img> </div>
            <p className="serviceName"> {props.name} </p>
            <p className="textStyle">{props.text}</p>
        </div>
    </div>)
}

export default ServiceCard;