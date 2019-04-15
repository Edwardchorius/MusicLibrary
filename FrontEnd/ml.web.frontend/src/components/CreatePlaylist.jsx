import React, { Fragment, Component } from 'react';
import 'bootstrap/scss/bootstrap.scss';
import { MDBContainer, MDBRow,
     MDBCol, MDBTable, MDBTableBody } from "mdbreact";
import { getTableInformation } from '../services/star-wars-service';


 class FormPage extends Component{
            constructor(props){
                super(props);

                this.state = {
                    info: [],
                    newShips: [],
                    isToggleOn : false
                };
                this.addToList = this.addToList.bind(this);
            }          

         render() {          
            return (
                <MDBContainer className="float-left">
                    <MDBRow>
                        <MDBCol md="6">
                            <form>
                                <p className="h5 text-center mb-4">Create Your Playlist</p>
                            </form>
                        </MDBCol>
                    </MDBRow>
                    <div>
                        <MDBTable hover>
                            <MDBTableBody>
                                {this.state.info.map(function(x) {
                            return <Fragment>
                                        <tr>
                                            <td>
                                                {x.name}
                                            </td>
                                            <button className="primary">
                                                Add To Playlist
                                            </button>
                                        </tr>
                                    </Fragment>
                                })}
                            </MDBTableBody>
                        </MDBTable>
                    </div>
                </MDBContainer>
            );
        };

        componentDidMount() {
            getTableInformation()
            .then((info) => {
                this.setState({info : info})
            });
        }

        addToList(event) {
            this.setState({
                info: info.splice(info.indexOf(event.target.value.name), 1)
            });
        }
    }

export default FormPage;