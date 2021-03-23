import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"
import {Route, BrowserRouter, Link, Switch} from "react-router-dom";
import PageOne from "./Components/PageOne";
import PageTwo from "./Components/PageTwo";
import PageThree from "./Components/PageThree";
import PageFour from "./Components/PageFour";
import AuthContext from "./Context/AuthContext"


function App() {

    const [isAuth, setAuth] = useState(false);

    return (
        <>
            <ul className="navigation-header">
                <li className="dsa">
                    <Link to="/pageone">Page One</Link>
                </li>
                <li>
                    <Link to="/pagetwo">Page Two</Link>
                </li>
                <li>
                    <Link to="/pagethree">Page Three</Link>
                </li>
                <li>
                    <Link to="/pagefour">Page Four</Link>
                </li>

            </ul>

            <Switch>

                <Route path="/pageone">
                    <PageOne/>
                </Route>

                <Route path="/pagetwo">
                    <PageTwo/>
                </Route>
                <AuthContext.Provider value={{isAuth, setAuth}}>
                    <Route path="/pagethree">
                        <PageThree
                            setAuth={setAuth}
                            isAuth={isAuth}/>
                    </Route>

                    <Route path="/pagefour">
                        <PageFour
                            setAuth={setAuth}
                            isAuth={isAuth}
                            text='hello text from props'/>
                    </Route>
                </AuthContext.Provider>
            </Switch>

        </>


    );
}

export default App;
