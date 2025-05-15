import Form from "../components/form";

const Contact = () => {
  return (
    <div className="container-fluid px-5 py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="row" style={{ height: '80vh' }}>

        {/* Formulaire */}
        <div className="col-md-6 d-flex align-items-stretch">
          <div className="bg-white p-4 shadow rounded w-100 d-flex flex-column justify-content-center">
            <h2 className="mb-4 text-primary text-center">Nous contacter</h2>
            <Form />
          </div>
        </div>

        {/* Image */}
        <div className="col-md-6 d-flex align-items-stretch">
          <div className="w-100 h-100">
            <img
              src="/contact.jpg"
              alt="contact"
              className="img-fluid rounded-4 shadow"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
