import React, { useState } from "react";
import Registration from "./Registration";
import Modal from "react-modal";
import classes from "../App.module.css"


Modal.setAppElement("#root")


const RegModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        <div>
            <button onClick={openModal}>Open modal</button>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}
                className={classes.Modal}
                overlayClassName={classes.Overlay}
            >

                <Registration />
            </Modal >
        </div>
    )
}


export default RegModal;



