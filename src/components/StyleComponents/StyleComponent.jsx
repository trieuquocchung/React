import React, { Component } from 'react'

//Import css (ăn hết cho cả dự án)
// import './StyleComponent.css'

// Import module css (sẽ chỉ ăn cho component được import)
// Khi xài module css thì khai báo class = 'style['tênclass']'
import style from './StyleComponent.module.css'
export default class StyleComponent extends Component {
    render() {
        return (
            <div className={`display-4 ${style['text-pink']}`}>Hello các bạn ăn tối chưa nhỉ</div>
        )
    }
}

