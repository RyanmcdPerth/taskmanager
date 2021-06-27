import React, { Component } from 'react';

class Options extends Component {

  // Passing down props
  constructor(props) {
    super(props);

    // Binding all the functions

    // this.handleAddOption = this.handleAddOption.bind(this);
    this.deleteAllOptions = this.deleteAllOptions.bind(this);
    // this.handlePick = this.handlePick.bind(this);
    this.deleteOption = this.deleteOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    // Passing down props
    this.state = {
      options: props.options
    };

    // NOT SURE WHAT THIS DOES
    this.state = {
      error: undefined
    };

  }
// BASED ON PREVIOUS IMPLEMTATION

  //    handleAddOption(e) {
  //      e.preventDefault();

  //      const option = e.target.elements.option.value.trim();
  //      const error =  this.props.handleAddOption(option);

  //  this.setState(() => (
  //  { error }));

  //  if (!error)
  //  {
  //  e.target.elements.option.value = '';
  //  }
  //  }

  // When screen is loaded, store the option parse as a JSON object then set state as the const created assigned as the JSON Object
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
      console.log("ComponentDidMount - Am I here?")
    }
    catch (e) {

    }
  }
  // If the previous state's options array length is not equal to current state options.length
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
//When the screen is exited - print message to console
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
// Function to delete all options
  deleteAllOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

// Function to delete individual option
  deleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }))

  }
// Add option handler
  handleAddOption(option) {
    if (!option) {
      return 'Please enter a valid value';
    }
    else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    // Concatenating previous state, (adding another option)
    this.setState((prevState) => ({ options: prevState.options.concat(option) }));

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }
  // Render method for options. 
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
        <p>Add option logic insert here</p>

        {/* THIS IS THE PROBLEM AREA */}

        {/* <Optionss
          options={this.state.options}
          deleteAllOptions={this.deleteAllOptions}
          deleteOption={this.deleteOption}
        /> */}




        {/* <Options
          handleAddOption = {this.handleAddOption} /> */}
        {/* <Counter count = {2} /> */}
      </div>
    );
  }

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

}

Options.defaultProps = {
  options: []
}
// const Option = (props) => {
//   return (

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

// const Optionss = (props) => {
//   return (
//     <div>
//       <button onClick={props.deleteAllOptions}>Remove All</button>
//       {this.props.options.length === 0 && <p>Please add an option</p>}
//       {
//         props.options.map((option) => (
//           <div>
//             {props.optionText} <button onClick={(e) => {
//               this.props.deleteOption(props.optionText);
//             }}>
//               Remove
//             </button>
//             <Options
//               key={option}
//               optionText={option}
//               deleteOption={props.deleteOption}
//             />
//           </div>
//         ))
//       }
//     </div>
//   );
// }
// const Action = (props) => {
//   return (
//     <div>
//       <button
//         onClick={props.handlePick}
//       // disabled = {!props.hasOptions}

//       >What should I do

//       </button>
//     </div>
//   );
// };




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
export default Options;