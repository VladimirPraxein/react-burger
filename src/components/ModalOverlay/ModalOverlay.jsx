import styles from './ModalOverlay.module.css';
import PropTypes from 'prop-types';

export default function ModalOverlay(props) {
  return (
    <div className={styles.overlay} onClick={props.onClick} />
  )
}

ModalOverlay.propTypes = {
  onClick: PropTypes.func.isRequired
}

