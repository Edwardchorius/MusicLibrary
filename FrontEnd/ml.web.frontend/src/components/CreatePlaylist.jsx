import React, { Component } from 'react';
import 'bootstrap/scss/bootstrap.scss';
import {
    MDBContainer, MDBRow,
    MDBCol, MDBTable, MDBTableBody
} from "mdbreact";
import { getTableInformation } from '../services/star-wars-service';
import isEqual from 'react-fast-compare';

class FormPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: [],
            newShips: [],
            currentPage: 1,
        };
    }


    setNextPage = () => {
        if (this.state.info.length >= 10) {
            this.setState({
                currentPage: this.state.currentPage + 1,
            });
        }
    }

    setPreviousPage = () => {
        if (this.state.currentPage > 1) {
            this.setState({
                currentPage: this.state.currentPage - 1,
            })
        };
    }

    updatePage = (x) => {
            getTableInformation(x)
                .then((info) => {
                    this.setState({ info: info})
                });
        }

    addToList = (event) => {
        this.setState((prevState) => ({          
            newShips: [...this.state.newShips, prevState.info.splice(prevState.info.indexOf(event), 1)],
        }));
    }

    removeFromList = (event) => {
        this.setState({
            newShips: this.state.newShips.filter(function(el){
                return el !== event;
            })
        });
    }


    render() {
        const { newShips } = this.state;
        console.log(newShips);

        const availablePlaylist = this.state.info.map(x => 
        <tr>
             <td key={x.crew}>
                 {x.name}
             </td>
             <button onClick={() => this.addToList(x)}>
                Add To Playlist
             </button>
        </tr>)

         const personalPlaylist = newShips.map(ship => 
            <ul>
                <li key={ship[0].crew}>
                    {ship[0].name}
                    <br/>
                    {ship[0].starship_class}
                </li>
                <button onClick={() => this.removeFromList(ship)}>
                  Remove From Playlist
                </button>
            </ul>
         )

        return (
            <div className="row">
                <div className="col-md-6">
                    <MDBContainer className="float-left">
                        <MDBRow>
                            <MDBCol md="6">
                                <p className="h5 text-center mb-4">Create Your Playlist</p>
                            </MDBCol>
                        </MDBRow>
                        <div>
                            <MDBTable hover>
                                <MDBTableBody>
                                    {availablePlaylist}
                                    <button onClick={this.setPreviousPage} className="float-left">previous page</button>
                                    <button onClick={this.setNextPage} className="float-right">next page</button>
                                </MDBTableBody>
                            </MDBTable>
                        </div>
                    </MDBContainer>
                </div>
                <div className="col-md-6">
                    <MDBContainer className="float-right">
                        <MDBRow>
                            <MDBCol md="6">
                                <p className="h5 text-center mb-4">My Playlist</p>
                            </MDBCol>
                        </MDBRow>
                        <div>
                            <MDBTable hover>
                                <MDBTableBody>
                                    {personalPlaylist}
                                </MDBTableBody>
                            </MDBTable>
                        </div>
                    </MDBContainer>
                </div>
            </div>
        );
    };

    componentDidMount() {
        const p = this.state.currentPage;
        this.updatePage(p);
    }

    //  shouldComponentUpdate(nextProps, nextState){
    //      return !(isEqual(this.props, nextProps) && isEqual(this.state, nextState));
    //  }

    componentDidUpdate(prevProps, prevState) {
        const current = this.state.currentPage;
        const lastPage = prevProps.page;

        if (current !== lastPage) {
            this.updatePage(current);
        }
        else
        {
            this.updatePage(lastPage);
        }

    }
}

export default FormPage;