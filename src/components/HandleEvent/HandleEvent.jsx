import React, { Component } from 'react'

export default class HandleEvent extends Component {
    handleSayHello = () => {
        console.log('Hello')
    }
    render() {
        return (
            <div className='container'>
                <button onClick={this.handleSayHello}>Click Me!</button>
                <button onClick={() => {
                    console.log('ai cho nhấn ?')
                }}> Click tôi</button>
                <button onClick={() => {
                    this.handleSayHello('Concac')
                }}>Click mình</button>
                {/* */}
                {/*sự kiện chạy lấy dữ liệu input */}
                <input type="text"
                    className="py-3 px-3" onChange={(e) => {
                        let value = e.target.value
                        console.log(value)
                    }} />
            </div>
        )
    }
}
