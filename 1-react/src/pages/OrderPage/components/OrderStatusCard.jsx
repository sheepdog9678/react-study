import React from "react";
import Card from "../../../components/Card";

const OrderStatusCard = ({ data }) => {
  const {
    totalPrice,
    paymentMethod,
    productPrice,
    deliveryPrice,
    discountPrice,
  } = data;
  return (
    <>
      <Card
        header={
          <>
            <p>총 결제금액: {totalPrice.toLocaleString()}원</p>
            <p>결제방법: {paymentMethod}</p>
          </>
        }
        data={[
          {
            term: "메뉴가격",
            description: productPrice.toLocaleString() + "원",
          },
          {
            term: "배달료",
            description: deliveryPrice.toLocaleString() + "원",
          },
          {
            term: "할인금액",
            description: discountPrice.toLocaleString() + "원",
          },
        ]}
      ></Card>
    </>
  );
};

export default OrderStatusCard;
