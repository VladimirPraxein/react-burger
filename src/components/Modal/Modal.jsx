import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
const modalRoot = document.getElementById("react-modals");
export default function Modal(props) {
  const element = useMemo(() => document.createElement('div'), []);
  useEffect(() => {
    if (props.open) {
      modalRoot.appendChild(element);
      return () => {
        modalRoot.removeChild(element)
      }
    }
  });
  function onClose() {
    props.setState(false);
  }

  function clickOnEsc(e) {
    if (e.key === 'Escape') {
      onClose();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', clickOnEsc);
    return () => {
      document.removeEventListener('keydown', clickOnEsc);
    }
  }, [])
  if (props.open) {
    return createPortal(
      <>
        <ModalOverlay onClick={onClose} />
        <div className={styles.container} >
          <button className={styles.button} onClick={onClose}>
            <CloseIcon type="primary" />
          </button>
          {props.children}
        </div>
      </>,
      element
    );
  }
  return null;
}
Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  setState: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}; 