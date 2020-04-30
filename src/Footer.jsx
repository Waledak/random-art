import React,  { useState } from 'react';
import './footer.css';
import axios from 'axios';
import Swal from 'sweetalert2'

export const Footer = () =>{
  const [mail, setMail] = useState('');
  const [result, setResult] = useState(null);

  const sendEmail = event => {
    event.preventDefault();
    axios
     .post('/send', {"email": mail})
     .then(response => {
       setResult(response.data);
       setMail(mail);
       Swal.fire({
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1000
      })
     })
     .catch(() => {
       setResult({ success: false});
       Swal.fire({
        icon: 'success',
        title: 'Thanks for you\'r subscribe!',
        showConfirmButton: false,
        timer: 1000
      })
   });
  }

  const onInputChange = event => {
    setMail(event.target.value);
  };

  return(
    <footer className="footer">
      <div className="container-img-footer">
        <img src="./Met-Museum-Logo.svg" className="logo-svg" alt=""/>
      </div>
      <form onSubmit={sendEmail} className="form">
        <div>
          <p>IFTTT:</p>
          <label htmlFor="mail">
            <input onChange={onInputChange} placeholder="ex: abc@gmail.com" type="mail" value={mail} name="mail" required/>
          </label>
        </div>
        <div>
          <button type="submit">Subscribe</button>
        </div>
      </form>
    </footer>
  )
}