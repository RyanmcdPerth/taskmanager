import React, { Component } from 'react';

class Action extends Component {
    constructor(props) {
        super(props);

        this.handlePick = this.handlePick.bind(this);
       // this.hasOptions = this.hasOptions.bind(this);

       this.state = {
        options: props.options
        
      }

    }

        handlePick() {
               const randomNumber = Math.floor(Math.random() * this.state.options.length);
              const option = this.state.options[randomNumber];
               alert(option);
        }
          
        render(){
        return (
            <div>
                <button
                onClick={this.state.handlePick}
                // disabled = {!this.state.hasOptions}
                >What should I do</button>
            </div>
        )};       
}
export default Action;

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
