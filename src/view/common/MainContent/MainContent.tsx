import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {ContactMe} from "../../pages/ContactMe/ContactMe";
import {Introduction} from "../../pages/Introduction/Introduction";
import {AboutMe} from "../../pages/AboutMe/AboutMe";

export class MainContent extends Component {
    render() {
        return (
            <div className="h-auto">
                <Introduction/>
                <AboutMe/>
                <Routes>
                    <Route path="/contact-me" Component={ContactMe}></Route>
                </Routes>
            </div>
        );
    }
}