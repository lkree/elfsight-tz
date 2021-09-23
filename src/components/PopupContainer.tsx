import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useActions, useTypedSelector } from '../hooks';
import { getPopupState } from '../store/selectors';
import { FC } from 'react';

export const PopupContainer: FC = () => {
    const { status, children } = useTypedSelector(getPopupState);
    const isOpened = status === 'opened';
    const { close } = useActions();

    return (
        <Modal isOpen={ isOpened } toggle={ close } size='lg'>
            <ModalHeader toggle={ close }>Character</ModalHeader>
            <ModalBody>{ isOpened ? children : <></> }</ModalBody>
        </Modal>
    );
}
