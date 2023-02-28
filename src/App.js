import "./App.css";
import SearchContact from "./components/SearchContact";
import AddContact from "./components/AddContact";
import Contacts from "./components/Contacts";
function App() {
  return (
    <div
      className="container "
      style={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        alignItems: "center",
      }}
    >
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center">Contact App</h5>
            <SearchContact />
            <AddContact/>
            <Contacts />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
