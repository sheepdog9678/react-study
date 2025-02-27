import ProductItem from "../../components/ProductItem";

const OrderableProductitem = ({ product }) => {
  const handleClick = () => {
    console.log("// TODO 장바구니 화면 이동");
  };
  return <ProductItem product={product} onClick={handleClick} />;
};

export default OrderableProductitem;
