import React from 'react';

const GoogleMap = () => {
  return (
    <div className="container my-5 text-center">
      <h2 className="mb-4">Notre emplacement</h2>
      <div className="d-flex justify-content-center">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1598.875712031897!2d10.33999056197164!3d36.7285307640947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2stn!4v1746871435415!5m2!1sfr!2stn"
          width="600"
          height="400"
          style={{ border: 0, borderRadius: '10px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
