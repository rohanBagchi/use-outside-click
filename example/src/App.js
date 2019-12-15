import React from 'react';
import { useOutsideClick } from 'use-outside-click';
import Modal from './Modal';

const App = () => {
    const node = React.useRef(null);
    const [modalOpen, setModalOpen] = React.useState(false);
    const toggleModal = () => setModalOpen(!modalOpen);

    useOutsideClick({
        node,
        onOutsideClick: toggleModal,
        isOpen: modalOpen
    });

    return (
        <div>
            <button onClick={toggleModal}>
                Toggle Modal!
            </button>

            <Modal
                visible={modalOpen}
                dismissible={true}
                onClose={toggleModal}
                ref={node}
            >
                Yo!
            </Modal>
        </div>
    )
}
export default App
