import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/coder.GIF';
import UTrackerImg from '../images/CryptoData.jpg';
import GreenCtgImg from '../images/weatherApp.PNG';
import CoinTrackerImg from '../images/Screenshot 2023-03-21 234059.png';
import CavinImg from '../images/coder.GIF';

const projects = [
  {
    id: uuidv4(),
    name: 'CryptoWeather',
    desc:
      'This application  retrieves information about a specific cryptocurrency using the Coinpaprika API.The user can input a cryptocurrency name into a search...',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'WeatherApp',
    desc:
      'An app to help people to get the weather.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Target Property Locator',
    desc:
      'A web application that allows Target team members to quickly and easily access location information for all Target stores and distribution centers in the US.',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Coming Soon",
    desc:
      'n/a',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Coming Soon',
    desc:
      'N/a',
    img: ProjectImg,
  },
];

export default projects;
