import { Component } from "react";
import OrderApi from "shared/api/OrderApi";
import Navbar from "../../components/Navbar";
import Page from "../../components/Page";
import Title from "../../components/Title";
import OrderStatusCard from "./components/OrderStatusCard";
import OrederPaymentCard from "./components/OrederPaymentCard";
import OrderDeliveryCard from "./components/OrderDeliveryCard";

class OrderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: null,
    };
  }
  async fetch() {
    try {
      const order = await OrderApi.fetchMyOrder();
      this.setState({ order });
    } catch (e) {
      console.error(e);
    }
  }
  componentDidMount() {
    this.fetch();
  }
  render() {
    const { order } = this.state;
    return (
      <div className="OrderPage">
        <Page header={<Title>주문내역</Title>} footer={<Navbar />}>
          {order && (
            <>
              <OrederPaymentCard data={order} />
              <OrderStatusCard data={order} />
              <OrderDeliveryCard data={order} />
            </>
          )}
        </Page>
      </div>
    );
  }
}

export default OrderPage;
