import React from "react";
import './form.css';

type InputProps = {
    name: string,
    type: string,
    label: string,
    placeholder: string
}

type FormProps = {
    inputs: InputProps[];
    boxHeight?: string
    header: string
}


const Form: React.FC<FormProps> = ({ inputs, boxHeight, header }) => {
    // const handleSubmit = () => {

    // }

    return (
        <div className="login-container">
            <div className="login-box" style={{height: boxHeight}}>
                <h1 style={{color: "#5c7ece"}}>{header}</h1>
                <form>
                    {inputs.map((input) => (
                        <div key={input.name}>
                            {/* <label htmlFor={input.name}>{input.label}</label> */}
                            <div className="textbox">
                            <input
                                id={input.name}
                                name={input.name}
                                type={input.type}
                                placeholder={input.placeholder}
                                required
                            />
                            </div>
                        </div>

                    ))}
                    <button type="submit" className="btnn">Send</button>
                </form>
            </div>

            {/* <div className="login-box">
            <h1 style={{color: "#5c7ece"}}>Iniciar Sesión</h1>
            <form >
                <div className="textbox">
                    <input type="text" placeholder="Usuario" required />
                </div>
                <div className="textbox">
                    <input type="password" placeholder="Contraseña" required />
                </div>
                <input type="submit" className="btnn" value="Entrar" />
            </form>
        </div> */}
        </div>
    );
}

export default Form;
