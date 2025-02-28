import './App.css' ;
export function message (props){
    return <h3 className={props.loginStatus === true ? 'success': 'error'}>
        {
            props.loginStatus ===  true ? 
            "You have logged in !!!" :
            "You are not logged in !!!"
        }98/
    </h3>
}