import React from 'react'
import AddOption from './AddOption'
import Action from './Action'
import Header from './Header'
import Options from './Options'
import OptionModal from './modal'

export default class IndecisionApp extends React.Component {
  state = {
    options:[],
    selectedOption: undefined
  };
  
  closeModal = () => {
    this.setState(() => 
      ({selectedOption:undefined})
    );
  }


  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => 
      ({selectedOption:option})
    );
  }
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  }





  
    componentDidMount(){                                           //fetching data
     
     try{
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);                       //parse turns string to usable JS object 
   
       if(options){
      this.setState(()=>({options}));
       }
     } catch(e){
      //do nothing at all
     
     }
    }
     
      
    
    componentDidUpdate(prevProps, prevState){                      //Saving Data
      if(prevState.options.length !== this.state.options.length){
        const json = JSON.stringify(this.state.options);   //converts onject to string to save to data base. 
        localStorage.setItem('options',json );
      }
    
    }
  
  
    
    render() {
      const subtitle = 'Put your life in the hands of a computer';
  
      return (
        <div>
          <Header subtitle={subtitle} />
          <div className='container'>
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className='widget'>
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption
            handleAddOption={this.handleAddOption}
          />
          </div>
          <OptionModal
          selectedOption={this.state.selectedOption}
          closeModal={this.closeModal}
          
          />
          </div>
        </div>
      );
    }
  }
