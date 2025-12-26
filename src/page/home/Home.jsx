import ContainerBestseller from "../../components/cartBestseller/containerBestseller";
import ContainerCC from "../../components/categoriCart/ContainerCC";
import Deals from "../../components/deal/Deals";
import FeaturesBar from "../../components/FeaturesBar/FeaturesBar";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import NavBard from "../../components/navbar/NavBar";
import Testimonials from "../../components/talkCustomer/customer";

function Home() {
  return (
    <>
      <NavBard />
      <Header />
      {/* categorie cart */}
      <section className="container m-auto sm:p-0 p-2">
        <ContainerCC />
        <ContainerBestseller />
      </section>
      {/* Deals of the month */}
      <section className="container m-auto sm:p-0 p-2 overflow-hidden">
        <Deals />
      </section>
      <Testimonials />
      <section className="container m-auto">
        <FeaturesBar />
      </section>
      <section>
        <Footer/>
      </section>
    </>
  );
}

export default Home;
// function Home() {
//   return ( <>
//     <h2>alaksdj;f</h2>
//   </> );
// }

// export default Home;
