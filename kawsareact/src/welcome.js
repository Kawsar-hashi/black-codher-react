import React from 'react';


const Welcome = (props) => {
    console.log(props);
    return <h1>Welcome {props.firstname}+ "" {props.lastname}</h1>
}
}
