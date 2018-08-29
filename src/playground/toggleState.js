

class Toggle extends React.Component{
 constructor(props){
  super(props);
    this.show = this.show.bind(this);
    this.state = {text:false};
    
 }

  show(){
   
        this.setState((prev)=>{
          return {text:!prev.text}
        });
    }
  

render(){
  return (
    <div>
    <h1>ToggleApp</h1>
    <button onClick={this.show}>{this.state.text ? "Hide":"Show"}</button>
    <p>{this.state.text ? "Hello World":""}</p>
    </div>
  );
 }
 





}


ReactDOM.render(<Toggle/>,document.getElementById("app"))