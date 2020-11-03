import React, {FunctionComponent} from "react";
import {Navbar} from "react-bootstrap";
import {Link} from 'react-router-dom'

const Header: FunctionComponent = () => {
    return (
        <div>
            <div className="row pt-2">
                <Navbar bg="light" className="justify-content-around">
                    <Navbar.Text><Link to="/">POKEDEX </Link></Navbar.Text>
                </Navbar>
            </div>
            {/*<div className="row d-flex justify-content-center">
                <div className="col-6 d-flex justify-content-center">
                    <Form className="justify-content-around d-flex" inline>
                        <FormControl className="text-center" type="text" placeholder="Search"/>
                        <Button type="submit" variant="secondary">Submit</Button>
                    </Form>
                </div>
            </div>*/}
        </div>
    )
}
export default Header