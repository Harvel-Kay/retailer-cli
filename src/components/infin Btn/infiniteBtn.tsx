import FormBtn from "../formBtn/formbtn";

interface InfinProps {
  more: boolean;
  getMore: () => void;
}

export default function InfiniteBtn({ more, getMore }: InfinProps) {
  return (
    <FormBtn
      brand={more ? "Load More" : "Refresh"}
      btn_event={more ? () => getMore() : () => window.location.reload()}
      classes="load-btn"
    />
  );
}
