import './App.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [ascents, setAscents] = useState([]);
  const [seasonList, setSeasonList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/ascentsBySeason').then(({ data }) => {
      console.log(data);
      const { ascentsBySeason, seasons } = data;
      setSeasonList(seasons);
      setAscents(ascentsBySeason);
    });
  }, []);

  const graphOptions = {
    title: {
      text: 'Ascent by season',
    },
    series: [
      {
        type: 'column',
        data: ascents,
        name: 'ascents',
      },
    ],
    xAxis: {
      categories: seasonList,
    },
    yAxis: {
      title: { text: 'Number of ascents' },
    },
  };

  return (
    <>
      <header>Hi there! 🧗 📈</header>
      <main>
        {ascents.length && seasonList.length && (
          <HighchartsReact highcharts={Highcharts} options={graphOptions} />
        )}
      </main>
      <footer>Finally a footer that stays down! Awesome ✨</footer>
    </>
  );
}

export default App;
