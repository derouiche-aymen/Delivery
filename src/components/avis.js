const AvisClients = () => {
    const clients = [
      { name: "Ahmed", message: "Livraison rapide et service impeccable. Je recommande fortement !", rating: 5 },
      { name: "Salma", message: "J’ai reçu mon colis le jour même, très satisfaite du service.", rating: 4 },
      { name: "Karim", message: "Le livreur était ponctuel et très courtois. Merci BM Delivery !", rating: 5 },
      { name: "Leila", message: "Service professionnel et suivi efficace.", rating: 4 },
      { name: "Omar", message: "Livraison en temps record, merci !", rating: 5 },
      { name: "Nour", message: "Le site est simple à utiliser et le service client est top.", rating: 5 },
    ];
  
    const renderStars = (rating) => "★".repeat(rating) + "☆".repeat(5 - rating);
  
    return (
      <section className="py-5 bg-light" id="avis">
        <div className="container">
          <h2 className="text-center mb-5">Avis de nos clients</h2>
          <div className="row g-4">
            {clients.map((client, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <img
                        src={`https://ui-avatars.com/api/?name=${client.name}&background=random`}
                        className="rounded-circle me-3"
                        width="50"
                        height="50"
                        alt={client.name}
                      />
                      <h5 className="mb-0">{client.name}</h5>
                    </div>
                    <p className="card-text">{client.message}</p>
                    <div className="text-warning">{renderStars(client.rating)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default AvisClients;
  