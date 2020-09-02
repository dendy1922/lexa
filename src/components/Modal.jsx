import React, { useState } from "react";
import Prom from "./Prom";
import Modal from "react-modal";
import classes from "../App.module.css"


Modal.setAppElement("#root")

const RegModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    function SubmitModal() {
        setModalIsOpen(false);
    }

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        <div>
            <div className={classes.button}>
                <button onClick={openModal}>Register</button>
            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}
                className={classes.Modal}
                overlayClassName={classes.Overlay}
            >

                <Prom submitClose={SubmitModal} />
            </Modal >
        </div>
    )
}


export default RegModal;



