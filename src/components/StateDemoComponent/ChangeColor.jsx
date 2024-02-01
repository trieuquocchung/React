import React, { Component } from 'react'
// Các bước làm một task ở trong react 
// 1.xây dựng cái giao diện hoàn chỉnh
// 2.xác định xem state, string, number...
// 3.binding state lên giao diện 
// 4.xử lí sự kiện thay đổi state => setState
export default class ChangeColor extends Component {
    state = {
        color: 'red',
    };
    render() {
        // Cách để xem state hiện tại log ở hàm render()
        // C1: Log ở đầu hàm render()
        // C2: Log ở tham số thứ 2 của this.setState (là 1 callBack function)
        console.log(this.state)
        return (
            <div className="container">
                <i
                    style={{
                        color: this.state.color,
                    }}
                    className="fa-solid fa-house" />
                <br />
                <button onClick={() => {    
                    this.setState({
                        color: 'red',
                    });
                }} className="btn btn-danger">Red</button>
                <button onClick={() => {
                    this.setState({
                        color: 'green',
                    });
                }} className="btn btn-success mx-2">Green</button>
                <button onClick={() => {
                    this.setState({
                        color: 'pink',
                    });
                }} className="btn btn-info">Pink</button>
            </div>
        )
    }
}
