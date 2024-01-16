import {Component} from 'react';
import UserClass from './UserClass';
import UserClass2 from './UserClass2';

class AboutUs extends Component{
    constructor(props){
        super(props);
        console.log(" parent constructor");
    }
    componentDidMount(){
        console.log(" parent Compponent Did Mount"); 
    }
    componentDidUpdate(){
        console.log("parent Compponent Did Update");
    }

    componentWillUnmount(){
        console.log("parent Compponent will unmount");
    }
    render(){
        console.log(" parent render");
        return (<div>
            <h1>About US</h1>
            {/* <User name={"Himanshu "}/> */}
            <UserClass name={"First"}/>
            <UserClass2 name={"Second"}/>
            <UserClass name={"Third"}/>
            </div>)
    }
  
} 
export default AboutUs;

//  parent constructor
//  parent render
// First child constructor
// First child render
// Second child constructor
// Second child render
// Third child constructor
// Third child render
// First Child Compponent Did Mount
// Second Child Compponent Did Mount
// Third Child Compponent Did Mount
//  parent Compponent Did Mount