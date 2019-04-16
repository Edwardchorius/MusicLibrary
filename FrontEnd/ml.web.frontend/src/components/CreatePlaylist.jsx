import React, { Fragment, Component } from 'react';
import 'bootstrap/scss/bootstrap.scss';
import { MDBContainer, MDBRow,
     MDBCol, MDBTable, MDBTableBody } from "mdbreact";
import { getTableInformation } from '../services/star-wars-service';
import AddedToPlaylist from './AddedToPlaylist';

 class FormPage extends Component{
            constructor(props){
                super(props);

                this.state = {
                    info: [],
                    newShips: []
                };
                this.addToList = this.addToList.bind(this);
            }          
            
         render() { 
            return (
                <Fragment>
                <MDBContainer className="float-left">
                    <MDBRow>
                        <MDBCol md="6">
                                <p className="h5 text-center mb-4">Create Your Playlist</p>
                        </MDBCol>
                    </MDBRow>
                    <div>
                        <MDBTable hover>
                            <MDBTableBody>
                                {this.state.info.map(x => {
                            return <Fragment>
                                        <tr>
                                            <td>
                                                {x.name}
                                            </td>
                                            <button key={x.name} onClick={() => this.addToList(x.name)}>
                                                Add To Playlist
                                            </button>
                                        </tr>
                                    </Fragment>
                                })}
                            </MDBTableBody>                               
                        </MDBTable>                      
                    </div>
                </MDBContainer>               
                </Fragment>
            );
        };

        componentDidMount() {
            getTableInformation()
            .then((info) => {
                this.setState({info : info})
            });
        }

        addToList(event) {
            this.setState((prevState) => ({
                newShips: [...this.state.newShips, prevState.info.splice(prevState.info.indexOf(event), 1)],      
            }));
        }
    }

export default FormPage;