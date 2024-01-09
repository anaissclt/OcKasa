// COMPONENTS
import Banner from "../../components/Banner/Banner";
import Cardlocation from "../../components/Card/Card";

// ASSETS
import home_img from "../../assets/home.png";

const Home = () => {
  return (
    <section>
      <Banner image={home_img} text="Chez vous, partout et ailleurs" />
      <Cardlocation />
    </section>
  );
};

export default Home;
