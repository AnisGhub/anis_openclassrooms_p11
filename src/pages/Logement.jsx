import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../components/Carousel';

const Logement = () => {
  const { logementId } = useParams();
  const [logement, setLogement] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cacheKey = 'logementsData';
    const cachedLogements = JSON.parse(sessionStorage.getItem(cacheKey)) || [];
    
    const logement = cachedLogements.find(l => l.id === logementId);
    if (logement) {
      setLogement(logement);
      setIsLoading(false);
    } else {
      setError("Le logement n'a pas été trouvé.");
      setIsLoading(false);
    }
  }, [logementId]);

  if (isLoading) {
    return <div>Chargement en cours...</div>;
  }

  if (error) {
    return <div>Une erreur est survenue : {error}</div>;
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
