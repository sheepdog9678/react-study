import Button from "../../components/Button";
import FormControl from "../../components/FormControl";
import Page from "../../components/Page";
import ProductItem from "../../components/ProductItem";
import Title from "../../components/Title";
import OrderForm from "./OrderForm";

const CartPage = () => {
  const fakeItem = {
    id: "CACDA421",
    name: "해물 계란 라면",
    price: 6000,
    thumbnail: "./images/menu-해물계란라면.jpg",
  };

  return (
    <div className="CartPage">
      <Page
        header={<Title backUrl={"/"}>장바구니</Title>}
        footer={
          <Button styleType={"brand-solid"} block={"block"} form="order-form">
            결제하기
          </Button>
        }
      >
        <ProductItem product={fakeItem} />
        <OrderForm />
      </Page>
    </div>
  );
};

export default CartPage;
