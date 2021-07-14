import React, { Component } from 'react';

class Toggle extends Component {
    constructor(props) {
        super(props);
    
        this.toggleVisibility = this.toggleVisibility.bind(this);
    
        this.state = {
          visibility: false,
          toggleText: "Off",
          subText: "The button is off"
        }
    }
    componentDidMount() {
      const json = localStorage.getItem('toggleText');
      const toggleText = JSON.parse(json);
      if(toggleText) {
        this.setState(() => ({toggleText}));
        }
        const json2 = localStorage.getItem('subText');
        const subText = JSON.parse(json2);
        if(subText) {
          this.setState(() => ({subText}));
          }
      }
    
    componentDidUpdate() {
        const json = JSON.stringify(this.state.toggleText);
        localStorage.setItem('toggleText', json);
        const json2 = JSON.stringify(this.state.subText);
        localStorage.setItem('subText', json2);
    }
    


    
        toggleVisibility() {
            if (this.state.visibility) {
            
            
           //   this.setState((prevState) => ({visibility: false}), ({toggleText: "Off"}), ({subText: "The button is off"}));
       
              this.setState((prevState) => {
                return {
                  visibility: false,
                   toggleText: "Off",
                  subText: "The button is off"
       
                 };
               });
            }
           else {
            //  this.setState((prevState) => ({visibility: true}), ({toggleText: "On"}), ({subText: "The button is on"}));
       
       
               this.setState((prevState) => {
                 return {
                   visibility: true,
                   toggleText: "On",
                   subText: "The button is on"
       
                 };
               });
            }
         }
       render() {
         return (
           <div>
             <button onClick={this.toggleVisibility}>{this.state.toggleText}</button>
             <h1>{this.state.subText}</h1>
           </div>
         );
         }      
       
}

export default Toggle;