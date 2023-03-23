import banner from '../assets/bannerIMG.jpg';
import Card from '../components/Card';
import '../styles/home.css';
import logementList from '../datas/logements.json';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div>
        <img alt='banner' src={banner} height="200px" width="200px"/>
      </div>
      <div className="logements-list">
        {logementList.map((logement) => (
          <Link to={`/logement/${logement.id}`} key={logement.id}>
            <Card
              key={logement.id}
              id = {logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
