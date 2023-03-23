import { useParams } from 'react-router-dom';
import logements from '../datas/logements.json';


const Logement = () => {
  const {logementId} = useParams();
 
  const logement = logements.find((logement) => logement.id === logementId);

  return (
    <div className="logement-details">
      <h2>{logement.title}</h2>
      <img src={logement.cover} alt={logement.title} height="200px" width="200px"/>
      <p>{logement.description}</p>
      <p>Prix : {logement.price} €</p>
      <p>Surface : {logement.surface} m²</p>
    </div>
  );
};

export default Logement;
