import { useState } from 'react'
import './Article.css'
import ArticleCard from './ArticleCard/ArticleCard'

const Article: React.FC = () => {

    const [viewAll, setViewAll] = useState(false);

    const clickViewAll = () => {
        setViewAll(!viewAll);
    }

    return (
        <article>
            <div className="pointArticle"><img src="src/assets/image/element2.png" /></div>
            <div className="vectorArticle"><img src="src/assets/image/vector2.png" /></div>
            <h2>Check out our latest article</h2>
            <div className="divider"></div>
            <div className="wrapperArticle">
                <ArticleCard image="/src/assets/image/article1.png" 
                    name='Disease detection, check up in the laboratory' 
                    text='In this case, the role of the health laboratory is very important to do a disease detection...' />
                <ArticleCard image="/src/assets/image/article2.png" 
                    name='Herbal medicines that are safe for consumption' 
                    text='Herbal medicine is very widely used at this time because of its very good for your health...' />
                <ArticleCard image="/src/assets/image/article3.png" 
                    name='Natural care for healthy facial skin' 
                    text='A healthy lifestyle should start from now and also for your skin health. There are some...' />

                {viewAll && <ArticleCard image="/src/assets/image/article1.png" 
                    name='Disease detection, check up in the laboratory' 
                    text='In this case, the role of the health laboratory is very important to do a disease detection...' />}
                {viewAll && <ArticleCard image="/src/assets/image/article2.png" 
                    name='Herbal medicines that are safe for consumption' 
                    text='Herbal medicine is very widely used at this time because of its very good for your health...' />}
                {viewAll && <ArticleCard image="/src/assets/image/article3.png" 
                    name='Natural care for healthy facial skin' 
                    text='A healthy lifestyle should start from now and also for your skin health. There are some...' />}
            </div>
        <button onClick={clickViewAll}><div>{!viewAll ? "View all" : "Hide"}</div></button>
    </article>
    )
}

export default Article;