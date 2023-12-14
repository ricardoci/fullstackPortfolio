import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/coder.GIF';
import UTrackerImg from '../images/CryptoData.jpg';
import GreenCtgImg from '../images/weatherApp.PNG';
import CoinTrackerImg from '../images/Screenshot 2023-03-21 234059.png';
import CavinImg from '../images/coder.GIF';
import Charts from '../images/charts.PNG';
const projects = [
  {
    id: uuidv4(),
    name: 'CryptoWeather',
    desc:
      'This application  retrieves information about a specific cryptocurrency using the Coinpaprika API.The user can input a cryptocurrency name into a search...',
    img: UTrackerImg,
    link: 'https://ricardoci.github.io/CryptoData/',
  },
  {
    id: uuidv4(),
    name: 'WeatherApp',
    desc:
      'My responsibilities in this project included setting up a fetch call to the API, implementinga watchlist feature to save desired currency data in local storage, and styling the application.',
    img: GreenCtgImg,
    link: 'https://ricardoci.github.io/WeatherForecastApp/',
  },
  {
    id: uuidv4(),
    name: 'Target Property Locator',
    desc:
      'A web application that allows Target team members to quickly and easily access location information for all Target stores and distribution centers in the US.',
    img: CoinTrackerImg,
    link: 'https://targetsearchapp.herokuapp.com/',
  },
  {
    id: uuidv4(),
    name: 'Charts Dashboard',
    desc:
      'A web application that allows for data visualization, crypto prices, weather and account customizations.',
    img: Charts,
    link: 'https://chartsdashboard-production.up.railway.app/',
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
