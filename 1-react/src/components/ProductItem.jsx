import Button from "./Button";

function ProductItem({ product }) {
  const { name, price, thumbnail } = product;
  return (
    <li>
      <div className="ProductItem">
        <div className="description">
          <h2>{name}</h2>
          <div>{price.toLocaleString()}</div>
          <Button
            styleType={"brand"}
            onClick={() => {
              console.log("장바구니로 이동");
            }}
          >
            주문하기
          </Button>
        </div>
        <div className="thumbnail">
          <img src={thumbnail} alt={`${name} ${price.toLocaleString()}`} />
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
