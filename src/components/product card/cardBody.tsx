import useProdCardContext from "../../hooks/useProdCardContext";
import useAppContext from "../../hooks/useAppContext";

function CardBody() {
  const { prod } = useProdCardContext();
  const { setSrc, setShow } = useAppContext();
  return (
    <form className="card-body grid">
      <img src={prod.thumbnail} alt="product-tag" className="prod-img-bg" />
      <img
        src={prod.thumbnail}
        alt="product-tag"
        className="prod-img"
        onClick={() => {
          setShow(true);
          setSrc(prod.thumbnail);
        }}
      />
    </form>
  );
}

export default CardBody;
