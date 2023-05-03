import React, { useState } from "react";

import { RiCloseLine } from "react-icons/ri";
import "./modal.css";

const Modal = ({ onClose }) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        onClose();
    };

    return (
        <div className="gpt3__modal">
            <div className="gpt3__modal-content">
                <h2 className="gradient__text">Fill the Form</h2>
                <p>
                    <RiCloseLine color="#fff" size={50} onClick={onClose} />
                </p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="fullname">Full Name:</label>
                        <input
                            id="fullname"
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Full Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-mail"
                        />
                    </div>
                    <div>
                        <input
                            id="privacy"
                            type="checkbox"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                        />
                        <label htmlFor="privacy">
                            I agree to the privacy policy.
                        </label>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
