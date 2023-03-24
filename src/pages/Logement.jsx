import { useParams } from 'react-router-dom';
import Carousel from '../components/Carousel';
import logements from '../datas/logements.json';


const Logement = () => {
  const {logementId} = useParams();
 
  const logement = logements.find((logement) => logement.id === logementId);
  console.log(logement.pictures);

  return (
    <div className="logement-details">
      <Carousel pictures={logement.pictures} />
      <h2>{logement.title}</h2>
      <p>{logement.description}</p>
    </div>
  );
};

export default Logement;
