import {useRouteError} from 'react-router-dom'

const ErrorPage = () =>{
    const err = useRouteError();
    console.log(err)
    return (<div className='errorContainer'>
        <h1>OOPS!!!!!</h1>
        <h2>Something Went Wrong</h2>
        <h3>Status : {err.status} | {err.data}</h3>
        </div>)
}

export default ErrorPage;