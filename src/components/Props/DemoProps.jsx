import React, { Component } from 'react';
import CardPerSon from './CardPerson';
import ProductCard from './ProductCard';

export default class DemoProps extends Component {
    // Prop có thể truyền {},[],string,number,bolean, jsx ...

    //   Prop là gì
    // Prop là thuộc tính có sẵn của class component dùng để nhận giá trị từ nơi nó được sử dụng (từ cha chuyền vào con)

    //   Props khác gì state
    // Props và state đều là thuộc tính có sẵn của class component , để chứa dữ liệu và binding lên giao diện

    //   Sate có thể setSate (gán lại giá trị mới)

    //   Props thì không thể thay đổi giá trị

    render() {
        const product = {
            id: 1,
            name: "Vinh",
            age: 3,
            img: "https://i.pravatar.cc?u=20"
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <CardPerSon name={'Tèo'} age={90} img={'https://i.pravatar.cc?u=20'} />
                    </div>
                    <div className="col-4">
                        <CardPerSon
                            name={'Vinh'}
                            age={3}
                            img={'https://i.pravatar.cc?u=15'}
                        />
                    </div>
                    <div className="col-4">
                        <CardPerSon
                            name={'Lâm'}
                            age={25}
                            img={'https://i.pravatar.cc?u=25'}
                        />
                    </div>
                </div>
                <div calssName="row">
                    <div className="col-4">
                        <ProductCard dataProduct={product} desc={<p>Hãy mua tôi</p>} />
                    </div>
                </div>
            </div>
        );
    }
}
