import { useState } from "react";

function Addtodo({onnewitem}){
  const [newitem,setnewitem]=useState();
  const [newdate,setnewdate]=useState();
  const handelnewitem=(event)=>{
                setnewitem(event.target.value);
  }
  const handelnewdate=(event)=>{
     setnewdate(event.target.value);
  }
  const handeladdbutton=()=>{
    onnewitem(newitem,newdate);
    setnewdate("");
    setnewitem("");
  }
    return(
    <div class="container text-center">
    <div class="row">
      <div class="col-6"><input type="text" placeholder="enter TO-Do here" onChange={handelnewitem} value={newitem}/></div>
      <div class="col-4"><input type="date" onChange={handelnewdate} value={newdate}/></div>
      <div class="col-2"><button type="button" class="btn btn-success" onClick={handeladdbutton}>ADD</button></div>
    </div>
    </div>
    );}
export default Addtodo;
