import { Link } from 'react-router-dom';
import '../styles/card.css';

const Card = ({id, data}) => {
    return (
        <div className="card">
            <Link to={`/logement/${id}`} key={id}>
                <img className='card__img' src={data.cover} alt={data.title}/>
                <div className='card__bg'></div>
                <div className="card__content">
                    <h3>{data.title}</h3>
                </div>
            </Link>
        </div>
    );
}

export default Card;



