import React from 'react'
class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.name+" child constructor");
        this.state={
            count:0,
            count2:2,
            info:{}
        }
        this.timer=null;
    }
    async componentDidMount(){
        console.log(this.props.name+" Child Compponent Did Mount"); 
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const jsonData = await data.json();
        this.setState({
            infp:jsonData
        })
    }
    componentDidUpdate(){
        console.log(this.props.name+"Child Compponent Did Update");
    }
componentWillUnmount(){
    console.log(this.props.name+"Child Compponent will unmount");
}

    render(){
        console.log(this.props.name+" child render")
       
        return(
            <div className="userCard">
                <div>Count : {this.state.count}</div>
                <div>Count2 : {this.state.count2}</div>
                <div>Name:{this.props.name}</div>
                <div>Location: Daltonganj</div>
                <div>Designation: SSE - PAYTM</div>
                <button onClick={()=>this.setState({count:this.state.count+1,count2:this.state.count2+2})}>Increase</button>
            </div>
        ) 
    }
} 

export default UserClass