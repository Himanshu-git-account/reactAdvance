import React from 'react'
class UserClass2 extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.name+" child constructor");
        this.state={
            count:0,
            count2:2,
            info:{
                name:"DUMMY",
                company:"DUMMY",
                location:"INDIA"
            },
          
        }
       
    }
    async componentDidMount(){
        console.log(this.props.name+" Child Compponent Did Mount");
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const jsonData = await data.json();
        
        this.setState({
            info:jsonData
        })

        this.timer = setInterval(()=>{
            console.log("set Timer called") //this will be called everytime even if your componentd is unmounted, therefore we need to remove it
        },1000);

    }
    componentDidUpdate(){
        console.log(this.props.name+"Child Compponent Did Update");
    }
    componentWillUnmount(){
        console.log(this.props.name+"Child Compponent will unmount");
        clearInterval(this.timer)
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

export default UserClass2