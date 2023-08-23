import React, { useState } from "react";
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

        
    }
    
}