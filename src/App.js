import "bootstrap/dist/css/bootstrap.css";
import './App.css';

function App() {
  
  function onSubmit(event) {
    event.preventDefault();

    const tytul = event.target.elements.tytul.value;
    const rodzaj = event.target.elements.rodzaj.value;
    console.log(`tytul: ${tytul}, rodzaj: ${rodzaj}`);
  }

  return (
    <div className="container-fluid">
      <form onSubmit={onSubmit}>
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
        </div><br></br>
          <button type="submit" className="btn btn-primary">
            Dodaj
          </button>
        </form>
    </div>
  );
}

export default App;
