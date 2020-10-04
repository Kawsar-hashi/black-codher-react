import React from 'react';

import ReactDOM from 'react-dom';

const name ='Kawsar';
function Greeting(user = false) {
    if (user) {
        return <h1>{name}'s Reading List</h1>
    }
    return <h1>Just a Reading List</h1>
}


console.log(Greeting(name));

ReactDOM.render(Greeting(name), document.getElementById('root'));
