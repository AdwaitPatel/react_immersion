import { useState } from "react";

const RegistrationForm = () => {
    // const [formData, setFormData] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setEmail(email);
    setPassword(password);
    
  };

  return (
    <div style={{marginTop: "200px"}}>
      <form onSubmit={submit}>
        <input 
        name="email" 
        placeholder="Enter you email"
        onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input 
        name="password" 
        placeholder="Enter you password" 
        onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button>
            Submit
        </button>
      </form>

      <h1>{email}</h1>
      <h1>{password}</h1>
    </div>
  );
};

export default RegistrationForm;
