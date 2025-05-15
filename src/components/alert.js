import Swal from 'sweetalert2';

const Alert = () => {
  Swal.fire({
    title: 'Message envoyer',
    text: "Nous avons bien reçu votre Message , nous vouz rependrez le plut tot possible",
    icon: 'info'
  });
};
export default Alert;