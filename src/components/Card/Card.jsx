import style from "./Card.module.css"

function Card({ item = {} }) {

    const { title, image, content } = item

    return (
        <div className={style.card}>
            <img src={image } />
            <div className={style.card_body}>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Card