function Todoitem1(){
    let todoname="BUY MILK";
    let tododate="4/02/2006";
    return(
        <div class="container text-center">
        {/* /* <div class="row">
          <div class="col-6"><input type="text" placeholder="enter TO-Do here"/></div>
          <div class="col-4"><input type="date" /></div>
          <div class="col-2"><button type="button" class="btn btn-success">ADD</button></div>
        </div> */ }
        <div class="row">
          <div class="col-6">{todoname}</div>
          <div class="col-4">{tododate}</div>
          <div class="col-2"><button type="button" class="btn btn-danger">DELETE</button></div>
        </div>
        </div>
    );
}

export default Todoitem1;