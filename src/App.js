import './App.css';
import { useState, useEffect } from "react"

function App() {
  const [countries, setCountries] = useState([])
  const [word, setWord] = useState("")
  const [dataFilter] = useState(["name", "capital"])

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then(res => res.json())
      .then(data => {
        setCountries(data)
      })
  }, [])

  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  const searchCountries = (countries) => {
    return countries.filter((item) => {
      return dataFilter.some((filter) => {
        if (item[filter]) {
          return item[filter].toString().toLowerCase().indexOf(word.toLowerCase()) > -1
        }
      })
    })
  }
  return (
    <div className="container">
      <div className="search-container">
        <label htmlFor="search-form">
          <input type="text"
            className="search-input"
            placeholder="Search country that you want ... "
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />         
        </label>
      </div>
      <ul className="row">
        {searchCountries(countries).map((item, index) => {
          return (
            <li key={index}>
              <div className="card">
                <div className="card-title">
                  <img src={item.flag} alt={item.name} />
                </div>
                <div className="card-body">
                  <div className="card-description">
                    <h2>{item.name}</h2>
                    <ol className="card-list">
                      <li>Population : <span>{formatNumber(item.population)}</span></li>
                      <li>Region : <span>{item.region}</span></li>
                      <li>Subregion : <span>{item.subregion}</span></li>
                      <li>Capital : <span>{item.capital}</span></li>
                    </ol>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
