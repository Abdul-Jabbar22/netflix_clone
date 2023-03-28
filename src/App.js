import "./App.css";
import Row from "./Components/Row";
import requests from "./requests";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />

      <Row
        title="NEFLIX TRENDINGS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="NEFLIX ORIGINALS" fetchUrl={requests.fetchTrending} />
      <Row title="NEFLIX TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="NEFLIX ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="NEFLIX COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="NEFLIX HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row
        title="NEFLIX ROMANCE MOVIES"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row title="NEFLIX DOCUMENTRIES" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
