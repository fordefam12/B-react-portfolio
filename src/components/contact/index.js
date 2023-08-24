import React, { useState } from "react";
import { validate } from "uuid";
// todo fill in folders later
// import {validateEmail} from "";

function contact() {
    const [email, setEmail]= useState("");
    const [userName, setUserName]= useState("");
    const [message, setMessage]= useState("");
    const [errorMessage, setErrorMessage]= useState("");

    const handleInputChange = (e) => {
        const {target} = e;
        const inputType = target.Name;
        const inputValue = target.value;

        if (inputType === "email") {
            setEmail(inputValue);
        }else if (inputType === "userName") {
            setUserName(inputValue);} 
            else{setMessage(inputValue)}
        }    
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email) || !username){
            setErrorMessage("Please enter a valid email and username"); return;
        }
        if (!setMessage(message)){
        setErrorMessage('message is required');
        return;
        }
        setUserName("");
        setMessage("");
        setEmail("");
        };

        
    