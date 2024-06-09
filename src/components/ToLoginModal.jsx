import PropTypes from 'prop-types';
import { Link} from "react-router-dom";

export default function ToLoginModal({closeModal}) {  
  return (
    <div className="modal">
        <div className="modal-login">
            <h3>Вы не вошли в аккаунт!</h3>
            <p><Link 
              className='account-link'
              to = '/account'
            >Перейдите в личный кабинет для авторизации.</Link></p>
            <button onClick={() => closeModal()}>Закрыть</button>
        </div>
    </div>
  );
}

ToLoginModal.propTypes = {
    closeModal: PropTypes.func.isRequired
}
