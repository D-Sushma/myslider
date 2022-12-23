// import './App.css';
import './App.scss';

import SliderImage from "./components/SliderImage";

function App() {
  const slides = [
    {
      caption1: 'Data Re-imagined',
      caption2: 'Next Generation Technology',
      img: './images/slide-1.jpg',
      // city: 'Paris',
      // country: 'France',
      // img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg',
    },
    {
      caption1: 'Explore Our Animal Platform',
      caption2: 'Delivering Kindness In Science',
      img: './images/slide-2.jpg',
      // city: 'Singapore'
      // img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg',
    },
    {
      caption1: 'Precision In Drug Discovery',
      // caption2: 'Czech Republic',
      img: './images/slide-3.jpg',
      // img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg',
    },
    // {
    //   city: 'Amsterdam',
    //   country: 'Netherlands',
    //   img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg',
    // },
    // {
    //   city: 'Moscow',
    //   country: 'Russia',
    //   img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg',
    // },
  ];

  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>IMAGE-SLIDER</h1>
      <SliderImage slides={slides} />
    </div>
  );
}

export default App;
