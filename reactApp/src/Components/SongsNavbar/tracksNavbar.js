import React, { Component } from "react";
import { Link } from "react-router-dom";
import './tracksNavbar.less';

export default class TracksNavbarTop extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.directBack = this.directBack.bind(this);
    }
    directBack() {
        document.location.href = '/login';
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-light navbar-expand-sm transparent">
                    <a className="navbar-brand" href="#">CoPlay</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                <button className="btn btn-outline-danger my-2 mr-sm-2 my-sm-0" id="sign-out" onClick={() => this.directBack()}>Return</button>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}