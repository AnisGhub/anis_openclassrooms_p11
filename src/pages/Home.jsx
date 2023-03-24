import bannerImg from '../assets/bannerIMG.jpg';
import Card from '../components/Card';
import '../styles/home.css';
import logementList from '../datas/logements.json';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div>
      <Banner title="Chez vous, partout et ailleurs" image={bannerImg} />
      <div className="logements-list">
        {logementList.map((logement) => (
            <Card
              key={logement.id}
              id = {logement.id}
              title={logement.title}
              cover={logement.cover}
            />
        ))}
      </div>
    </div>
  );
}

export default Home;
