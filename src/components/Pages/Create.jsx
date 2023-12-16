import React from "react";
import Header from "../Header";
import CreateTransaction from "../CreateTransaction";
import { width } from "@mui/system";

const Create = () => {
    return (
        <div>
            <Header />
            <div style={containerStyle}> 
                <div style={divFormStyle}>
                    <CreateTransaction />
                </div> 
            </div>  
        </div>
    );
};

const divFormStyle = {
    backgroundColor: '#1D1D1D',
    alignItems: 'center',
    width: '50vw',
    padding: '30px',
    borderRadius: '10px'
}

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 80px)'
}

export default Create;