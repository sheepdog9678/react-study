import React, { Component } from "react";
import Card from "../../../components/Card";
import Button from "../../../components/Button";
const fakeData = {
  deliveryAddress: "서울특별시 송파구 잠실동 1번지",
  deliveryContact: "010-1111-2222",
  deliveryPrice: 3000,
  discountPrice: 2000,
  id: "CACDA420",
  messageToRider: "안전하게 오세요",
  messageToShop: "포크는 주지 마세요",
  name: "짜장면",
  orderDate: "2025. 1. 12. 오후 5:00:38",
  paymentMethod: "마이페이",
  position: [60, 60],
  productPrice: 6000,
  status: "배달중",
  totalPrice: 7000,
};

class OrderStatusCard extends Component {
  render() {
    return (
      <div>
        <Card
          header={fakeData.totalPrice}
          data={[
            { term: "메뉴가격", description: fakeData.productPrice },
            { term: "배달료", description: fakeData.deliveryPrice },
            { term: "할인금액", description: fakeData.discountPrice },
          ]}
        ></Card>
      </div>
    );
  }
}

export default OrderStatusCard;
