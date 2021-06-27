import React, { Component } from 'react';

class Counter extends Component {

        constructor(props) {
          super(props);
      
          this.addCount = this.addCount.bind(this);
          this.minusCount = this.minusCount.bind(this);
          this.resetCount = this.resetCount.bind(this);
          this.state = {
            count: props.count
          };
        }
      
      componentDidMount() {
        const json = localStorage.getItem('count');
        const count = JSON.parse(json);
        if(count) {
          this.setState(() => ({count}));
          }
      if(count === 0)
      {
        this.setState(() => ({count}));
      }
      if(isNaN(count))
      {
      console.log("Not a number");
      
      }
      else if (!isNaN(count))
      {
        console.log("Is a number");
      }
      
      }
      
      componentDidUpdate() {
          const json = JSON.stringify(this.state.count);
          localStorage.setItem('count', json);
          
      }
      
        addCount() {
      
          this.setState((prevState) => ({count: prevState.count+1}));
      
          // this.setState((prevState) => {
          //   return {
          //     count: prevState.count + 1
          //   };
          }  
      
        minusCount() {
      this.setState((prevState) => ({count: prevState.count - 1}));
      
          // this.setState((prevState) => {
          //   return {
          //     count: prevState.count - 1
          //   };
          // });
        }
        resetCount() {
      
          this.setState((prevState) => ({count: 0}));
      
          // this.setState((prevState) => {
          //   return {
          //     count: 0
          //   };
          // });
        }
      
        render() {
          return (
            <div>
              <h1>Count: {this.state.count}</h1>
              <button onClick={this.addCount}>+1</button>
              <button onClick={this.minusCount}>-1</button>
              <button onClick={this.resetCount}>Reset</button>
            </div>
          );
        }
      }
      
      Counter.defaultProps = {
        count:0
        
        };
    

export default Counter; 