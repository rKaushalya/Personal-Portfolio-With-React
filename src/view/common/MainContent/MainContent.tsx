import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {ContactMe} from "../../pages/ContactMe/ContactMe";
import {Introduction} from "../../pages/Introduction/Introduction";
import {AboutMe} from "../../pages/AboutMe/AboutMe";
import {Education} from "../../pages/education/Education";

export class MainContent extends Component {
    render() {
        return (
            <div className="h-auto">
                <Introduction/>
                <AboutMe/>
                <Education/>
                <Routes>
                    <Route path="/contact-me" Component={ContactMe}></Route>
                </Routes>
            </div>
        );
    }
}