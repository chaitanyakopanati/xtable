import './App.css';
import { useState } from 'react';

const arr = [
  { date: "2022-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-02", views: 150, article: "Article 2" },
  { date: "2023-09-02", views: 120, article: "Article 3" },
  { date: "2020-09-03", views: 200, article: "Article 4" }
];

function App() {
  const [data, setData] = useState(arr);


  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      if (b.date === a.date) {
        return b.views - a.views; 
      }
      return new Date(b.date) - new Date(a.date); 
    });
    setData(sortedData);
  };

  
  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      if (b.views === a.views) {
        return new Date(b.date) - new Date(a.date); 
      }
      return b.views - a.views; 
    });
    setData(sortedData);
  };

  return (
    <div className="App">
      <h1>Date and Views Table</h1>

      <div>
        <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByViews}>Sort by Views</button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Views</th>
              <th>Article</th>
            </tr>
          </thead>
          <tbody>
            {data.map((el, index) => (
              <tr key={index}>
                <td>{el.date}</td>
                <td>{el.views}</td>
                <td>{el.article}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
