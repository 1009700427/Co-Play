/**
 * Created by siyuanxu on 2018/6/6.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from "react-router-dom";
import './app.less';
import backgroundImage from "./src/img/login-background.jpg";
import { Provider } from 'react-redux';
import store from './redux';
import Home from './src/Home/home';
import Playlist from './src/Playlist/playlist';
import Tracks from './src/Songs/tracks';

const router = (
    <div>
        <img id="background-img" src={backgroundImage} alt="background image"/>
        <Provider store={ store }>
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/playlist" component={Playlist}/>
                    <Route path="/tracks" component={Tracks}></Route>
                </Switch>
            </HashRouter>
        </Provider>
    </div>
);

ReactDOM.render(router, document.getElementById('root'));