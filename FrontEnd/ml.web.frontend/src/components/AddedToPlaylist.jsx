import React, { Component} from 'react';
import 'bootstrap/scss/bootstrap.scss';
import { MDBContainer, MDBRow,
    MDBCol, MDBTable, MDBTableBody } from "mdbreact";

class AddedToPlaylist extends Component{
    constructor(props){
        super(props);

        this.state = {
            playlist: []
        };

        
    }

    static getDerivedStateFromProps(nextProps, prevState){
        
        if(nextProps.shipsToAdd !== prevState.playlist){
            return { playlist: [...nextProps.shipsToAdd] };
        }

        return null;
    }
    

    render() {

        const  playlist  = this.state.playlist;

        return(
                <MDBContainer className="float-right">
                    <MDBRow>
                        <MDBCol md="6">
                                <p className="h5 text-center mb-4">Current Items</p>
                        </MDBCol>
                    </MDBRow>
                    <div>
                        <MDBTable hover>
                            <MDBTableBody>
                                {
                                   playlist.forEach(x => (
                                   <tr>
                                       <td>
                                            {x.name}
                                       </td>
                                    </tr>)                              
                                )}
                            </MDBTableBody>
                        </MDBTable>
                    </div>
                </MDBContainer>
        );
    };
}

export default AddedToPlaylist;