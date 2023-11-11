import useProdCardContext from "../../hooks/useProdCardContext";

function CartSelected() {
  const { prod } = useProdCardContext();
  if (!prod.qty || prod.qty <= 0) return null;
  return (
    <div className="selected icon-sm flex-b">
      <p className="badge-p">{prod.qty ?? 0}</p>
    </div>
  );
}

export default CartSelected;
