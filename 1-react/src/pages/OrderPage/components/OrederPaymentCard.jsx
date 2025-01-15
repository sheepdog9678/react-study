import Card from "../../../components/Card";
import Button from "../../../components/Button";

const OrederPaymentCard = ({ data }) => {
  const { name, orderDate, id } = data;
  return (
    <>
      <Card
        header={
          <>
            <h3>음식 준비중</h3>
            <p>{name}</p>
          </>
        }
        footer={
          <>
            <Button>전화</Button>
            <Button>가게보기</Button>
          </>
        }
        data={[
          { term: "주문일시", description: orderDate },
          { term: "주문번호", description: id },
        ]}
      ></Card>
    </>
  );
};

export default OrederPaymentCard;
