import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {ContactMe} from "../../pages/ContactMe/ContactMe";
import {Introduction} from "../../pages/Introduction/Introduction";

export class MainContent extends Component {
    render() {
        return (
            <div className="h-auto">
                <Introduction/>
                <Routes>
                    <Route path="/contact-me" Component={ContactMe}></Route>
                </Routes>
            </div>
        );
    }
}