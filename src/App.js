import waves from "./waves.svg";
import waves2 from "./waves2.svg";
import './App.css';
import { useState } from 'react';

function App() {

  const [ values, setValues ] = useState({
    name: "",
    lastName: "",
    email: ""
  });

  const [ submit, setSubmit ] = useState(false);
  const [ valid, setValid ] = useState(false);
  const [ err, setErr ] = useState([]);

  const wavesArr = [waves, waves2];

  const handleChange = (e) => {
    switch(e.target.className) {
      case "name":
        setValues({...values, name: e.target.value});
        break;
      case "lastname": 
        setValues({...values, lastName: e.target.value});
        break;
      case "email": 
        setValues({...values, email: e.target.value});
        break;
      default :
        break;
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    if(values.name && values.lastName && values.email) {
      setValid(true);
      setSubmit(true);
      setValues({name: "", lastName: "", email: ""});
      setErr([]);
    } else {
      setValid(false); 
      handleErr(e);
    }
  }

  const handleErr = (e) => {
    let newErr = [];
    for(let i = 0; i < 3; i++) {
      if(!e.target[i].value) {
        newErr = [...newErr, e.target[i].className];
      }
    } 
    setErr(newErr);
  }

  return (
    <>
      <div className='container'>
        <form className="reg-form" onSubmit={handleSubmit}>
          <input className='name' type='name' placeholder='your name' autoFocus autoComplete='first-name' 
          value={values.name} onChange={handleChange}/>
          <input className='lastname' type='name' placeholder='your lastname' autoComplete='last-name' 
          value={values.lastName} onChange={handleChange}/>
          <input className='email' type='email' placeholder='your email' autoComplete='email'
          value={values.email} onChange={handleChange}/>
          <input className='submit' type='submit' value={"register"}/>
        </form> 
      </div>
      {submit && valid ? <div className="submit-msg">You have registered successfuly!</div> : null}
      <ol className="error-list">
        {
          err.map((err, key) => (
            <li key={key}>You have to enter your {err}</li>
          ))
        }
      </ol>
      <img src={waves2} alt='waves of footer' />
    </>
  );
}

export default App;
