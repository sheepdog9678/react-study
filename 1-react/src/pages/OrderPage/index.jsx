import { Component } from "react";
import Navbar from "../../components/Navbar";
import Page from "../../components/Page";
import Title from "../../components/Title";
import Card from "../../components/Card";

class OrderPage extends Component {
  render() {
    return (
      <div className="OrderPage">
        <Page header={<Title>주문내역</Title>} footer={<Navbar />}>
          <Card
            header="헤더"
            data={[{ term: "term", description: "" }]}
            footer="푸터"
          />
        </Page>
      </div>
    );
  }
}

export default OrderPage;
