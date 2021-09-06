import React,{Component} from 'react'
import axios from 'axios';
import { Row } from 'react-bootstrap';
import img1 from '../images/img1.jpg'
import Rating from './Rating';

 
export default class GuideUser extends Component{
 
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
    this.retrievePosts();
  })
}
 
filterData(guide,searchkey){
  const result = guide.filter((guide) =>
 guide.firstName.toLowerCase().includes(searchkey)||
 guide.lastName.toLowerCase().includes(searchkey)||
 guide.age.toLowerCase().includes(searchkey)
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

<br/>
 
<button type="button" class="btn btn-secondary"><a href="/guide/register" style={{textDecoration:'none' ,color:'white'}} >Register as a Guide</a></button>
 
 <br/><br/>
  
       
 


 <Row xs={1} md={1} className="g-4" id="by" class="rounded" >
  {this.state.guide.map((guide, idx) => (

<div class="card mb-8" style={{maxWidth: "740px"}}>
  <div class="row g-0">
    <div class="col-md-4"><br/><br/>
      <img src={img1} class="img-fluid rounded-start"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{guide.firstName}  {guide.lastName}</h5>
        <p class="card-text">  {guide.age} </p>
        <p class="card-text"><small class="text-muted"> {guide.phone} </small></p>
       <p>      <Rating
          
          
        ></Rating></p>
        
        <a type="button" class="btn btn-primary" href={`/guide/details/${guide._id}`}>
         View Details
        </a>
        
      </div>
    </div>
  </div>
</div>

))}

</Row>

    
 
 <br/><br/><br/>
    </div>
    </div>
    
  )
}
 
}
