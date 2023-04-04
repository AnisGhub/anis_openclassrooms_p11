import { useState, useEffect } from 'react';
import bannerImg from '../assets/bannerIMG.jpg';
import Card from '../components/Card';
import '../styles/home.css';
import Banner from '../components/Banner';

const Home = () => {
  const [logements, setLogements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cacheKey = 'logementsData';
    const cachedData = sessionStorage.getItem(cacheKey);

    if (cachedData) {
      setLogements(JSON.parse(cachedData));
      setIsLoading(false);
    } else {
      fetch(`${process.env.PUBLIC_URL}/logements.json`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("La réponse du réseau n'est pas valide.");
        })
        .then(data => {
          setLogements(data);
          setIsLoading(false);
          sessionStorage.setItem(cacheKey, JSON.stringify(data));
        })
        .catch(error => {
          setIsLoading(false);
          setError("Erreur lors du chargement des logements.");
        });
    }
  }, []);

  if (isLoading) {
     return <div>chargement en cours...</div>;
  }

  if (error) {
    return <div>Une erreur est survenue : {error}</div>;
  }
  
  return (
    <div className='homePage'>
      <Banner title={<><span>Chez vous,</span> <span>partout et ailleurs</span></>} image={bannerImg} />
      <div className="logements-list">
        {logements.map((logement) => (
            <Card
              key={logement.id}
              id={logement.id}
              data={logement}
            />
        ))}
      </div>
    </div>
  );
}

export default Home;
