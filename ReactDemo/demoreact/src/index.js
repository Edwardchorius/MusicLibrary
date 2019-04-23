import React, {Fragment, Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { getPeople } from './services/star-wars-service';


class StarWarsPeopleList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people : [],
            isLoading : true
        };
    }

    render() {

        const { people , isLoading} = this.state;

        if(isLoading){
            return <div>Loading...</div>
        }

        return (
            <li>
                {Object.keys(people).map(function(key) {
                    return <div>{key} : {people[key]}</div>
                })}               
            </li>
            // <ul>
            //     {
            //         people.map(person => {                        
            //             return <li>
            //             {person.name}
            //             <br/>
            //             {person.mass}
            //             </li>                       
            //         })
            //     }
            // </ul>
        );
    }

    componentDidMount() {      
        getPeople()
            .then((people) => {
            this.setState({ people, isLoading : false }) //if the key and value are the same we can write only the key not people : people
        });
    }
}


ReactDOM.render(<StarWarsPeopleList/>, document.getElementById('root'));