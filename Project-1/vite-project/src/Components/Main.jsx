import React from "react";

function Main(props) {
    return (
        <div className={props.darkMode ? 'lightBackground' : 'background'}>
            <h1>Fun Facts About React</h1>
            <ul className='list-points'>
            <li>Was first released in 2013.</li>
            <li>Was originally created by Jordan Walke.</li>
            <li>Has well over 100k stars on GitHub.</li>
            <li>Maintained by Facebook.</li>
            <li>Powers thousands of enterprises apps, including mobile apps.</li>
            </ul>
        </div>
    )
}

export default Main;