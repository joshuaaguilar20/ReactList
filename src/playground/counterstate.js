
class Counter extends React.Component{
 constructor(props){
  super(props)
  this.add = this.add.bind(this);
  this.minus = this.minus.bind(this);
  this.reSet = this.reSet.bind(this);
  this.state = {count:0};

 }


 componentDidMount(){         
    const number = localStorage.getItem('count');
    const parseNumber = parseInt(number,10)
    if(parseInt !== NaN){
        this.setState(()=>({count:parseNumber}));
    }
 }

 componentDidUpdate(prevProp, prevState){        //saving data 
    if(prevState.count !== this.state.count){
        const json = this.state.count;   //converts onject to string to save to data base. 
        localStorage.setItem('count',json );
      }
 }
 

 add(){
  this.setState((prevState)=>{   //setState arguement - can be named anything it is the previous state of the state
   return {
    count: prevState.count + 1
   };
  });
 }
 minus(){
  this.setState((prevState)=>{
    return{
        count: prevState.count -1
    }
  });

 }
 reSet(){
  this.setState(() => {
   return {
       count:0
   }
  });
 }




 render(){
  return (
   <div>
   <h1> Count:{this.state.count}</h1>
    <button onClick={this.add}>+</button>
    <button onClick={this.minus}>-</button>
    <button onClick={this.reSet}>Reset</button>
   </div>
  );
 }
}



ReactDOM.render(<Counter/>,document.getElementById("app"));


//create methods for the add one minus 1 //plus/ reset. 