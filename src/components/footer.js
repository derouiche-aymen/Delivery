import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row">
          {/* Colonne 1 : Logo ou Nom */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">LivraXpress</h5>
            <p>Votre partenaire de confiance pour toutes vos livraisons rapides et sécurisées.</p>
          </div>

          {/* Colonne 2 : Liens utiles */}
          <div className="col-md-4 mb-3">
            <h6>Liens utiles</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Accueil</a></li>
              <li><a href="/services" className="text-light text-decoration-none">Services</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Colonne 3 : Réseaux sociaux */}
          <div className="col-md-4 mb-3">
            <h6>Suivez-nous</h6>
            <div className="d-flex gap-3">
              <a href="https://www.facebook.com/" className="text-light fs-5" target="_blank"><i className="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/" className="text-light fs-5" target="_blank" ><i className="bi bi-instagram"></i></a>
              <a href="mailto:drouiche.aymen@gmail.com" className="text-light fs-5"  target="_blank"><i className="bi bi-envelope"></i></a> {/* Icône email */}
            </div>
          </div>
        </div>

        <hr className="border-secondary" />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} LivraXpress. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
