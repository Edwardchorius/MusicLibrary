import React, { Component } from 'react';
import 'bootstrap/scss/bootstrap.scss';
import axios from 'axios';
import { withSyles } from '@material-ui/core/styles';
import { MDBContainer, MDBTable, MDBTableBody,
    MDBTableHead } from 'mdbreact';


const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });


class AvailableTracks extends Component{
    constructor(props){
        super(props);

        this.state = {
            tracks: [],
            currentPage: 1,
        };

        this.getTrackInfo = this.getTrackInfo.bind(this);
        this.setNextPage = this.setNextPage.bind(this);
        this.setPreviousPage = this.setPreviousPage.bind(this);
    }


    render() {
        console.log(this.state.tracks);
        const { tracks } = this.state;

        return(
            <div>
                <MDBContainer>
            <MDBTable hover className="float-center">
                       <MDBTableHead>
                           <tr>
                               <th>Name</th>
                               <th>Duration</th>
                               <th>Performer</th>
                               <th>Cost</th>
                               <th>Performer</th>
                           </tr>
                       </MDBTableHead>
                       <MDBTableBody>
                           {tracks.map(x => {
                               return <tr key={x.Id}>
                                   <td>{x.Name}</td>
                                   <td>{x.Duration}</td>
                                   <td>{x.Performer}</td>
                                   <td>${x.Cost}</td>
                                   <td>{x.Performer}</td>
                               </tr>
                           })}
                       </MDBTableBody>
                   </MDBTable> 
                   <button  onClick={this.setPreviousPage} className="float-left">previous page</button>
                   <button  onClick={this.setNextPage} className="float-right">next page</button>
                   </MDBContainer>
            </div>
        );
    }

    getTrackInfo(page) {

        return axios.get(`http://localhost:60231/api/values?page=${page}`)
        .then(res => res.data)
        .then(data => this.setState({tracks : data}));
    };


    setPreviousPage() {
        const {currentPage} = this.state;
        if (currentPage === 1){
            return this.setState({currentPage: 3})
        }

        return this.setState({currentPage: this.state.currentPage - 1})
    }


    setNextPage() {
        const {currentPage} = this.state;
        if (currentPage === 3){
            return this.setState({currentPage: 1})
        }

        return this.setState({currentPage: this.state.currentPage + 1})
    }


     async componentDidMount() {
        const page = this.state.currentPage;

        const data = await this.getTrackInfo(page);
        console.log(data);
    }

    componentDidUpdate(prevProps, prevState){
        const current = this.state.currentPage;
        const lastPage = prevState.currentPage;
        
        if (current !== lastPage) {
            this.getTrackInfo(current);           
        }
    }

}

export default AvailableTracks;