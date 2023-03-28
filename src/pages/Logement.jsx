import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Carousel from '../components/Carousel';

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
      <h2>{logement.title}</h2>
      <p>{logement.description}</p>
    </div>
  );
};

export default Logement;
