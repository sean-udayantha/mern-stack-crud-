import React,{Component} from 'react'
import axios from 'axios';
 
export default class AllGuideDetails extends Component{
 
constructor(props){
  super(props);
  this.state={
    guide:[]
  };
}
 
componentDidMount(){
  this.retrieveGuide();
}
 
retrieveGuide(){
  axios.get("http://localhost:8070/guide").then(res =>{
    if(res.data.success){
      this.setState({
        guide:res.data.existingGuide
      });
    console.log(this.state.guide);
    }
  });
}
 
onDelete=(id)=>{
  axios.delete(`http://localhost:8070/guide/delete/${id}`).then((res)=>{
    alert("Guide Details Delete SuccessFully");
    this.retrieveGuide();
  })
}
 
filterData(guide,searchkey){
  const result = guide.filter((guide) =>
 guide.firstName.toLowerCase().includes(searchkey)||
 guide.lastName.toLowerCase().includes(searchkey)
  )
  this.setState({guide:result})
}
 
handleSearchArea=(e)=>{
  const searchkey = e.currentTarget.value;
 
  axios.get("http://localhost:8070/guide").then(res =>{
    if(res.data.success){
      this.filterData(res.data.existingGuide,searchkey)
    }
  });
}


 
render(){
  return(

    <div>
    <div className="container">
        <br/>
<div>
  
  <div class="input-group" >
<div class="form-outline"></div>

<input 
id="search-input" 
type="search" 
id="form1" 
class="form-control" 
placeholder="Search Guide"
onChange={this.handleSearchArea}  />
</div>
 
<button id="search-button" type="button" class="btn btn-secondary">
<i class="fas fa-search"></i>
</button>
 
</div>
</div>
<br/>
 
<button type="button" class="btn btn-secondary"><a href="/guide/register" style={{textDecoration:'none' ,color:'white'}} >Add New Guide</a></button>
 
 <br/><br/>
  
       
      <table class="table table-bordered border-primary">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Guide Name</th>
      <th scope="col">Age</th>
      <th scope="col">Phone</th>
      <th scope="col">Gender</th>
      <th scope="col">Licence</th>
      <th scope="col">Education</th>
      <th scope="col">Languages</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {this.state.guide.map((guide,index)=>(
      <tr key={index}>
      <th scope="row">{index+1}</th>
      <td>{guide.firstName} &nbsp; {guide.lastName}</td>
      <td>{guide.age}</td>
      <td>{guide.phone}</td>
      <td>{guide.gender}</td>
      <td>{guide.licence}</td>
      <td>{guide.education}</td>
      <td>{guide.languages}</td>
      <td>
       <a type="button" class="btn btn-success" href={`/guide/edit/${guide._id}`}>
         Edit
        </a>
        <a type="button" class="btn btn-success" onClick={()=>this.onDelete(guide._id)} >
        Delete
        </a>
      </td>
    </tr>
    ))}
    
  </tbody>
</table>
 
 <br/><br/><br/>
    </div>
  )
}
 
}