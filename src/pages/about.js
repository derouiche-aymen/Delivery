import React from 'react'
import GoogleMap from '../components/localisation'
import Card from '../components/card'
import Avis from '../components/avis'

const About = () => {
  const cards = [
    {
      photo: '/voiture.jpeg',
      description:
        'Nous avons plus de 100 voitures dans toute la Tunisie pour faciliter la livraison et satisfaire nos clients.'
    },
    {
      photo: '/depot.jpg',
      description:
        'Nous avons plus de 5 dépôts dans toute la Tunisie pour faciliter la livraison et satisfaire nos clients.'
    },
    {
      photo: '/colaborateur.jpg',
      description:
        'Nous avons beaucoup de collaborateurs dans toute la Tunisie pour garantir un service fiable.'
    }
  ]

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-center my-4">
        <GoogleMap />
      </div>
      <div className="d-flex justify-content-between flex-wrap gap-3 mt-4">
        {cards.map((card, index) => (
          <Card key={index} photo={card.photo} description={card.description} />
        ))}
      </div>
      <Avis />
    </div>
  )
}

export default About
