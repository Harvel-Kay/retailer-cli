interface IHead {
  title: string;
  classes?: string;
}

export default function PageHead({ title, classes }: IHead) {
  return (
    <h2
       style={{ color: "blue", gridColumn: "1/-1", marginLeft: "1rem" }}
      className={classes}
    >
      {title}
    </h2>
  );
}
