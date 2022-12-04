import PropTypes from 'prop-types';
import { Notice } from './Notification.styled';

const Notification = ({ message }) => {
    return <Notice style={{ textAlign: 'center' }}>{message}</Notice>;
  };

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Notification;

