 import React, { Component } from 'react'

export default class StateDemoComponent extends Component {
    // State là thuộc tính có sẵn của class Component (quản lí sự thay đổi của component)
    state = {
        fSize: 16,
    }
    render() {
        return (
            <div className="container">
                <p style={{
                    fontSize: this.state.fSize
                }}>Ối dồi ôi</p>
                <button onClick={() => {
                    // ở trong class component không xài theo cách này được 
                    // this.state.fSize += 10
                    // this.setState là một hàm có sẵn của react calss component nhận vào state có giá trị mới và gọi lại hàm render giao diện
                    let newState = {
                        fSize: this.state.fSize + 10
                    }
                    this.setState(newState)
                }}>UP SIZE</button>
            </div>  
        )
    }
}
