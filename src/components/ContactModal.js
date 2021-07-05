import React, { useState } from 'react';
// eslint-disable-next-line
import Modal from "react-modal"
// eslint-disable-next-line
import Style from "../style.css"


const modalStyles = {
    overlay : {
        backgroundColor: "rgba(12, 12, 12, 0.7)",
    },
    content : {
        backgroundColor: "#121212",
        color: "#fff",
        margin: "0 auto",
        padding: "20px",
        maxWidth: "350px",
        maxHeight: "200px",
        width: "50vw",
        height: "30%",
        position: "relative",
        inset: "25vh 0 0 0",
        borderRadius: "10px",
        border: "#fe9000 solid 1px",
    }
};

const modalButton = {
    inset: "0 0 0 0",
    backgroundImage: "linear-gradient(0deg, #fe9000 0%, #ffb34f 100%)",
    color: "#000",
    borderRadius: "3%",
    fontSize: "16px",
    cursor: "pointer",
    border: "2px solid #121212",
};


export default function ContactModal() {
    
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue = () => {
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse = () => {
        setModalIsOpen(false)
    }

    return (
        <div id="aboutModal">
            <div id="overlay">
                <Modal style={modalStyles} isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)} ariaHideApp={false}>
                    <p>
                        <b>Email:</b> andre.kodehode@gmail.com
                        </p>
                    <p>
                        <b>Phone:</b> +47 222 22 222
                    </p>
                    <button onClick={setModalIsOpenToFalse} style={modalButton}>Close Information</button>
                </Modal>
            </div>

            <div>
                <button onClick={setModalIsOpenToTrue} style={modalButton}>Open Information</button>
            </div>

        </div>
    );
}