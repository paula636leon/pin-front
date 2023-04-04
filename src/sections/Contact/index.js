//import Form from "./components/Form";
import Form from "./components/Form";
import axios from "axios";
import {useState} from 'react';

function Contact(){
    const [contactInformation, setContacInformation] = useState ({name:"", phone:"", message:"", email:""})
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const disabledSubmin = !(contactInformation.name && contactInformation.phone && contactInformation.message && contactInformation.email)

    const handleChange = (event) => {
        if(success) setSuccess(false)
        if(error)setError(false)

        const propertyValue = event.target.value
        const property = event.target.id
        setContacInformation({...contactInformation, [property]: propertyValue})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios({
            method: "POST",
            url: "https://jsonplaceholder.typicode.com/posts",// url de la api
            data: contactInformation,
        }).then(
            response => {
                setSuccess(true)
                console.log(response.data)
                setContacInformation({name:"", phone:"", message:"", email:""})
            }
        ).catch(
            error => {
                setError(true)
                console.log(error)
            }
        )
    }

    return(
        <section id="contact">
            <h2>Contact Us</h2>
            <Form handleChange={handleChange} handleSubmit={handleSubmit} contactInformation={contactInformation} disabledSubmin={disabledSubmin}/>
            { success &&
                <div class="alert alert-success" role="alert">
                Tu mensaje se ha enviado correctamente. 
                </div>
            }
            { error &&
                <div class="alert alert-danger" role="alert">
                Tuvimos un problema para procesar tu solicitud. 
                </div>
        }

        </section>
    )
};

export default Contact;