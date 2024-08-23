import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {ContactMe} from "../../pages/ContactMe/ContactMe";
import {Introduction} from "../../pages/Introduction/Introduction";
import {AboutMe} from "../../pages/AboutMe/AboutMe";
import {Education} from "../../pages/education/Education";
import {Skills} from "../../pages/Skills/Skills";
import {Projects} from "../../pages/Projects/Projects";

export class MainContent extends Component {
    render() {
        return (
            <div className="h-auto">
                <Introduction/>
                <AboutMe/>
                <Education/>
                <Skills/>
                <Projects/>
                <Routes>
                    <Route path="/contact-me" Component={ContactMe}></Route>
                </Routes>
            </div>
        );
    }
}