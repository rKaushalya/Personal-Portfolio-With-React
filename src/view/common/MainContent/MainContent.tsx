import {Component} from "react";
import {ContactMe} from "../../pages/ContactMe/ContactMe";
import {Introduction} from "../../pages/Introduction/Introduction";
import {AboutMe} from "../../pages/AboutMe/AboutMe";
import {Education} from "../../pages/education/Education";
import {Skills} from "../../pages/Skills/Skills";
import {Projects} from "../../pages/Projects/Projects";
import profilePic from './../../../assest/images/cute-mobile-phone-character-saying-thank-you-vector-41712253.jpg';


export class MainContent extends Component {
    render() {
        return (
            <div className="h-auto">
                <Introduction/>
                <AboutMe profilePic={profilePic}/>
                <Education/>
                <Skills/>
                <Projects/>
                <ContactMe/>
            </div>
        );
    }
}