import React, {Component} from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getHashParams } from '../helper/functions';
import NavbarTop from '../Components/Navbar/navbar';
import Spotify from 'spotify-web-api-js';
import './playlist.less';

const spotifyWebApi = new Spotify();

export class Playlist extends Component {
    constructor(props){
        super(props);
        this.state = {
            playlist: [],
            fireRedirect: false
        };
        const params = getHashParams(window.location.hash);
        if(params.access_token)
        {
            this.props.receiveHashInfo(params);
            spotifyWebApi.setAccessToken(params.access_token);
            spotifyWebApi.getUserPlaylists()
                .then(data => {
                    this.setState({
                        playlist: data
                    });
                    this.renderPlaylists();
                }, err => {
                    console.log(err);
                })
        }
        this.renderSinglePlaylist = this.renderSinglePlaylist.bind(this);
        this.renderPlaylists = this.renderPlaylists.bind(this);
        this.enterPlaylist = this.enterPlaylist.bind(this);
    }
    enterPlaylist(playlist) {
        this.props.enterSongs(playlist);
        this.setState({
            fireRedirect: true
        });
    }
    renderSinglePlaylist(playlist) {
        return (
            <div className="card" id="playlist-card">
                <div className="card-body">
                    <h5 className="card-title">{playlist.name}</h5>
                    <p className="card-text">{}</p>
                    <button className="btn btn-outline-success btn-sm" onClick={() => this.enterPlaylist(playlist)}>Enter Playlist</button>
                </div>
            </div>
        );
    }
    renderPlaylists() {
        this.setState({
            playlistComponent: this.state.playlist.items.map(document => {
                return this.renderSinglePlaylist(document);
            })
        });
    }
    componentWillMount(){

    }
    render() {
        return (
            <div>
                <NavbarTop/>
                <div id="container">
                    {this.props.playlistName}
                </div>
                <div id="card-container">
                    {
                        this.state.playlistComponent
                    }
                </div>
                {
                    this.state.fireRedirect && <Redirect to={{pathname: '/tracks'}}></Redirect>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        playlistName: state.playlistName
    }
}

function mapDispatchToProps(dispatch){
    return {
        enterSongs: (_playlistInfo) => {
            const action = {
                type: "ENTER_SONGS",
                playlistInfo: _playlistInfo
            };
            dispatch(action);
        },
        receiveHashInfo: (_params) => {
            const action = {
                type: "RECEIVE_HASH",
                params: _params
            };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
