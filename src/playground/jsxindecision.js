const app = document.getElementById("app");

let titles = {
    title:"Indecsion App",
   subtitle:"Put your life in the hands of a random choice",
    options:[]
};

const onSubmit = (event) => {
   event.preventDefault();
    let option = event.target.elements.option.value;
       if(option){titles.options.push(option);
       event.target.elements.option.value="";
       renderFunction();
      };
};


const removeOption = () => {
        titles.options = [];
        renderFunction();
};

const makeDecision = () => {
   let randomNumber = Math.floor(Math.random() * titles.options.length);
   let randomOption = titles.options[randomNumber];
   alert(randomOption);
}

const renderFunction = () =>{
let template =     
<div>
    <h1>{titles.title}</h1>
    {(titles.subtitle && titles.subtitle) &&  <p> {titles.subtitle} </p>}
      <p>{titles.options.length > 0 ? "some options":"no options"} </p>
      <p>{titles.options.length}</p>

       
   <ol>
    {
    titles.options.map((option) => {
        return <li key={option}>{option} </li>;
    })
    }
    </ol>

    <form onSubmit={onSubmit}>
        <input type="text" name="option" />
        <button>Add Options</button>
        <button onClick={removeOption}>Remove All Options</button>
        <button disabled={titles.options.length === 0} onClick={makeDecision}>Random Option</button>
    </form>
</div>

  
 
 
ReactDOM.render(template, app);

}


renderFunction();

//create app object titles and subtitle 
//use title and subtile in template 
//render template


//create a remove all button above list onclick hander removes whipe options / app goes to zero, rerender. 