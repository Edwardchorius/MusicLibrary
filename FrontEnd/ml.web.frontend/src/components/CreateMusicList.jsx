import React, {Component} from 'react';
import 'bootstrap/scss/bootstrap.scss';
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableBody } from "mdbreact";
import axios from 'axios';
import qs from "qs";
import '../index.css';

class CreateMusicList extends Component{
    constructor(props) {
        super(props);

        this.state = {
            tracks: [],
            playlist: [],
            currentPage: 1,
            doesExist: false,
            visible: true
         }

        this.getTrackInfo = this.getTrackInfo.bind(this);
        this.setNextPage = this.setNextPage.bind(this);
        this.setPreviousPage = this.setPreviousPage.bind(this);
        this.removeFromList = this.removeFromList.bind(this);
        this.addToList = this.addToList.bind(this);
        this.createMusicList = this.createMusicList.bind(this);
     }


     render() {
        const { tracks, playlist, visible } = this.state;
        

        const availableTracks = tracks.map(tr => 
            <tr>
                 <td key={tr.Id}>
                     {tr.Name}
                 </td>
                 <td>
                     {tr.Cost}
                 </td>
                 <button onClick={() => this.addToList(tr)}>
                    Add To Your Playlist
                 </button>
            </tr>)

         const personalMusicList = playlist.map(tr => 
                <ul>
                 <li key={tr.Id}>

                     {tr.Name}
                     <br/>
                     {tr.Performer}
                 </li>
                  <button onClick={() => this.removeFromList(tr)}>
                 Remove From Playlist
                </button>
             </ul>
         )   

         return(    
            <div className="row">
                <div className="col-md-6">
                    <MDBContainer className="float-left">
                        <MDBRow>
                            <MDBCol md="6">
                                <p className="h5 text-center mb-4">Create Your Musiclist</p>
                            </MDBCol>
                        </MDBRow>
                        <div>
                            <MDBTable hover>
                                <MDBTableBody>
                                    {availableTracks}
                                    <button onClick={this.setPreviousPage} className="float-left">previous page</button>
                                    <button onClick={this.setNextPage} className="float-right">next page</button>
                                </MDBTableBody>
                            </MDBTable>
                        </div>
                    </MDBContainer>
                </div>
                <div className={["col-md-6", visible ? null : 'fadeOut'].join(' ')}>
                    <MDBContainer className="float-right">
                        <MDBRow>
                            <MDBCol md="6">
                                <p className="h5 text-center mb-4">My Playlist</p>
                            </MDBCol>
                        </MDBRow>
                        <div>
                            <MDBTable hover>
                                <MDBTableBody>
                                    {personalMusicList}
                                </MDBTableBody>
                            </MDBTable>
                        </div>
                    </MDBContainer>
                    {playlist.length ? <button onClick={this.createMusicList}>Create Musiclist</button> : null}
                </div>
            </div>
         );
     }


     createMusicList() {
         const { playlist } = this.state;

         console.log(playlist);

        axios({
            url: 'http://localhost:60231/api/values',
            method: 'post',
            data: qs.stringify({Tracks: playlist}),
            })       
        .then(function (response){
            console.log(response.data)
        })
        .catch(function (error){
            console.log(error);
        });

        this.setState({visible:false, playlist: []})
     }


     removeFromList(track) {
        this.setState({
            playlist: this.state.playlist.filter(function(el){
                return el !== track;
            })
        });
    }


     addToList(track) {
         const { playlist } = this.state;
         
         if(playlist.find(x => x.Name == track.Name))
         {
            this.setState({doesExist: true})
         }

         else{
             this.setState((prevState) => ({          
                 playlist: [...this.state.playlist, prevState.tracks[prevState.tracks.indexOf(track)]],
                 doesExist: false,
                 visible: true
                }))
            };
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
export default CreateMusicList;