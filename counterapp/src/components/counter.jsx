import React, { Component } from 'react';
class Counter extends Component {
    // state = { 
    //     value: this.props.counter.value
    // }

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // renderTags(){
    //     if(this.state.tags.length === 0) return "There are no Tags";

    //     return <ul>{ this.state.tags.map(tag => <li key={tag}>{tag}</li>) }</ul>
    // }

    // handleIncrement = (product) => {
    //     //WE cannot change the state directly becasue it won't effect the DOM instead we do this
    //     //this.state.value++; //NO absolutely prohibited because react don't know the state has been changed 
    //     console.log(product);
    //     this.setState({value: this.props.counter.value + 1});
    // }
    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">
                    Increment
                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes+= this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}
 
export default Counter;