// import Card from '../components/Home/CardGrid/Card';
import Card from './Card';

const CardGrid = ({ data }) => {
  return (
    <div className="card-grid__wrapper">
      {data.map((item, index) => (
        <Card
          key={index}
          flagSrc={item.flag}
          countryName={item.name}
          population={item.population}
          region={item.region}
          capital={item.capital}
        />
      ))}
    </div>
  );
};

export default CardGrid;
