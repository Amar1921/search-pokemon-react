import React, {FunctionComponent} from "react";
import {Navbar} from "react-bootstrap";
import {useHistory} from 'react-router-dom'

const Header: FunctionComponent = () => {
    const history = useHistory()
    const retrn = () => (
        history.push(`/`)
    )
    return (

        <div className="container">
            <div className="row ">
                <Navbar variant="light" bg="light">
                    <Navbar.Text><h3 onClick={retrn}>POKEDEX</h3></Navbar.Text>
                </Navbar>
            </div>
        </div>

    )
}
export default Header