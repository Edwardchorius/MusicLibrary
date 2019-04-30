import React, {Component} from 'react';
import 'bootstrap/scss/bootstrap.scss';
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableBody } from "mdbreact";
import axios from 'axios';
import qs from "qs";
import '../index.css';


const camelCase = (myString) => (
    myString.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
);


class CreateMusicList extends Component{
    constructor(props) {
        super(props);

        this.state = {
            tracks: [],
            playlist: [],
            currentPage: 1,
            doesExist: false,
            visible: true,
            musiclistName: '',
            musiclistDescription: '',
            isValid: false,
            postSucceeded: false
         }

        this.getTrackInfo = this.getTrackInfo.bind(this);
        this.setNextPage = this.setNextPage.bind(this);
        this.setPreviousPage = this.setPreviousPage.bind(this);
        this.removeFromList = this.removeFromList.bind(this);
        this.addToList = this.addToList.bind(this);
        this.createMusicList = this.createMusicList.bind(this);
     }


     render() {
        const { tracks, playlist, visible, musiclistName, musiclistDescription, postSucceeded } = this.state;
        

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
                                    <tr>
                                        <th>
                                            Name
                                        </th>
                                        <th>
                                            Cost
                                        </th>
                                    </tr>
                                    {availableTracks}
                                    <button onClick={this.setPreviousPage} className="float-left">previous page</button>
                                    <button onClick={this.setNextPage} className="float-right">next page</button>
                                </MDBTableBody>
                            </MDBTable>
                        </div>
                    </MDBContainer>
                </div>
                {visible ? 
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
                                    {personalMusicList}
                                </MDBTableBody>
                            </MDBTable>
                        </div>
                    </MDBContainer>
                    {playlist.length ? 
                    <div>
                    <button onClick={this.createMusicList}>Create Musiclist</button>
                    <input
                    type="text"
                    name="musiclistName"
                    id="musiclist-name"
                    value={musiclistName}
                    onChange={this.handleInputElementChange}
                    onBlur={this.checkValidity}
                    pattern="[A-Za-z]{5,30}"
                    required={true}
                    />
                    <br/>
                    <textarea
                    rows="5"     
                    cols="50"              
                    name="musiclistDescription"
                    id="musiclist-description"
                    value={musiclistDescription}
                    onChange={this.handleInputElementChange}
                    onBlur={this.checkValidity}
                    pattern="[A-Za-z]{20,100}"
                    required={true}
                    />
                    
                    </div>
                    : null}
                </div> : postSucceeded ?
                
                <div className={["col-md-6", 'fadeOut'].join(' ')}>
                        Playlist created successfully!
                </div>
                : 
                <div className={["col-md-6", 'fadeOut'].join(' ')}>
                        Could not create playlist
                </div>
                 }
            </div>
         );
     }

     handleInputElementChange = (event) => {
         const { value, id } = event.target;
         const parsedId = camelCase(id);

         this.setState({[parsedId]: value})
     }


     checkValidity = (event) => {
        const {target} = event;
        const {isValid} = this.state;

        if(!target.checkValidity()){
            this.setState({isValid: false})
        }
        else{
            this.setState({isValid: true})
        }
    }


     createMusicList() {
        require('dotenv').config();

         const { playlist, isValid, musiclistName, musiclistDescription, postSucceeded } = this.state;

         if(isValid)
         {
        axios({
            url: `http://localhost${process.env.REACT_APP_REQUEST_TO_API_VALUES}`,
            method: 'post',
            data: qs.stringify({Tracks: playlist, Name: musiclistName, Description: musiclistDescription}),
            })       
        .then(function (response){
            console.log(response.data)
            .then(this.setState({postSucceeded: true}))
        })
        .catch(function (error){
            console.log(error);
        });

        this.setState({visible:false, playlist: [], musiclistName: '', musiclistDescription: ''})
        }
        else
        {
            console.error("Invalid Name");
        }
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
        require('dotenv').config();
        const url = `http://localhost${process.env.REACT_APP_REQUEST_TO_API_VALUES}?page=${page}`;

        return axios.get(url)
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