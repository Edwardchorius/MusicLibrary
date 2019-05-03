import React, { Component } from 'react';
import 'bootstrap/scss/bootstrap.scss';
import axios from 'axios';
import { MDBContainer, MDBTable, MDBTableBody,
    MDBTableHead } from 'mdbreact';
import "../index.css";
import "../player.scss";
import song from './song.ogg';

class AvailableTracks extends Component{
    constructor(props){
        super(props);

        this.state = {
            tracks: [],
            currentPage: 1,
            audio: new Audio(song)
        };

        this.getTrackInfo = this.getTrackInfo.bind(this);
        this.setNextPage = this.setNextPage.bind(this);
        this.setPreviousPage = this.setPreviousPage.bind(this);
    }


    render() {
        
        const { tracks, audio } = this.state;



        return(                              
            <div>
                <link href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet"></link>
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
                   <br/>                   
                   </MDBContainer>
                   <div className="audio-player">
                              <button className="play"><i className="ion-play" onClick={this.playTrack}></i></button> 
                            
                              <div className="seek-bar">
                                <div className="fill"></div>
                                <div className="handle"></div>
                              </div>
                           </div>                              
            </div>
        );

        
        
    }
      
    
    playTrack = () => {
        
        const {audio} = this.state;          
        
        if(audio.paused)
        {
            var playPromise = audio.play();
        }
        else
        {
            var playPromise = audio.pause();
        }
        

        if(playPromise !== undefined){
        playPromise.then(function() {
            console.log("Playing");
        }).catch(function (error) {
            console.log(error);
        });
      }
    }


    updateTrack = () => {
        const { audio } = this.state;

        
    }
    

    getTrackInfo(page) {
        require('dotenv').config();

        return axios.get(`http://localhost${process.env.REACT_APP_REQUEST_TO_API_VALUES}?page=${page}`)
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
        const { audio } = this.state;

        let seekBar = document.querySelector('.seek-bar');
        let fillBar = seekBar.querySelector('.fill');
        let playButton = document.querySelector('button.play');
        let playButtonIcon = playButton.querySelector('i');

        audio.addEventListener('play', function() {
            playButtonIcon.className = 'ion-pause';
        });
        

        audio.addEventListener('pause', function() {
            playButtonIcon.className = 'ion-play';
        });
        

        audio.addEventListener('timeupdate', function() {
             
            let p = audio.currentTime / audio.duration;
    
            fillBar.style.width = p * 100 + '%';
        });


        let mouseDown = false;

        function clamp(min, val, max) {
            return Math.min(Math.max(min,val), max);
        }

        function getP (e) {
            let p = (e.clientX - seekBar.offsetLeft) / seekBar.clientWidth;
            p = clamp(0, p, 1);

            return p;
        }

        seekBar.addEventListener('mousedown', function(e) {
            mouseDown = true;

            let p = getP(e);

            fillBar.style.width = p * 100 + '%';
        });
        
        if (current !== lastPage) {
            this.getTrackInfo(current);           
        }


        window.addEventListener('mousemove', function (e) {
            if (!mouseDown) return;

            let p = getP(e);

            fillBar.style.width = p * 100 + '%';
        });


        window.addEventListener('mouseup', function (e) {
            if(!mouseDown)
            {
                return;
            }
            else
            {
                mouseDown = false;
                let p = getP(e);

                fillBar.style.width = p * 100 + '%';
                audio.currentTime = p * audio.duration;
            }
        });
    }

}

export default AvailableTracks;