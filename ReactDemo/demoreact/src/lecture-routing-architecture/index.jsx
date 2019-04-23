import React, {Fragment, Component} from 'react';

class List extends Component{
    state = {
        shoppingProducts: [
            {id: 'some-id-for-apple', value: 'apple'},
            {id: 'tomato-id', value: 'tomato'},
            {id: 'asdadsa', value: 'cucumber'},
        ]
    }

    render() {
        const {shoppingProducts} = this.state;

        return (
            <ul>
                {
                    shoppingProducts.map(product => (
                        <li key={product.id}>
                                {product.value}
                        </li>
                    ))
                 } 
            </ul>
        );
    }


    componentDidMount() {
        this.setState(({shoppingProducts}) => ({
            shoppingProducts: [...shoppingProducts, {
                id: 'another-one', value: 'dj khaled'
            }]
        }));
    }
}


<div>
    <ul>
        <li>
            <a href="/home">Home</a>
        </li>
    </ul>
</div>

//The Virtual DOM representation of the above piece of code is this

React.createElement('div', {}, [
    React.createElement('ul', {}, [
        React.createElement('li', {}, [
            React.createElement('a', {href: '/home'}, [
                'Home'
            ])
        ])
    ])
])

// The first parameter is the element type(it can be a custom one, like a component, as well), the second is for the attributes
// (as seen, only the last 'a' element has an attribute 'href') and the 3rd parameter is the child