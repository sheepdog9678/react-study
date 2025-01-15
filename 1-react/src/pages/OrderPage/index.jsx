import { Component } from "react";
import Navbar from "../../components/Navbar";
import Page from "../../components/Page";
import Title from "../../components/Title";
import OrderStatusCard from "./components/OrderStatusCard";
import OrederPaymentCard from "./components/OrederPaymentCard";

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

class OrderPage extends Component {
  render() {
    return (
      <div className="OrderPage">
        <Page header={<Title>주문내역</Title>} footer={<Navbar />}>
          <OrederPaymentCard data={fakeData} />
          <OrderStatusCard data={fakeData} />
        </Page>
      </div>
    );
  }
}

export default OrderPage;
