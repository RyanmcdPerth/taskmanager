import './App.css';
import React, { Component } from 'react'; 
import Toggle from './Toggle';
import Counter from './Counter';
import Options from './Options';
import Action from './Action';

class App extends Component {
  // constructor(props){
  //   super(props);
    
  //   this.deleteAllOptions = this.deleteAllOptions.bind(this);
  //   this.handlePick = this.handlePick.bind(this);
  //   this.handleAddOption = this.handleAddOption.bind(this);
  //   this.deleteOption = this.deleteOption.bind(this);

  // this.state = {
  // options: props.options  
  // };
  // }
  
  // componentDidMount() {
  // try {
  // const json = localStorage.getItem('options');
  // const options = JSON.parse(json);
  // if(options) {
  // this.setState(() => ({options}));
  // }
  // }
  // catch (e)
  // {
  
  // }
  // }
  // componentDidUpdate(prevProps, prevState)
  // {
  //   if(prevState.options.length !== this.state.options.length)
  //  {
  //    const json = JSON.stringify(this.state.options);
  //    localStorage.setItem('options', json); 
  //  }
  // }
  
  // componentWillUnmount() {
  // console.log('componentWillUnmount');
  // }
  
  // deleteAllOptions()  {
  //   this.setState(() => { 
  //   return {
  // options: []
  //   };
  //   });
  //   }
  
  //   deleteOption = (optionToRemove)=>{
  //     this.setState((prevState) => ({ 
         
  //         options: prevState.options.filter((option) => optionToRemove !== option)
  //     }))

  //   }
  
  //   handleAddOption(option) {
  // if(!option) {
  // return 'Please enter a valid value';
  // }
  // else if (this.state.options.indexOf(option) > -1)
  // {
  // return 'This option already exists';
  // }
      
  // this.setState((prevState) => ({options: prevState.options.concat(option)}));
  // }
  // // this.setState((prevState) => {
  // // return {
  // // options: prevState.options.concat(option)
  // //     };
  // //     });
  // //   }
  
  //   handlePick() { 
  //     const randomNumber = Math.floor(Math.random() * this.state.options.length);
  //     const option = this.state.options[randomNumber];
  //     alert(option);
  
  //   }
   
    render() {
      
      const title = 'Indecision';
      const subtitle = 'Put your life in the hands of a computer';
  
      return (
        <div>
          {/* <Header title={title} subtitle={subtitle} /> */}
          {/* <Action 
          hasOptions ={this.state.options.length > 0} 
          handlePick ={this.handlePick}
          /> */}
          {/* <Options 
          options={this.state.options}
          deleteAllOptions = {this.deleteAllOptions}
          deleteOption = {this.deleteOption}
          /> */}
          {/* <AddOption 
          handleAddOption = {this.handleAddOption} />*/}
          <Action />
          <Counter count = {2} /> 
          <Options />
          <Toggle />
        </div>
      );
    }
  }

  // App.defaultProps = {
  //   options: []
  // };
  
  // const Header = (props) => {
  //   const title = "Indecision App";
  //   const subTitle = "Place your hands in the hands of a computer";
  
  //   return (
  //     <div>
  //       <h1>{title}</h1>
  //       <h2>{subTitle}</h2>
  //     </div>
  //   );
  // };
  // class Header extends React.Component {
  //   render() {
  
  //     const title = "Indecision App";
  //     const subTitle = "Place your hands in the hands of a computer";
  
  //     return (
  //       <div>
  //         <h1>{title}</h1>
  //         <h2>{subTitle}</h2>
  //       </div>
  //     );
  //   }
  // };
  
  // const Options = (props) => {
  //   return (
  //     <div>
  //         <button onClick={props.deleteAllOptions}>Remove All</button>
  //         {props.options.length === 0 && <p>Please add an option</p>}
  //         {
  //         props.options.map((option) => (
  //           <Option
  //             key={option}
  //             optionText={option}
  //             deleteOption={props.deleteOption}
  //           />
  //         ))
  //       }
  //     </div>
  //   );
  // };
  // class Options extends React.Component {
  //   render() {
  //     return (
  //       <div>
  //         {
  //           this.props.options.map((option) => <p key={option}>{option}</p>)
  //         }
  //         <button onClick={this.props.deleteAllOptions}>Remove All</button>
  
  //       </div>
  //     );
  //   }
  // }
  // const Option = (props) => {
  //   return (
  //     <div>
  //       {props.optionText} <button onClick={(e) => {
  //         props.deleteOption(props.optionText);
  //       }}>
  //       Remove
  //       </button>
  //     </div>
  //   );
  // };
  //  class Option extends React.Component {
  //    render() {
  //      return (
  //        <div>
  //          <p>{this.props.optionText}</p>
  //        </div>
  //      );
  //    }
  //  }
  //  const Action = (props) => {
  //   return (
  //     <div>
  //       <button 
  //       onClick={props.handlePick}
  //       disabled = {!props.hasOptions}
        
  //       >What should I do
        
  //       </button>
  //     </div>
  //   );
  //  };
  // class Action extends React.Component {
  //   pickButton() {
  
  //     alert("Pick Button");
  
  //   }
  //   render() {
  //     return (
  //       <div>
  //         <button 
  //         onClick={this.props.handlePick}
  //         disabled = {!this.props.hasOptions}
          
  //         >What should I do
          
  //         </button>
  //       </div>
  //     );
  //   }
  // }
  // class AddOption extends React.Component {
  // constructor(props) {
  // super(props);
  // this.handleAddOption = this.handleAddOption.bind(this);
  // this.state = {
  //   error: undefined
  // };
  // }
  //   handleAddOption(e) {
  //     e.preventDefault();
  
  //     const option = e.target.elements.option.value.trim();
  //     const error =  this.props.handleAddOption(option);
      
  // this.setState(() => (
  // { error }));
  // if (!error)
  // {
  // e.target.elements.option.value = '';
  // }
  // }
  
  //   render() {
  //     return (
  //       <div>
  //         {this.state.error && <p>{this.state.error}</p>}
  //         <form onSubmit={this.handleAddOption}>
  //           <input type="text" name="option" />
  //           <button>Add Option</button>
  //         </form>
  //         <p>Add option logic insert here</p>
  //       </div>
  //     );
  //   }
  // }
  
  // class Counter extends React.Component {
  //   constructor(props) {
  //     super(props);
  
  //     this.addCount = this.addCount.bind(this);
  //     this.minusCount = this.minusCount.bind(this);
  //     this.resetCount = this.resetCount.bind(this);
  //     this.state = {
  //       count: props.count
  //     };
  //   }
  
  // componentDidMount() {
  //   const json = localStorage.getItem('count');
  //   const count = JSON.parse(json);
  //   if(count) {
  //     this.setState(() => ({count}));
  //     }
  // if(count === 0)
  // {
  //   this.setState(() => ({count}));
  // }
  // if(isNaN(count))
  // {
  // console.log("Not a number");
  
  // }
  // else if (!isNaN(count))
  // {
  //   console.log("Is a number");
  // }
  
  // }
  
  // componentDidUpdate() {
  //     const json = JSON.stringify(this.state.count);
  //     localStorage.setItem('count', json);
      
  // }
  
  //   addCount() {
  
  //     this.setState((prevState) => ({count: prevState.count+1}));
  
  //     // this.setState((prevState) => {
  //     //   return {
  //     //     count: prevState.count + 1
  //     //   };
  //     }  
  
  //   minusCount() {
  // this.setState((prevState) => ({count: prevState.count - 1}));
  
  //     // this.setState((prevState) => {
  //     //   return {
  //     //     count: prevState.count - 1
  //     //   };
  //     // });
  //   }
  //   resetCount() {
  
  //     this.setState((prevState) => ({count: 0}));
  
  //     // this.setState((prevState) => {
  //     //   return {
  //     //     count: 0
  //     //   };
  //     // });
  //   }
  
  //   render() {
  //     return (
  //       <div>
  //         <h1>Count: {this.state.count}</h1>
  //         <button onClick={this.addCount}>+1</button>
  //         <button onClick={this.minusCount}>-1</button>
  //         <button onClick={this.resetCount}>Reset</button>
  //       </div>
  //     );
  //   }
  // }
  
  // Counter.defaultProps = {
  //   count:0
    
  //   };
  
  // //class Toggle extends React.Component {
  //   constructor(props) {
  //     super(props);
  
  //     this.toggleVisibility = this.toggleVisibility.bind(this);
  
  //     this.state = {
  //       visibility: false,
  //       toggleText: "Off",
  //       subText: "The button is off"
  //     }
  //   }
  
  //     toggleVisibility() {
  //      if (this.state.visibility) {
       
       
  //     //   this.setState((prevState) => ({visibility: false}), ({toggleText: "Off"}), ({subText: "The button is off"}));
  
  //        this.setState((prevState) => {
  //          return {
  //            visibility: false,
  //             toggleText: "Off",
  //            subText: "The button is off"
  
  //           };
  //         });
  //      }
  //     else {
  //      //  this.setState((prevState) => ({visibility: true}), ({toggleText: "On"}), ({subText: "The button is on"}));
  
  
  //         this.setState((prevState) => {
  //           return {
  //             visibility: true,
  //             toggleText: "On",
  //             subText: "The button is on"
  
  //           };
  //         });
  //      }
  //   }
  // render() {
  //   return (
  //     <div>
  //       <button onClick={this.toggleVisibility}>{this.state.toggleText}</button>
  //       <h1>{this.state.subText}</h1>
  //     </div>
  //   );
  //   }
  // }
  

export default App;