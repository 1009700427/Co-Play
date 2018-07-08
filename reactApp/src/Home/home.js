import React, {Component} from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import './home.less';

export class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasName: false,
            playlistName: "",
            email: "",
            fireRedirect: false
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
    }
    handleNext()
    {
        if(!this.state.playlistName)
        {
            $('#documentModal').modal('show');
        }
        else
        {
            $('#input').val('');
            this.setState({
                hasName: true
            });
        }
    }
    handleCreate()
    {
        if(this.validateEmail(this.state.email))
        {
            // this.setState({
            //     fireRedirect: true
            // });
            document.location.href = '/login';
        }
    }
    onSubmit(e)
    {
        e.preventDefault();
        this.props.enterPlaylist(this.state.playlistName);
    }
    closeModal()
    {
        $('#documentModal').modal('hide');
    }
    componentWillMount()
    {
        $('#documentModal').modal('hide');
    }
    // validates email
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    // handles sign in
    signIn() {
        document.location.href = '/login';
    }

    render(){
        return (
            <div>
                <div id="form-parent">
                    <form id="form-child" onSubmit={(e) => this.onSubmit(e)}>
                        <div className="form-group">
                            <label id="form-message">Share your Playlist with QR Code!</label>
                        </div>
                        <div id="sign-in">
                            <button type="submit" className="btn btn-lg btn-outline-light my-2 my-sm-0" onClick={()=>this.signIn()}>Login with Spotify</button>
                        </div>
                    </form>
                </div>
                {
                    this.state.fireRedirect && <Redirect to={{pathname: '/playlist'}}/>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        state
    }
}

function mapDispatchToProps(dispatch){
    return {
        enterPlaylist: (_playlistName) => {
            const action = { type: "ENTER_PLAYLIST", playlistName: _playlistName };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
