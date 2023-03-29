import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Accordion from '../components/Accordion';
import Carousel from '../components/Carousel';
import '../styles/logement.css';

const Logement = () => {
  const { logementId } = useParams();
  const [logement, setLogement] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const cacheKey = 'logementsData';
    const cachedLogements = JSON.parse(sessionStorage.getItem(cacheKey)) || [];

    const logement = cachedLogements.find(l => l.id === logementId);
    if (logement) {
      setLogement(logement);
      setIsLoading(false);
    } else {
       navigate("/404");
    }
  }, [logementId, navigate]);

  if (isLoading) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <div className="logement-details">

      <Carousel pictures={logement.pictures} />

      <div className='containerInfo'>

        <div className='logement-details__info'>
          <div className='logement-details__title'>
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
          </div>

          <div className='logement-details__tags'> {logement.tags.map( (t, index) => (
             <div className='tag' key={index}> {t} </div>
          ))}</div>

        </div>
      
        <div className='logement-details__infoProfile'>
          
          <div className='logement-details__profile'>
            <div className='logement-details__profileTitle'>{logement.host.name.split(' ').map((w, index) => (
              <p key={index}>{w}</p>
            ))}
            </div>
            <img src={logement.host.picture} alt="" />
          </div>

          <div className='logement-details__stars'>
            {new Array(5).fill(null).map((_, index) => (
              <svg
                  key={index}
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill={index < logement.rating ? "#FF6060" : "#E3E3E3"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z" />
              </svg>
            ))}
          </div>
          
        </div>
      </div>

      <div className="accordion--logement">
        <Accordion title="Description" content={logement.description} />
        <Accordion title="Équipements" content=
          {logement.equipments.map((equipment, index) => (
            <div key={index}>{equipment}</div>
          ))}
        />
      </div>
      
    </div>
  );
};

export default Logement;
