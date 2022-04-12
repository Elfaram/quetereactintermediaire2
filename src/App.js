import './App.css';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const sampleQuote = {
    quote:
      "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.",
    character: 'Lisa Simpson',
    image:
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083',
    characterDirection: 'Right',
  };

  const [QuoteList, setQuotelist] = useState(sampleQuote);
  const getEmployee = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((response) => response.data)
      .then((data) => {
        setQuotelist(data[0]);
      });
  };
  return (
    <div className='App'>
      <QuoteCard {...QuoteList} />
      <button type='button' onClick={getEmployee}>
        Changer de citation
      </button>
    </div>
  );
}
export default App;
