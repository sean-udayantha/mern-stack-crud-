import React, {Component} from 'react';
import axios from "axios";
 
export default class MyGuideProfile extends Component {
 
  constructor(props){
    super(props);
    this.state={
      guide:{}
    };
  }
 
  componentDidMount(){
    const id = this.props.match.params.id;
    axios.get(`http://localhost:8070/guide/${id}`).then((res)=>{
      if (res.data.success){
         this.setState({
      guide:res.data.guide
    });
      }
    });
  }

  onDelete=(id)=>{
    axios.delete(`http://localhost:8070/guide/delete/${id}`).then((res)=>{
      alert("Guide Details Delete SuccessFully");
     
    })
  }
   

render(){
    const id = this.props.match.params.id;
 
const {firstName,lastName,age,phone,gender,licence,education,languages} = this.state.guide;
 
  return(
    <div className="container" style={{marginTop:'20px'}}>
      <h4>{firstName} &nbsp; {lastName}</h4>
      <hr/>      
      
    <dl className="row">
             <dt className="col-sm-3">Age</dt>
             <dd className="col-sm-9">{age}</dd>
 
             <dt className="col-sm-3">Contact Number</dt>
             <dd className="col-sm-9">{phone}</dd>
 
             <dt className="col-sm-3">Gender</dt>
             <dd className="col-sm-9">{gender}</dd>
 
             <dt className="col-sm-3">Licence</dt>
             <dd className="col-sm-9">{licence}</dd>
 
             <dt className="col-sm-3">Education Qulification</dt>
             <dd className="col-sm-9">{education}</dd>
 
             <dt className="col-sm-3">Languages</dt>
             <dd className="col-sm-9">{languages}</dd>

 
             
    </dl>   
    <button type="submit" class="btn btn-primary" ><a href={`/guide/edit/${id}`} style={{textDecoration:'none' ,color:'white'}} >Update</a></button>
    &nbsp;&nbsp;&nbsp;
        <button type="submit" class="btn btn-primary" onClick={()=>this.onDelete(id)}>Delete</button>
 
    </div>
 
  )
}
}