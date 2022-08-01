import React, {useState} from "react";
function Home(){
    const [search, setSearch] = useState("");

    return(
        <div id="home">
            <h1>Home</h1>
            
            <h2>STEPS TO FOLLOW.</h2>
            <p>1.To get started type your name in the box above to get details and you various accounts that you are going to use in this course.</p>
           <p>NB:type your full name as they appear in your ID card.
                 After searching,you will recieve a card with details on your:
           </p>
           <ul>
            <li>Slack Account</li>
            <li>link to Github for you to create a personal Account</li>
            <li>Link to Canvas login</li>
            <li>link to Students email-in which the default password is abcd123</li>
           </ul>
        </div>
    )
};
export default Home;