import useProdCardContext from "../../hooks/useProdCardContext";

function CardHeader() {
  const { prod } = useProdCardContext();
  return (
    <header className="card-header grid">
      <h2 className="prod-name">{prod.name.toUpperCase()}</h2>
      <h3 className="prod-genre">{prod.genre.name}</h3>
    </header>
  );
}

export default CardHeader;
