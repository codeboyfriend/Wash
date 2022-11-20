import { createContext, useState } from 'react';

const washieContext = createContext();

export function WashieProvider ({ children }) {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [temperature, setTemperature] = useState("");
    const [color, setColor] = useState("");
    const [softner, setSoftner] = useState(false);
    const [agent, setAgent] = useState(false);
    const [heater, setHeater] = useState(false);
    const [detergent, setDetergent] = useState(false);
    const [order, setOrder] = useState(false);
    const [note, setNote] = useState("");

    return (
        <washieContext.Provider value = {{
            userName,
            setUserName,
            password,
            setPassword,
            email,
            setEmail,
            temperature,
            setTemperature,
            color,
            setColor,
            setOrder,
            setAgent,
            setHeater,
            setDetergent,
            setSoftner,
            note,
            setNote
        }}>
            { children }
        </washieContext.Provider>
    )
}

export default washieContext;