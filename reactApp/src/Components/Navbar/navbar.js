import React, { Component } from "react";
import { Link } from "react-router-dom";

import './navbar.less';

export default class NavbarTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: ""
        };
        this.changeRegex = this.changeRegex.bind(this);
    }
    changeRegex(e) {
        // get the text of the search
        this.setState({searchInput: e.target.value});
        // makes a regex for the search text
        const newRegex = new RegExp(e.target.value || 'djkfjskjdfkjasdjkfksdjfaksjdfkjsdfkjsdf', 'g');
        // the search decoration styling is defined here; this turns the matching text light blue
        const styles = {
            search: {
                color: 'rgba(98, 177, 254, 1.0)',
                direction: 'ltr',
                unicodeBidi: 'bidi-override',
            }
        };
        const SearchSpan = (props) => {
            return (
                <span style={styles.search} data-offset-key={props.offsetKey}>
          {props.children}
        </span>
            );
        };
        // define strategy for seaching through the document text to find matches to the regex
        const findWithRegex = function(regex, contentBlock, callback) {
            const element = document.getElementById('root');
            const text = element.innerText || element.textContent;
            let matchArr, start;
            while ((matchArr = regex.exec(text)) !== null) {
                start = matchArr.index;
                callback(start, start + matchArr[0].length);
            }
        }
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
                            <Link to="/">
                                <button className="btn btn-outline-danger my-2 mr-sm-2 my-sm-0" id="sign-out">Return</button>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}