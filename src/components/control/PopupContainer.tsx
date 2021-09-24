import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useActions, useTypedSelector } from '../../hooks';
import { getPopupState } from '../../selectors';
import { SmallCard } from '../view';
import { FC } from 'react';

export const PopupContainer: FC = () => {
    const { data } = useTypedSelector(getPopupState);
    const { close } = useActions();

    return (
        <Modal isOpen={ Boolean(data) } toggle={ close } size='lg'>
            <ModalHeader toggle={ close }>Character</ModalHeader>
            <ModalBody>{ data ? <SmallCard item={ data } enableNameClick={ false } /> : <></> }</ModalBody>
        </Modal>
    );
}
