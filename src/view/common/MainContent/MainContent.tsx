import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {ContactMe} from "../../pages/ContactMe/ContactMe";

export class MainContent extends Component {
    render() {
        return (
            <div className="h-auto">
                {/*<Routes>
                    <Route path="/contact-me" Component={ContactMe}></Route>
                </Routes>*/}
            </div>
        );
    }
}