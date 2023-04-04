
const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div class="mb-3">
                <label for="text" class="form-label">
                    Name
                </label>
                <input 
                onChange={props.handleChange} type="text" 
                class="form-control custom-input" 
                id="name" 
                value={props.contactInformation.name}/>
                </div>

            <div class="mb-3">
                <label 
                for="email" 
                className="form-label">
                    Email address</label>
                <input 
                type="email" 
                className="form-control custom-input" id="email" 
                aria-describedby="emailHelp"  
                onChange={props.handleChange} 
                value={props.contactInformation.email}
                />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div class="mb-3">
                <label htmlfor="phone" class="form-label">
                    Phone</label>
                <input 
                type="string" 
                class="form-control custom-input" id="phone"  
                onChange={props.handleChange} 
                value={props.contactInformation.phone}/>
            </div>
            <div class="mb-3">
                <label for="message">Message</label>
                <textarea 
                className="form-control custom-input" placeholder="Leave a message here" id="message"  
                onChange={props.handleChange} 
                value={props.contactInformation.message}></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={props.disabledSubmit}>Submit</button>
        </form>
    );
};

export default Form;