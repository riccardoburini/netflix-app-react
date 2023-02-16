import logo from "./assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import FirstSaga from "./components/FirstSaga";
import Footer from "./components/Footer";
import SecondNav from "./components/SecondNav";
import SecondSaga from "./components/SecondSaga";
import ThirdSaga from "./components/ThirdSaga";

function App() {
  return (
    <>
      <CustomNavbar sorgente={logo} />;
      <SecondNav />
      <h4 className="my-4">Rocky Saga</h4>
      <div className="d-flex  flex-wrap flex-lg-nowrap justify-content-between  ">
        <FirstSaga />
      </div>
      <h4 className="my-4">Harry Potter Saga</h4>
      <div className="d-flex  flex-wrap flex-lg-nowrap justify-content-between  ">
        <SecondSaga />
      </div>
      <h4 className="my-4">Harry Potter Saga</h4>
      <div className="d-flex  flex-wrap flex-lg-nowrap justify-content-between  ">
        <ThirdSaga />
      </div>
      <Footer />
    </>
  );
}

export default App;
