
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React,{Component} from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

class Resume extends Component{
  state={
    n1:"",mail:"",mobile:"",linkedin:"",objective:"",college1:"",coursename1:"",cgpa1:"",yop1:"",college2:"",coursename2:"",cgpa2:"",yop2:"",college3:"",coursename3:"",cgpa3:"",yop3:"",programming:"",aof:"",c1:"",c2:"",c3:"",c4:"", pt1:"",pd1:"",pt2:"",pd2:"",pt3:"",pd3:"",co1:"",co2:"",name1:"",fname:"",dob:"",ms:"",na:"",lang:""

  }

handleChange=({target:{value,name}})=> this.setState({[name]: value})
createanddownloadpdf=()=>{
  axios.post('/createpdf',this.state)                           
  .then(()=>axios.get('downloadpdf',{responseType:'blob'}))
  .then((res)=>{
    const pdfBlob= new Blob([res.data],{type:'application/pdf'})
    saveAs(pdfBlob,'myresume.pdf')

  })
}
render(){
return(

<center>
      <div style={{margin:'5vh'}}>
         <h1 style={{color:'grey'}}>Generate Your Resume</h1>
  
        
       <Form >
       <h3>Details</h3>
        <br/>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name </Form.Label>
        <br/>
        <Form.Control type="text" placeholder="Enter Name"  name="n1" style={{width:'30vw',height:'3vh',borderRadius:'5px',border:'1px solid black'}} 
         onChange={this.handleChange}
         /> 
      </Form.Group>
    <br/>
    <br/>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <br/>
        <Form.Control type="email" placeholder="Enter Email"  name="mail" style={{width:'30vw',height:'3vh',borderRadius:'5px',border:'1px solid black'}} 
                  onChange={this.handleChange}
        />
      </Form.Group>
      <br/>
    <br/>
    
      <Form.Group className="mb-3" controlId="number">
        <Form.Label>Mobile</Form.Label>
        <br/>
        <Form.Control type="text" placeholder="Enter Mobile Number"  name="mobile" style={{width:'30vw',height:'3vh',borderRadius:'5px',border:'1px solid black'}}   
                  onChange={this.handleChange}
        />
      </Form.Group>
      <br/>
    <br/>

    <Form.Group className="mb-3" controlId="Linkedin">
        <Form.Label>LinkedIn</Form.Label>
        <br/>
        <Form.Control type="link" placeholder="LinkedIn Profile" name="linkedin" style={{width:'30vw',height:'3vh',borderRadius:'5px',border:'1px solid black'}}  
          
                 onChange={this.handleChange}
                 />
      </Form.Group>
      <br/>
    <br/>
    <Form.Group className="mb-3" controlId="Linkedin">
        <Form.Label>Career Objective</Form.Label>
        <br/>
        <Form.Control type="text" placeholder="Enter Objective"  name="objective"style={{width:'30vw',height:'10vh',borderRadius:'5px',border:'1px solid black'}} 
                 onChange={this.handleChange}
        />
      </Form.Group>
     
      <br/>
      <br/>
      <br/>
       <h3> Education Details</h3>
       <br/>
       <h4>Graduation</h4>
       <br/>
      <Form.Group className="mb-3" controlId="college name">
        <Form.Label>College </Form.Label>
        <br/>
        <Form.Control type="text" placeholder="Enter College Name" name="college1" style={{width:'30vw',height:'3vh',borderRadius:'5px',border:'1px solid black'}}
                  onChange={this.handleChange}
         /> 
      </Form.Group>
    <br/>
    <br/>
    <Form.Group className="mb-3" controlId="course">
        <Form.Label>Course </Form.Label>
        <br/>
        <Form.Control type="text" placeholder="Enter Course Name" name="coursename1" style={{width:'30vw',height:'3vh',borderRadius:'5px',border:'1px solid black'}}
              onChange={this.handleChange}
         /> 
      </Form.Group>
    <br/>
    <br/>
    <Form.Group className="mb-3" controlId="college name">
        <Form.Label>CGPA/Percentage </Form.Label>
        <br/>
        <Form.Control type="text" placeholder="Enter CGPA"  name="cgpa1" style={{width:'30vw',height:'3vh',borderRadius:'5px',border:'1px solid black'}} 
                 onChange={this.handleChange}
        /> 
      </Form.Group>
    <br/>
    <br/>
    <Form.Group className="mb-3" controlId="yop">
        <Form.Label>Year of passing </Form.Label>
        <br/>
        <Form.Control type="date" placeholder="Choose year " name="yop1" style={{width:'30vw',height:'3vh',borderRadius:'5px',border:'1px solid black'}} 
                 onChange={this.handleChange}
        /> 
      </Form.Group>
    <br/>
    <br/>
       <h4>Intermediate</h4>
       <br/>
    <Form.Group className="mb-3" controlId="college name">
        <Form.Label>College </Form.Label>
        <br/>
        <Form.Control type="text" placeholder="Enter College Name" name="college2" style={{width:'30vw',height:'3vh',borderRadius:'5px',border:'1px solid black'}} 
                 onChange={this.handleChange}
        /> 
      </Form.Group>
    <br/>
    <br/>
    <Form.Group className="mb-3" controlId="course">
        <Form.Label>Course </Form.Label>
        <br/>
        <Form.Control type="text" placeholder="Enter Course Name" name="coursename2" style={{width:'30vw',height:'3vh',borderRadius:'5px',border:'1px solid black'}}
                 onChange={this.handleChange}
         /> 
      </Form.Group>
    <br/>
    <br/>
    <Form.Group className="mb-3" controlId="college name">
        <Form.Label>CGPA/Percentage </Form.Label>
        <br/>
        <Form.Control type="text" placeholder="Enter CGPA"  name="cgpa2" style={{width:'30vw',height:'3vh',borderRadius:'5px',border:'1px solid black'}} 
                 onChange={this.handleChange}
        /> 
      </Form.Group>
    <br/>
    <br/>
    <Form.Group className="mb-3" controlId="yop">
        <Form.Label>Year of passing </Form.Label>
        <br/>
        <Form.Control type="date" placeholder="Choose year " name="yop2" style={{width:'30vw',height:'3vh',borderRadius:'5px',border:'1px solid black'}} 
                 onChange={this.handleChange}
        /> 
      </Form.Group>
    <br/>
    <br/>
    <h4>High School</h4>
    <br/>

    <Form.Group className="mb-3" controlId="college name">
        <Form.Label>College </Form.Label>
        <br/>
        <Form.Control type="text" placeholder="Enter College Name" name="college3" style={{width:'30vw',height:'3vh',borderRadius:'5px',border:'1px solid black'}}
                 onChange={this.handleChange}
         /> 
      </Form.Group>
    <br/>
    <br/>
    <Form.Group className="mb-3" controlId="course">
        <Form.Label>Course </Form.Label>
        <br/>
        <Form.Control type="text" placeholder="Enter Course Name"  name="coursename3" style={{width:'30vw',height:'3vh',borderRadius:'5px',border:'1px solid black'}}
                 onChange={this.handleChange}
         /> 
      </Form.Group>
    <br/>
    <br/>
    <Form.Group className="mb-3" controlId="college name">
        <Form.Label>CGPA/Percentage </Form.Label>
        <br/>
        <Form.Control type="text" placeholder="Enter CGPA" name="cgpa3" style={{width:'30vw',height:'3vh',borderRadius:'5px',border:'1px solid black'}} 
                 onChange={this.handleChange}
        /> 
      </Form.Group>
    <br/>
    <br/>
    <Form.Group className="mb-3" controlId="yop">
        <Form.Label>Year of passing </Form.Label>
        <br/>
        <Form.Control type="date" placeholder="Choose year " name="yop3" style={{width:'30vw',height:'3vh',borderRadius:'5px',border:'1px solid black'}} 
                 onChange={this.handleChange}
        /> 
      </Form.Group>
    <br/>
    <br/>

         <h3>Technical Skills</h3>
         <br/>
    <Form.Group className="mb-3" controlId="programming">
        <Form.Label>Programming Languages</Form.Label>
        <br/>
        <Form.Control type="text"  name="programming"style={{width:'30vw',height:'3vh',borderRadius:'5px',border:'1px solid black'}} 
                 onChange={this.handleChange}
        /> 
      </Form.Group>
    <br/>
    <br/>
    <Form.Group className="mb-3" controlId="aof">
        <Form.Label>Areas of Interest</Form.Label>
        <br/>
        <Form.Control type="text" name="aof"style={{width:'30vw',height:'3vh',borderRadius:'5px',border:'1px solid black'}}
                 onChange={this.handleChange}
        />
      </Form.Group>
    <br/>
    <br/>

          <h3>Certifications</h3>
          <br/>
    <Form.Group className="mb-3" controlId="name">
        <Form.Label>Certificate Name </Form.Label>
        <br/>
        <Form.Control type="text" placeholder="Enter Certificate Name" name="c1" style={{width:'30vw',height:'3vh',borderRadius:'5px',border:'1px solid black'}} 
                 onChange={this.handleChange}
        /> 
      </Form.Group>
    <br/>
    <br/>

    <Form.Group className="mb-3" controlId="name">
        <Form.Label>Certificate Name </Form.Label>
        <br/>
        <Form.Control type="text" placeholder="Enter Certificate Name" name="c2" style={{width:'30vw',height:'3vh',borderRadius:'5px',border:'1px solid black'}}  
                 onChange={this.handleChange}
        /> 
      </Form.Group>
    <br/>
    <br/>

    <Form.Group className="mb-3" controlId="name">
        <Form.Label>Certificate Name </Form.Label>
        <br/>
        <Form.Control type="text" placeholder="Enter Certificate Name" name="c3"  style={{width:'30vw',height:'3vh',borderRadius:'5px',border:'1px solid black'}} 
                 onChange={this.handleChange}
         /> 
      </Form.Group>
    <br/>
    <br/>

    <Form.Group className="mb-3" controlId="name">
        <Form.Label>Certificate Name </Form.Label>
        <br/>
        <Form.Control type="text" placeholder="Enter Certificate Name" name="c4" style={{width:'30vw',height:'3vh',borderRadius:'5px',border:'1px solid black'}} 
                 onChange={this.handleChange}
        /> 
      </Form.Group>
    <br/>
    <br/>
       <h3>Projects</h3><br/>
  
    <Form.Group className="mb-3" controlId="name">
        <Form.Label>Title 1 </Form.Label>
        <br/>
        <Form.Control type="text" placeholder="Enter Title"  name="pt1" style={{width:'30vw',height:'3vh',borderRadius:'5px',border:'1px solid black'}} 
            onChange={this.handleChange}
        /> 
      </Form.Group>
    <br/>
    <br/>
    <Form.Group className="mb-3" controlId="name">
        <Form.Label>Description 1</Form.Label>
        <br/>
        <Form.Control type="text" placeholder="Enter Description" name="pd1" style={{width:'30vw',height:'8vh',borderRadius:'5px',border:'1px solid black'}}
                onChange={this.handleChange}
        /> 
      </Form.Group>
    <br/>
    <br/>
            

    <Form.Group className="mb-3" controlId="name">
        <Form.Label>Title 2</Form.Label>
        <br/>
        <Form.Control type="text" placeholder="Enter Title" name="pt2" style={{width:'30vw',height:'3vh',borderRadius:'5px',border:'1px solid black'}} 
                 onChange={this.handleChange}
        /> 
      </Form.Group>
    <br/>
    <br/>
    <Form.Group className="mb-3" controlId="name">
        <Form.Label>Description 2</Form.Label>
        <br/>
        <Form.Control type="text" placeholder="Enter Description" name="pd2" style={{width:'30vw',height:'8vh',borderRadius:'5px',border:'1px solid black'}} 
                 onChange={this.handleChange}
        /> 
      </Form.Group>
    <br/>
    <br/>

    

    <Form.Group className="mb-3" controlId="name">
        <Form.Label>Title 3</Form.Label>
        <br/>
        <Form.Control type="text" placeholder="Enter Title" name="pt3" style={{width:'30vw',height:'3vh',borderRadius:'5px',border:'1px solid black'}} 
                 onChange={this.handleChange}
        /> 
      </Form.Group>
    <br/>
    <br/>
    <Form.Group className="mb-3" controlId="name">
        <Form.Label>Description 3</Form.Label>
        <br/>
        <Form.Control type="text" placeholder="Enter Description" name="pd3"  style={{width:'30vw',height:'8vh',borderRadius:'5px',border:'1px solid black'}} 
                 onChange={this.handleChange}
        /> 
      </Form.Group>
    <br/>
    <br/>
     <h3>Co-Curricular Activities</h3>

    <Form.Group className="mb-3" controlId="programming">
        <Form.Label></Form.Label>
        <br/>
        <Form.Control type="text" placeholder="Enter Co-curricular activities" name="co1"style={{width:'30vw',height:'3vh',borderRadius:'5px',border:'1px solid black'}} 
                 onChange={this.handleChange}
        /> 
      </Form.Group>
    <br/>
    <br/>


    <Form.Group className="mb-3" controlId="programming">
        <Form.Label></Form.Label>
        <br/>
        <Form.Control type="text" placeholder="Enter Co-curricular activities" name="co2" style={{width:'30vw',height:'3vh',borderRadius:'5px',border:'1px solid black'}} 
                 onChange={this.handleChange}
        /> 
      </Form.Group>
    <br/>
    <br/>

     <h3>Personal Details</h3>

    <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name </Form.Label>
        <br/>
        <Form.Control type="text" placeholder="Enter Name" name="name1" style={{width:'30vw',height:'3vh',borderRadius:'5px',border:'1px solid black'}} 
                 onChange={this.handleChange}
        /> 
      </Form.Group>
    <br/>
    <br/>
      <Form.Group className="mb-3" >
        <Form.Label>Father's Name</Form.Label>
        <br/>
        <Form.Control type="text" placeholder="Enter Father's Name" name="fname " style={{width:'30vw',height:'3vh',borderRadius:'5px',border:'1px solid black'}}  
                 onChange={this.handleChange}
        />
      </Form.Group>
      <br/>
    <br/>
    
      <Form.Group className="mb-3" >
        <Form.Label>Date Of Birth</Form.Label>
        <br/>
        <Form.Control type="date" placeholder="DOB"  name="dob" style={{width:'30vw',height:'3vh',borderRadius:'5px',border:'1px solid black'}} 
               onChange={this.handleChange}
        />
      </Form.Group>
      <br/>
    <br/>

    <Form.Group className="mb-3" >
        
    <Form.Label>Marital Status</Form.Label>
        <br/>
        <Form.Control type="text" name="ma" style={{width:'30vw',height:'3vh',borderRadius:'5px',border:'1px solid black'}}
        onChange={this.handleChange}
         />
      </Form.Group>
      <br/>
    <br/>

      
    <Form.Group className="mb-3" >
        <Form.Label>Nationality</Form.Label>
        <br/>
        <Form.Control type="text" name="na" style={{width:'30vw',height:'3vh',borderRadius:'5px',border:'1px solid black'}}
        onChange={this.handleChange}
         />
      </Form.Group>
      <br/>
    <br/>
    <Form.Group className="mb-3" >
        <Form.Label>Languages Known</Form.Label>
        <br/>
        <Form.Control type="text"  name="lang" style={{width:'30vw',height:'3vh',borderRadius:'5px',border:'1px solid black'}}
        onChange={this.handleChange}
        />
      </Form.Group> 
      <br/>
    <br/>
    <Button onClick={this.createanddownloadpdf} >Submit</Button>


    
  
    </Form>
    </div>
    </center> 
    


)
}
}
export default Resume;



