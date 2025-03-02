import Button from "../../components/Button";
import FormControl from "../../components/FormControl";
import Page from "../../components/Page";
import ProductItem from "../../components/ProductItem";
import Title from "../../components/Title";

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
          <Button styleType={"brand-solid"} block={"block"}>
            결제하기
          </Button>
        }
      >
        <ProductItem product={fakeItem} />
        <FormControl label="이름" htmlFor={"name"} required>
          <input id="name" />
        </FormControl>
      </Page>
    </div>
  );
};

export default CartPage;
