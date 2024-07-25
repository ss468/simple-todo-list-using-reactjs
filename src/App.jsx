import Appname from "./assets/components/Appname";
import Addtodo from "./assets/components/Addto";


import Totaltodo from "./assets/components/Totaltodo";
import { useState } from "react";
import Welcomemessage from "./assets/components/welcomemessage";
function App() {
 let Todolists=[
    
]
      const [todoitems,settodoitems]=useState(Todolists);
      const handelnewitem=(itemname,date)=>{
              //  alert(`Are you sure you want to Add "${itemname}" to TODO list `);
               const newtodoitems=[...Todolists,{
                tododate:date,
                todoname:itemname,
               }];
               settodoitems(newtodoitems);
      }
      const handeldelbutton=(todoitemname)=>{
            //  alert(`Are you sure you want to delete "${todoitemname}" from TODO list `);
             const newtodoitems= Todolists.filter((item)=>item.itemname!==todoitemname)
             settodoitems(newtodoitems);
              

      }
  let lenoftodo=todoitems.length
  return (
      <div>
      <center>
        <Appname/>
        <Addtodo onnewitem={handelnewitem}/>
        {lenoftodo===0 && <Welcomemessage></Welcomemessage>}
        
        <Totaltodo Todolists={todoitems} ondelbutton={handeldelbutton}></Totaltodo>

       

      </center>
      </div>
  );
}

export default App;
