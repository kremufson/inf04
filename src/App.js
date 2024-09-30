import "bootstrap/dist/css/bootstrap.css";
import './App.css';

function App() {
  return (
    <div className="container-fluid">
        <div className="col-6">
          <label htmlFor="tytul" className="form-label">Tytuł filmu</label>
          <input type="text" className="form-control" id="tytul" placeholder="" />
        </div>
    </div>
  );
}

export default App;
