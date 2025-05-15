import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

const Form = () => {
  const [contactObj, setContactObj] = useState({
    fullName: '',
    email: '',
    msg: ''
  })

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const errs = {}
    if (!contactObj.fullName.trim()) {
      errs.fullName = 'Nom requis'
    }
    if (!contactObj.email.trim()) {
      errs.email = 'Email requis'
    } else if (!/\S+@\S+\.\S+/.test(contactObj.email)) {
      errs.email = 'Email invalide'
    }
    if (!contactObj.msg.trim()) {
      errs.message = 'Message requis'
    }

    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const sendEmail = (e) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)

    const templateParams = {
      fullName: contactObj.fullName,
      email: contactObj.email,
      message: contactObj.msg
    }

    emailjs
      .send(
        'service_amomez8',
        'template_0vsru2b',
        templateParams,
        'pP81AA7gWZksgCVK8'
      )
      .then(() => {
        setContactObj({ fullName: '', email: '', msg: '' })
        setErrors({})
        Swal.fire({
          icon: 'success',
          title: 'Message envoyé !',
          text: 'Nous vous répondrons bientôt.'
        })
      })
      .catch((error) => {
        console.error('Erreur lors de l’envoi :', error)
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Une erreur est survenue lors de l’envoi.'
        })
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <form className="w-100 gris" onSubmit={sendEmail}>
      <div className="mb-3">
        <label htmlFor="fullName" className="form-label">
          Nom et Prénom
        </label>
        <input
          type="text"
          className="form-control"
          id="fullName"
          placeholder="Saisir votre nom et prénom"
          value={contactObj.fullName}
          onChange={(e) =>
            setContactObj({ ...contactObj, fullName: e.target.value })
          }
        />
        {errors.fullName && <p className="text-danger">{errors.fullName}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          value={contactObj.email}
          onChange={(e) =>
            setContactObj({ ...contactObj, email: e.target.value })
          }
        />
        {errors.email && <p className="text-danger">{errors.email}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Votre sujet
        </label>
        <textarea
          className="form-control"
          id="message"
          rows="3"
          placeholder="Nous envoyer un message ?"
          value={contactObj.msg}
          onChange={(e) =>
            setContactObj({ ...contactObj, msg: e.target.value })
          }></textarea>
        {errors.message && <p className="text-danger">{errors.message}</p>}
      </div>

      <div className="col-auto d-flex justify-content-end">
        <button
          type="submit"
          className="btn btn-primary mb-3"
          disabled={loading}>
          {loading ? 'Envoi en cours...' : 'Envoyer'}
        </button>
      </div>
    </form>
  )
}

export default Form
