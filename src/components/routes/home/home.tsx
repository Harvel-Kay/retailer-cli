import "./styles.css";
import useProducts from "../../../hook/useProducts";
import InfiniteScroll from "react-infinite-scroll-component";
import FormBtn from "../../formBtn/formbtn";
import ListComp from "../../2DArray/listComp";
import Empty from "../../empyty/empty";
import PageHead from "../../page header/pageHead";

export default function Home() {
  const { data, hasNextPage, error, isLoading, fetchNextPage } = useProducts(
    {}
  );
  const fetched = data?.pages.reduce(
    (total, page) => total + page.products.length,
    0
  );

  if (error) alert(error.message);
  return (
    <div id="home-page" className="home-page ">
      <PageHead title="All Varieties " />
      <InfiniteScroll
        className={"home-scroll grid"}
        scrollableTarget={"home-page"}
        dataLength={fetched || 0}
        hasMore={hasNextPage}
        next={fetchNextPage}
        loader={<h2>Loading...</h2>}
        scrollThreshold={0.8}
      >
        {isLoading ? <Empty /> : <ListComp data={data} />}
        <FormBtn
          brand="Reload"
          btn_event={() => window.location.reload()}
          classes="load-btn"
        />
      </InfiniteScroll>
    </div>
  );
}
