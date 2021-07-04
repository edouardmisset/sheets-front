import './App.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useEffect, useState } from 'react';

function App() {
  const [ascentsBySeason, setAscentsBySeason] = useState([]);
  const [seasons, setSeasons] = useState([]);

  useEffect(() => {

    

  }, []);

  const graphOptions = {
    title: {
      text: 'Ascent by season',
    },
    series: [
      {
        type: 'column',
        data: [1, 2, 3],
        name: 'ascents',
      },
    ],
    xAxis: {
      categories: [2015, 2016, 2017],
    },
    yAxis: {
      title: { text: 'Number of ascents' },
    },
  };

  return (
    <>
      <header>Hi there! 🧗 📈</header>
      <main>
        <HighchartsReact highcharts={Highcharts} options={graphOptions} />
      </main>
      <footer>Finally a footer that stays down! Awesome ✨</footer>
    </>
  );
}

export default App;
