import useProducts from "../../../hook/useProducts";
import Empty from "../../empyty/empty";
import ListComp from "../../2DArray/listComp";
import InfiniteBtn from "../../infin Btn/infiniteBtn";

export default function Stock() {
  const { data, hasNextPage, fetchNextPage, isLoading } = useProducts({});

  return (
    <div className="home-page grid">
      {isLoading && <Empty />}
      <ListComp data={data} />
      <InfiniteBtn more={hasNextPage} getMore={fetchNextPage} />
    </div>
  );
}
