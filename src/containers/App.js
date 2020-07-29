import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
// import Hello from "../components/Hello"




// const App = () => {
//     return (
//         <div className= "tc">
//             <h1 className="f1">RoboFriends</h1>
//             <SearchBox/>
//             <CardList robots={robots} />
//         </div>
//     );
// }

class App extends Component {
    constructor(){
        super();
        this.state = {
            // Having a state >> SMART COMPONENT
            robots: [],
            searchfield: ""
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => this.setState({robots: users}))
    }

    onSearchChange = (event) => { 
        this.setState({searchfield: event.target.value })
    }

    render() {
        const { searchfield, robots } = this.state; // Destructering
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (!robots.length){
            return <h1>Loading...</h1>
        }else{
            return (
                <div className= "tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange= {this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filterRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }    
    }
}

export default App;