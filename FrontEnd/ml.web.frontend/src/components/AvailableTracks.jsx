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
            tracks: []
        };

        this.getTrackInfo = this.getTrackInfo.bind(this);
    }


    render() {
        console.log(this.state.tracks);
        const { tracks } = this.state;

        return(
            <div>
            <MDBTable hover>
                       <MDBTableHead>
                           <tr>
                               <th>Name</th>
                               <th>Duration</th>
                               <th>Performer</th>
                               <th>Cost</th>
                           </tr>
                       </MDBTableHead>
                       <MDBTableBody>
                           {tracks.map(x => {
                               return <tr key={x.Id}>
                                   <td>{x.Name}</td>
                                   <td>{x.Duration}</td>
                                   <td>{x.Performer}</td>
                                   <td>{x.Cost}</td>
                               </tr>
                           })}
                       </MDBTableBody>
                   </MDBTable> 
            </div>
        );
    }

     async getTrackInfo() {
        return await axios.get('http://localhost:60231/api/values')
        .then(res => res.data);
    };


    async componentDidMount() {
        const data = await this.getTrackInfo();
        console.log(data);

        this.setState({tracks: data});
    }
}

export default AvailableTracks;