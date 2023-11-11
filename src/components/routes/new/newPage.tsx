import InfiniteScroll from "react-infinite-scroll-component";
import { useNewProducts } from "../../../hook/useProducts";
import Empty from "../../empyty/empty";
import FormBtn from "../../formBtn/formbtn";
import ListComp from "../../2DArray/listComp";
import PageHead from "../../page header/pageHead";

export default function NewItemsPage() {
  const { data, hasNextPage, error, fetchNextPage } = useNewProducts();
  const fetched = data?.pages.reduce(
    (total, page) => total + page.products.length,
    0
  );
  if (error) alert(error.message);
  return (
    <div id="home-page" className="home-page">
      <PageHead title="Latest in stock #NEW" />
      <InfiniteScroll
        className={"home-scroll grid"}
        scrollableTarget={"home-page"}
        dataLength={fetched || 0}
        hasMore={hasNextPage}
        next={fetchNextPage}
        loader={<Empty />}
        scrollThreshold={0.8}
      >
        <ListComp data={data} />
        <FormBtn
          brand="Reload"
          btn_event={() => window.location.reload()}
          classes="load-btn"
        />
      </InfiniteScroll>
    </div>
  );
}
