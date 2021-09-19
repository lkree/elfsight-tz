import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useActions, useTypedSelector } from '../hooks';
import { FC } from 'react';

export const PopupContainer: FC = () => {
    const { popupReducer } = useTypedSelector(state => state);
    const isOpened = popupReducer.status === 'opened';
    const { close } = useActions();

    return (
        <Modal isOpen={ isOpened } toggle={ close } size='lg'>
            <ModalHeader toggle={ close }>Character</ModalHeader>
            <ModalBody>{ isOpened ? popupReducer.children : <></> }</ModalBody>
        </Modal>
    );
}
