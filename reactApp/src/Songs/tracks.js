import React, {Component} from 'react';
import { connect } from 'react-redux';
import Spotify from 'spotify-web-api-js';
import TracksNavbarTop from '../Components/SongsNavbar/tracksNavbar';
import './tracks.less';
const spotifyWebApi = new Spotify();

export class Tracks extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.createCard = this.createCard.bind(this);
        this.createCards = this.createCards.bind(this);
        this.createQR = this.createQR.bind(this);
    }
    componentWillMount() {
        spotifyWebApi.setAccessToken(this.props.params.access_token);
        spotifyWebApi.getUserPlaylists()
            .then(data => {
                this.setState({
                    playlist: data
                });
            }, err => {
                console.log(err);
            });
        this.createCards();
    }
    createCard(item) {
        return (
                <div className="card" id="track-card">
                    <div className="card-body">
                        <h5 className="card-title"><a id="card-link" href={item.track.external_urls.spotify}>{item.track.name}</a></h5>
                        <p className="card-text" id="author">{"by " + " " + item.track.artists[0].name}</p>
                    </div>
                </div>
        );
    }
    createCards() {
        spotifyWebApi.getPlaylistTracks(this.props.playlistInfo.owner.id, this.props.playlistInfo.id)
            .then(data => {
                this.setState({
                    trackComponents: data.items.map(item => {
                        return this.createCard(item);
                    })
                });
            }, err => {
                console.log(err);
            })
    }
    createQR() {
        var link = "https://api.qrserver.com/v1/create-qr-code/?data="+this.props.playlistInfo.external_urls.spotify+"&amp;size=100x100";
        return (
            <img className="center-img" src={link} alt="" title="" />
        );
    }
    render() {
        return (
            <div>
                <TracksNavbarTop/>
                {
                    this.createQR()
                }
                <div id="wrapper">
                    {
                        this.state.trackComponents
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        playlistInfo: state.playlistInfo,
        params: state.params
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);