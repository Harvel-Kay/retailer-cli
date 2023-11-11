import ProdCard from "../../product card/prodCard";
import useFilter from "../../../hook/useFilter";
import Empty from "../../empyty/empty";
import PageHead from "../../page header/pageHead";

export default function SearchPage() {
  const { products } = useFilter();

  return (
    <div className="home-page grid">
      <PageHead title="Search is on...." />
      {products.length === 0 && <Empty />}
      {products.map((prod, index) => (
        <ProdCard prod={prod} key={index} />
      ))}
    </div>
  );
}
