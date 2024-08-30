import { Component } from "react";
import { ContactMe } from "../../pages/ContactMe/ContactMe";
import { Introduction } from "../../pages/Introduction/Introduction";
import { AboutMe } from "../../pages/AboutMe/AboutMe";
import { Education } from "../../pages/education/Education";
import { Skills } from "../../pages/Skills/Skills";
import { Projects } from "../../pages/Projects/Projects";
import profilePic from './../../../assest/images/profile/about1.jpg';

export class MainContent extends Component {
    render() {
        return (
            <div className="h-auto">
                <section id="introduction">
                    <Introduction />
                </section>
                <section id="about">
                    <AboutMe profilePic={profilePic} />
                </section>
                <section id="education">
                    <Education />
                </section>
                <section id="skills">
                    <Skills />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="contact">
                    <ContactMe />
                </section>
            </div>
        );
    }
}
