import '../styles/card.css';

const Card = ({id, title, cover}) => {
    return (
        <div className="card">
            <img src={cover} alt={title} height="200px" width="200px"/>
            <div className="card__content">
                <h3>{title}</h3>
            </div>
        </div>
    );
}

export default Card;



