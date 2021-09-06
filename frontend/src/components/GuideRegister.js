import React,{useState} from "react"
import {useHistory} from 'react-router-dom';
import axios from "axios";
 
const GuideRegister = ()=>{
 
     let history = useHistory();
 
    const [guide,addGuide] = useState({
            firstName:"",
            lastName:"",
            age:"",
            phone:"",
            gender:"" ,
            licence:"",
            education:"",
            languages:""
    });
 const {firstName,lastName,age,phone,gender,licence,education,languages}=guide;
 const onInputChange = e=>{
     addGuide({...guide,[e.target.name]: e.target.value});
 };
 
 const onSubmit=async e =>{
     e.preventDefault();
     await axios.post ("http://localhost:8070/guide/add",guide);
     history.push("/guide");
     alert(" Successfully added Guide")
 }
 
    return(
 
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
            <h2 className ="text- mb-10">Add New Guide</h2>
            <hr/>   <br></br>
    <form onSubmit={e=>onSubmit(e)}>
  
  
  
    <br/>
 
<div class="row">
  <div class="col">
    <input 
        type="text" 
        class="form-control" 
        placeholder="Enter First Name" 
        name="firstName"
        value={firstName}
        onChange={e=>onInputChange(e)}
        required/>
  </div>
  <div class="col">
    <input 
        type="text" 
        class="form-control" 
        placeholder="Enter Last Name" 
        name="lastName"
        value={lastName}
        onChange={e=>onInputChange(e)}
        required/>
  </div>
</div>
  
  <br/>
<div class="form-floating mb-3">
  <input 
         type="text" 
         class="form-control" 
         id="floatingInput" 
         placeholder="Guide Age"
         name="age"
         value={age}
         onChange={e=>onInputChange(e)}
         required
         maxLength="2"/>
  <label 
         for="floatingInput">Guide Age</label>
  </div>
 
  <div class="form-floating mb-3">
  <input 
         type="text" 
         class="form-control" 
         id="floatingInput" 
         placeholder="Enter Phone Number"
         name="phone"
         value={phone}
         onChange={e=>onInputChange(e)}
         required
         maxLength="10"
         minLength="10"/>
  <label 
         for="floatingInput">Phone Number</label>
  </div>

  
  <div className="form-check">
  <p>Gender</p>
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={gender==="Male"}
  value="Male" name="gender"
  onChange={e=>onInputChange(e)}/>
  <label className="form-check-label" for="flexRadioDefault1">
    Male
  </label> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
 
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked={gender==="Female"}
  value="Female" name="gender"
  onChange={e=>onInputChange(e)}/>
  <label class="form-check-label" for="flexRadioDefault2">
    Female
  </label>
</div>
<br/>
 


<div className="form-check">
  <p>Do you have a Guide Licence</p>
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={licence==="Yes"}
  value="Yes" name="licence"
  onChange={e=>onInputChange(e)}/>
  <label className="form-check-label" for="flexRadioDefault1">
    Yes
  </label> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
 
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"checked={licence==="No"}
  value="No"  name="licence"
  onChange={e=>onInputChange(e)}/>
  <label class="form-check-label" for="flexRadioDefault2">
    No
  </label>
</div>
<br/>
 
<div className="form-check">
  <p>Education Qulification</p>
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={education==="O/L"}
  value="O/L"  name="education"
  onChange={e=>onInputChange(e)}/>
  <label className="form-check-label" for="flexRadioDefault1">
    O/L
  </label> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
 
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"checked={education==="A/L"}
  value="A/L"  name="education"
  onChange={e=>onInputChange(e)}/>
  <label class="form-check-label" for="flexRadioDefault2">
    A/L
  </label> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
 
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={education==="Higher Education"}
  value="Higher Education"  name="education"
  onChange={e=>onInputChange(e)}/>
  <label className="form-check-label" for="flexRadioDefault1">
    Higher Education
  </label>
 
  </div>
  <br/>

  <div className="form-check">
  <p>Languages that you can .?</p>
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
  <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" checked={languages==="Sinhala"}
  value="Sinhala"  name="languages" 
  onChange={e=>onInputChange(e)}/>
  <label className="form-check-label" for="flexRadioDefault1">
    Sinhala
  </label> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
 
  <input class="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2"checked={languages==="English"}
  value="English"    name="languages"
  onChange={e=>onInputChange(e)}/>
  <label class="form-check-label" for="flexRadioDefault2">
    English
  </label>
</div>
 
<div className="form-check" >
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
  <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" checked={languages==="Tamil"}
  value="Tamil"   name="languages"
  onChange={e=>onInputChange(e)}/>
  <label className="form-check-label" for="flexRadioDefault1">
    Tamil
  </label> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
 
  <input class="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2"checked={languages==="Japaneese"}
  value="Japaneese"   name="languages"
  onChange={e=>onInputChange(e)}/>
  <label class="form-check-label" for="flexRadioDefault2">
    Japaneese
  </label>
</div>
 
<div className="form-check">
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
  <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" checked={languages==="Chineese"}
  value="Chineese"  name="languages"
  onChange={e=>onInputChange(e)}/>
  <label className="form-check-label" for="flexRadioDefault1">
    Chineese
  </label> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
 
  <input class="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2"checked={languages==="Hindi"}
  value="No"
  onChange={e=>onInputChange(e)}/>
  <label class="form-check-label" for="flexRadioDefault2">
    Hindi
  </label>
</div>
 
<br/>



 
<button type="submit" class="btn btn-primary">Add Guide</button>
 
</form>
</div>
</div>
    );
};
 
export default GuideRegister;