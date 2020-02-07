import React from 'react';
import Card from "./Card";

// ALTERNATIVE
// Create robots list
// const cardComponent = robots.map((user, i) => {
//     return (<Card 
//     key={i}
//     id={robots[i].id}
//     name={robots[i].name}
//     email={robots[i].email}
//     />
//     )


const CardList = ({robots}) =>  {
    return (
        <div>
            {
            robots.map((user, i) => {
                 return (
                    <Card
                    key={i}
                    id={robots[i].id}
                    name={robots[i].name} 
                    email={robots[i].email}
                     />
                 );
            })
        }
        </div>
    );
}


export default CardList;