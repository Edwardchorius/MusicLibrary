import React, { Component } from 'react';
import SearchBar from "./SearchBar";
import InfoTable from "./InfoTable";

class Home extends Component{
    constructor(props) {
        super(props);

        this.state = {
            filterText : '',
            page: 1,
        };

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText : filterText
        });
    }


    render() {

        const { page } = this.state;

        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    onFilterTextChange={this.handleFilterTextChange}
                />
                <InfoTable 
                    tableInformation={this.getTableInformation}
                    filterText={this.state.filterText}
                    page={page}
                />
            </div>
        );
    }
}


export default Home;