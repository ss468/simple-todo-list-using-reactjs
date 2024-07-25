import Todoitems from "./Todoitems"
const Totaltodo= ({Todolists,ondelbutton}) =>{
    return(
        
       <>{Todolists.map((items)=>(<Todoitems ondelbutton={ondelbutton} tododate={items.tododate} todoname={items.todoname}  ></Todoitems>))}</> 

        
                                                  
        
        
    );
    
}
export default Totaltodo;