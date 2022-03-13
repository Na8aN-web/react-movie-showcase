import Header from './components/Header';
import Body from './components/Body';
import Card from './components/Card';
import Details from './Details';
import './App.css';

function App() {
  const cardDetails = Details.map(detail =>{
    return <Card 
      key={detail.id}
      img={detail.img}
      genre={[detail.genres[0], detail.genres[1]]}
      name={detail.name}
      date={detail.date}
      about={detail.about}
    />
  });
  return (
    <div className="App">
      <Header />
      <section className='card-styles'>
        {cardDetails}
      </section>
      </div>
  );
}

export default App;
