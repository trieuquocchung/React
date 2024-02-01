import React, { Component } from 'react'

export default class Databinding extends Component {
    titleName = "Chung"
    renderDesc = () => {
        return <div>Sắp nghỉ tết rồi các bạn ơi</div>
    }
    render() {
        let title = 'Hello Cybersoft'
        let person = {
            name: 'Chung',
            age: 18,
            avatar: 'https://th.bing.com/th/id/OIP.Y7f5zByKyMrJXO8pSEfBSgHaHa?rs=1&pid=ImgDetMain'
        }
        const renderTitle = () => {
            // có thể return về string, number, jsx...
            // không thể binding object
            return 'hello bc 64'
        }
        return (
            <div className="container">
                <p id="txt">{title}</p>
                <p>{this.titleName}</p>
                <p>{renderTitle()}</p>
                <p>{this.renderDesc()}</p>

                <br />
                <div className="card">
                    <img className="card-img-top" src={person.avatar} alt="Title" />
                    <div className="card-body">
                        <h4 className="card-title">{person.name}</h4>
                        <p className="card-text">{person.age}</p>
                    </div>
                </div>
            

            </div>
        )
    }
}
