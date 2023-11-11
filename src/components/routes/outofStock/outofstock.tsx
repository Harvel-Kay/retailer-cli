import Empty from "../../empyty/empty";
import ListComp from "../../2DArray/listComp";
import InfiniteBtn from "../../infin Btn/infiniteBtn";
import useProducts from "../../../hook/useProducts";

export default function OutOfStock() {
  const { data, isLoading, hasNextPage, fetchNextPage } = useProducts({
    stock: true,
  });

  return (
    <div className="out-of-stock home-page grid">
      {isLoading && <Empty />}
      <ListComp data={data} />
      <InfiniteBtn more={hasNextPage} getMore={fetchNextPage} />
    </div>
  );
}
