import { createContext, useRef, useState } from 'react';
import { storage } from '../firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const washieContext = createContext();

export function WashieProvider ({ children }) {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [temperature, setTemperature] = useState("");
    const [color, setColor] = useState("");
    const [softner, setSoftner] = useState(false);
    const [agent, setAgent] = useState(false);
    const [heater, setHeater] = useState(false);
    const [detergent, setDetergent] = useState(false);
    const [order, setOrder] = useState(false);
    const [note, setNote] = useState("");
    const [user, setUser] = useState("");
    const [showDp, setShowDp] = useState(false);
    const [data, setData] = useState({});
    const [displayProgress, setDisplayProgress] = useState('')

    const handleSubmit = () => {
        // Create a child reference
        const imageRef = ref(storage, `images/${data.name}`);
    
        const uploadTask = uploadBytesResumable(imageRef, data);
    
        uploadTask.on('state_changed', 
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            setDisplayProgress(`${progress}%`);
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
                break;
            }
          }, 
          (error) => {
            console.log(error.message)
          }, 
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log('File available at', downloadURL);
            });
          }
        );
      }
    
      const hiddenFileInput = useRef(null);
      
      const handleClick = () => {
        hiddenFileInput.current.click();
      }

    return (
        <washieContext.Provider value = {{
            userName,
            setUserName,
            password,
            setPassword,
            email,
            setEmail,
            phoneNo,
            setPhoneNo,
            temperature,
            setTemperature,
            color,
            setColor,
            setOrder,
            agent,
            setAgent,
            heater,
            setHeater,
            detergent,
            setDetergent,
            softner,
            setSoftner,
            note,
            setNote,
            user,
            setUser,
            showDp,
            setShowDp,
            handleClick,
            handleSubmit,
            hiddenFileInput,
            data,
            setData,
            order,
            displayProgress
        }}>
            { children }
        </washieContext.Provider>
    )
}

export default washieContext;