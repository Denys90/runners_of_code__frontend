import {
  Popup,
  ModalContent,
  CloseButton,
  ModalWrapper,
} from './ModalStyle.styled';
import { IoMdClose } from 'react-icons/io';

import { createPortal } from 'react-dom';

import { useModalContext } from 'context/ModalContext';
import { useUsers } from 'store/hooks';

const modalRoot = document.querySelector('#modalRoot');

const Modal = () => {
  const { isAuthenticated } = useUsers();

  const { toggleModal, popupRef } = useModalContext();

  return !isAuthenticated
    ? modalRoot &&
        createPortal(
          <Popup>
            <ModalWrapper ref={popupRef}>
              <ModalContent>
                <CloseButton onClick={toggleModal}>
                  <IoMdClose />
                </CloseButton>
              </ModalContent>
            </ModalWrapper>
          </Popup>,
          modalRoot
        )
    : null;
};

export default Modal;