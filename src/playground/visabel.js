

const app = document.getElementById("app");

 let toggleText = true;



const toggleOn = () => {
toggleText = !toggleText
renderFunction()
};



const renderFunction = () => {
    let one =
<div>
    <h1>Visabilty Button</h1>
      <button onClick={toggleOn}>{toggleText ? 'Show' : 'Hide'}</button>
       <p>{toggleText ? '' : 'Shows some big secret message hehe I am so happy my react toggle button actually worked hahaha'}</p>
</div>
ReactDOM.render(one, app);
};

renderFunction();