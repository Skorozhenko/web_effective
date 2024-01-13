import './ArticleCard.css'

const ArticleCard: React.FC <{image: string; name: string; text: string }> = (props) => {
    return (
        <div className="containerArticleCard">
        <div><img src={props.image} className="imageArticleCard"></img> </div>
        <div className="wrapperArticleCard">
            <div className="nameArticleCard">{props.name} </div> 
            <div className="textArticleCard">{props.text}</div>
            <div className="readMore">Read more →</div>
        </div>
    </div>)
}
export default ArticleCard;