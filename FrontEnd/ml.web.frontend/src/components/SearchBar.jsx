import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import "./Home";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    render() {
        return (
            <Grid
                container
                justify="center"
            >
             <form>
                 <input
                     type="text"
                        placeholder="Search"
                        value={this.props.filterText}
                        onChange={this.handleFilterTextChange}
                    />
             </form>
            </Grid>
        );
    }
}

export default SearchBar;