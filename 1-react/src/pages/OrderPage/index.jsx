import { Component } from "react";
import Navbar from "../../components/Navbar";
import Page from "../../components/Page";
import Title from "../../components/Title";
import OrderStatusCard from "./components/OrderStatusCard";
import OrederPaymentCard from "./components/OrederPaymentCard";

class OrderPage extends Component {
  render() {
    return (
      <div className="OrderPage">
        <Page header={<Title>주문내역</Title>} footer={<Navbar />}>
          <OrederPaymentCard />
          <OrderStatusCard />
        </Page>
      </div>
    );
  }
}

export default OrderPage;
