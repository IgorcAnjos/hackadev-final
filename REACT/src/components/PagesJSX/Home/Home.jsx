import Banner from "../../Banner/Banner";
import Catalogo from "../../Catalogo/Catalogo";
import FacaLogin from "../../FacaLogin/FacaLogin";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";

import "./Home.css";

const Home = ({ isAutenticado }) => {
  const login = isAutenticado();

  return (
    <div className="container">
      <Navbar />
      <div className="espacamento"></div>
      {!login ? <FacaLogin /> : ""}
      <Banner />
      <Catalogo />
      <Footer />
    </div>
  );
};
export default Home;
