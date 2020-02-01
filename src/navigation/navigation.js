import React, {Component} from 'react';
import '../styles/App.scss'
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom"


function navigation() {
    return (
        <div className = "main-nav">
            <p>Hello from navigation</p>
        </div>
    )
}

export default navigation;