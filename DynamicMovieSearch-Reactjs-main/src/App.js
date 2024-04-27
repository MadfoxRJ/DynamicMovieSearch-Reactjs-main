import React , {useEffect , useState} from 'react'
import axios from "axios"

const App = () => {

  const [data , setData] = useState([]);

  useEffect(() => {
   fetchData();
  } , [])

  useEffect(() => {
    console.log("THE MOVIES DATA" , data)
  },[data])

  const url = 'https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest&page=1';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8d0d2a609cmsha04b737ed27b9e8p10e0b9jsn82e7a21b7525',
      'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result.results);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  
  

  return (
    <>
      <h1>Movies</h1>
      {data.map((keys) => (
        <div key={keys.id}>
          <img src={keys.imageurl} />
          <h1>{keys.title}</h1>
          <p>{keys.synopsis}</p>
        </div>
      ))}
    </>
  );
}


export default App;