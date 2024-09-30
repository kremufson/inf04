import "bootstrap/dist/css/bootstrap.css";
import './App.css';

function App() {
  
  const [tytul, setTytul] = useState("");
  const [rodzaj, setRodzaj] = useState("");

  return (
    <div className="container-fluid">
      <form onSubmit={handleSubmit}>
        <div className="col-6">
          <label htmlFor="tytul" className="form-label">Tytuł filmu</label>
          <input type="text" className="form-control" id="tytul" placeholder="" />
        </div>
        <div className="col-6">
        <label htmlFor="rodzaj" className="form-label">Rodzaj</label>
        <select id="rodzaj" className="form-select">
          <option defaultValue={0}></option>
          <option value="1">Komedia</option>
          <option value="2">Obyczajowy</option>
          <option value="3">Sensacyjny</option>
          <option value="4">Horror</option>
        </select>  
        </div>
        </form>
    </div>
  );
}

export default App;
