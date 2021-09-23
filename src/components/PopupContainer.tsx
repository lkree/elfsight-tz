import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useActions, useTypedSelector } from '../hooks';
import { getPopupState } from '../selectors';
import { SmallCard } from './SmallCard';
import { FC } from 'react';

export const PopupContainer: FC = () => {
    const { isOpened, data } = useTypedSelector(getPopupState);
    const { close } = useActions();

    return (
        <Modal isOpen={ isOpened } toggle={ close } size='lg'>
            <ModalHeader toggle={ close }>Character</ModalHeader>
            <ModalBody>{ isOpened ? <SmallCard item={ data } enableNameClick={ false } /> : <></> }</ModalBody>
        </Modal>
    );
}
