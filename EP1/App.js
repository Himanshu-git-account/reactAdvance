import React from 'react'
import  ReactDOM  from 'react-dom/client';

const heading = React.createElement("h1",{id:"heading"},"This is React createElement");

console.log(heading)

//JSX is not HTML inside JS , but its a HTML like syntax
// jsxHeading  =>(Babel) =>React.createElement(object) => HTMLElement(browser understand)


const Title = () =>{
    return <div >
        This is Title
    </div>
}

// If the APi is passing any malicious code then the jSX automatically sanituze it before rendering. This prevents XSS-attacks
const dataFromAPi = 1000;


//Component Composition - Rendering one component inside another

// All the three inside it are same
const HeadingComponent = () => (
    <div >
        {dataFromAPi} 
        <Title />
        <Title></Title>
        {Title()}
        <h1>This is headoingh</h1>
    </div>
)

const jsxHeading = <h1>This is React JSX</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(HeadingComponent()); // You can also call the function as at the end of the day all functional component is JS function

//Exercise Assignmensts
// const HeaderComponent = () =>{
//     return(
//         <div className='header-container'>
//             <div className='logo'>
//                 <img alt="logo" width={"20px"} height={"20px"} src='https://i.pinimg.com/originals/82/c6/5b/82c65b9bb0a75026fc4c82a438b4cc9b.jpg' />
//             </div>
//             <div className='search'>
//                 <input type='text'></input>
//                 <button type="button" onClick={()=> console.log("clicked")}>Search </button>
//             </div>
//             <div className='userIcon'>
//                 <img alt="user-icon" width={"20px"} height={"20px"} src='https://cdn-icons-png.flaticon.com/512/666/666201.png'/>
//             </div>
//         </div>
//     )
// }

root.render(<HeadingComponent />)