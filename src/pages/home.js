import Carousel from "../components/carousel";

const Home = () => {
  return (
    <div>
      <div className="carouseldiv">
        <Carousel />
      </div>

      <div className="container my-5">
        <h2 className="text-center mb-4 fw-bold text-primary">
          Livraison rapide, simple et fiable
        </h2>
        <p className="text-center fs-5 text-muted mx-auto" style={{ maxWidth: '800px' }}>
          Que ce soit pour vos repas, vos courses ou vos colis, nous assurons une livraison
          rapide et sécurisée partout en ville. Commandez en quelques clics, suivez votre
          livraison en temps réel, et recevez vos produits sans stress, quand vous le voulez.
        </p>
      </div>
    </div>
  );
};

export default Home;
