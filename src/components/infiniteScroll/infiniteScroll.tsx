import InfiniteScroll from "react-infinite-scroll-component";

interface Data {
  pages: [][];
}

interface ScrollerProps {
  children: React.ReactNode;
  next: () => void;
  hasMore: boolean;
  data: unknown;
}

export default function Scroller({
  children,
  next,
  hasMore,
  data,
}: ScrollerProps) {
  if (!data) return null;
  const { pages } = data as Data;
  const fetched = pages.reduce((total, page) => total + page.length, 0);
  return (
    <div id="home-page" className="home-page">
      <InfiniteScroll
        className="home-scroll grid"
        dataLength={fetched}
        next={next}
        loader={<p>Loading....</p>}
        hasMore={hasMore}
        scrollableTarget={"home-page"}
      >
        {children}
      </InfiniteScroll>
    </div>
  );
}
