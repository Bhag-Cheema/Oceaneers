import React, { Component } from 'react'

export default class NewsLetter extends Component {
    render() {
        return (
            <div>
                <form className="newsLetter">
                    <div className="newsLetter-container">
                        <div className="desc-container">
                            <h3>Subscribe to Our NewsLetter</h3>
                            <h5>Our best reads and tips for living the reduction <br />
                            lifestyle. Subscribe here, and <br />
                             become an Oceaneer later!</h5>
                        </div>
                        <div className="inputs-container">
                            <div className="input-names">
                                <div className="firstname">
                                    <label>First Name:</label>
                                    <input type="text" id="fname" name="firstname"></input>
                                </div>
                                <div className="lastname">
                                    <label>Last Name:</label>
                                    <input type="text" id="lname" name="lastname"></input>
                                </div>
                            </div>
                            <div className="email">
                                <label>Email:</label>
                                <input type="email" id="email" name="email"></input>
                            </div>
                            <div className="subButton">
                                <button type="submit">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
