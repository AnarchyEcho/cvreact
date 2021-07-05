import React, { useState } from 'react';
// eslint-disable-next-line
import Modal from "react-modal"
// eslint-disable-next-line
import Style from "../style.css"

const modalStyles = {
    content : {
        backgroundColor: "#121212",
        color: "#fff",
        margin: "0 auto",
        padding: "20px",
        width: "50vw",
        height: "20vh",
        position: "relative",
        inset: "25vh 0 0 0"
    }
};

const overlayStyles = {
    content : {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(12, 12, 12, 0.2)",
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
  }
}

const modalButton = {
    top: "100%",
    bottom: "0"
}

export default function ContactModal() {
    
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    return (
        <div>
            <div id="overlay" style={overlayStyles}>
                <Modal style={modalStyles} isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)}>
                    <p>
                        <b>Email:</b> andre.kodehode@gmail.com
                        </p>                        <p>
                        <b>Phone:</b> +47 222 22 222
                    </p>
                    <button onClick={setModalIsOpenToFalse} style={modalButton}>Close</button>
                </Modal>
            </div>

            <div>
                <button onClick={setModalIsOpenToTrue}>Contact Me 📨</button>
            </div>

        </div>
    );
}