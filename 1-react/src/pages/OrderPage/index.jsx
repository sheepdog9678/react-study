import { Component } from "react";
import Navbar from "../../components/Navbar";
import Page from "../../components/Page";
import Title from "../../components/Title";
import Card from "../../components/Card";
import OrderStatusCard from "./components/OrderStatusCard";

class OrderPage extends Component {
  render() {
    return (
      <div className="OrderPage">
        <Page header={<Title>주문내역</Title>} footer={<Navbar />}>
          <OrderStatusCard />
        </Page>
      </div>
    );
  }
}

export default OrderPage;
