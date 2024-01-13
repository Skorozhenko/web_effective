import { useState } from 'react';
import './Feedback.css'

const Feedback: React.FC = () => {
    const customers = [
        {photo:"src/assets/image/customer.png", name: 'Edward Newgate', subtitle: 'Founder Circle', 
            comment: 'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely'},
        {photo:"src/assets/image/customer2.png", name: 'Edward Newgate', subtitle: 'Founder Circle', 
            comment: 'The staff was friendly and attentive, making me feel comfortable throughout my stay. I would highly recommend this hospital to anyone in need of medical treatment.'},
        {photo:"src/assets/image/customer.png", name: 'Edward Newgate', subtitle: 'Founder Circle', 
            comment: 'The doctors and nurses were knowledgeable and professional. I felt confident in the hands of the medical team and would definitely choose this hospital again if needed.'},
        {photo:"src/assets/image/customer2.png", name: 'Edward Newgate', subtitle: 'Founder Circle', 
            comment: 'I recently had surgery at this hospital, and I could not have asked for a better experience. I would highly recommend it to anyone in need of surgical treatment.'},
    ]

    const [currentCustomer, setCurrentCustomer] = useState(0);

    const forward = () => {
        setCurrentCustomer(currentCustomer + 1);
    }

    const backward = () => {
        setCurrentCustomer(currentCustomer - 1);
    }
    
    return (<div className="containerFeedback">
    <div className="pointOutside"><img src="src/assets/image/element1.png" /></div>
    <div className="wrapperFeedback">
        <div className="pointInside"><img src="src/assets/image/element3.png" /></div>

        <div className="titleFeedback"><h2>What our customer are saying </h2></div>
        <div className="dividerWhite"></div>

        <div className="feedbackList">
            <div className="customerWrapper">
                <div className="circleClip"><img src={customers[currentCustomer].photo} className="customerPhoto"></img></div>
                <div className="name"> {customers[currentCustomer].name}
                    <div className="subtitle"> {customers[currentCustomer].subtitle}</div>
                </div>
                <div className="comment"> {customers[currentCustomer].comment}</div>
            </div>
        </div>
        </div>
        
        <div className="feedbackButton">
        <div className={currentCustomer == 0 ? "inactive" : "active"} onClick={currentCustomer == 0 ? () => {} : backward}>
            <img src="src/assets/image/backward.png"></img></div>
            <div className="buttons">{customers.map((_customer, index) => (
                <div className={index == currentCustomer ? "activeButton" : "inactiveButton"} onClick={() => setCurrentCustomer(index)}></div>))}
            </div>
        <div className={currentCustomer == customers.length - 1 ? "inactive" : "active"} onClick={currentCustomer == customers.length - 1 ? () => {} : forward}>
            <img src="src/assets/image/forward.png"></img></div>
        </div>
    
    </div>
    )
}

export default Feedback;