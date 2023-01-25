import './App.css';
import { useState } from 'react';

function App() {

  {/* ข้อมูลประเทศ */ }
  const data = [
    {
      id: 1, name: "Thailand", region: "Asia", population: 100
    },

    {
      id: 2, name: "Canada", region: "Canada", population: 50
    },

    {
      id: 3, name: "Canada", region: "japan", population: 150
    }
  ]

  const [countries, setCountries] = useState(data);

  return (
    <div className="App">

      <div className='container'>
        <ul>
        {countries.map((item)=>{
          return <li key={item.id}>{item.name} | {item.region} | {item.population}</li>
        })}
        </ul>
      </div>

    </div>
  );
}

export default App;
