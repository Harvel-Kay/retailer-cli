import Spin from "../spin/spin";

export default function Empty() {
  return (
    <>
      <h2>Currently no data available...</h2>
      <Spin />
    </>
  );
}
