import "./styles.css";

function Spin({ spinCls }: { spinCls?: string }) {
  return (
    <div className={`spin-cont flex-b ${spinCls}`}>
      <div className="spin-eye"></div>
    </div>
  );
}

export default Spin;
