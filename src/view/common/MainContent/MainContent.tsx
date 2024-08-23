import {Component} from "react";
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
                <ContactMe/>
            </div>
        );
    }
}