import React, { Component } from 'react'

export default class ChangeAvatar extends Component {
    state = {
        avatar: 'https://i.pravatar.cc/2000?u=60'
    }
    render() {
        return (
            <div className="container">
                <div className="card" style={{ width: '18rem' }}>
                    <img src={this.state.avatar} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button onClick={() => {
                            let random = Math.floor(Math.random() * 100)
                            let newAvatar = `https://i.pravatar.cc/2000?u=${random}`
                            this.setState({
                                avatar: newAvatar
                            })
                        }}>Change Avatar</button>
                    </div>
                </div>

            </div>
        )
    }
}
