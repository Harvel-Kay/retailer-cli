import useGenres from "../../hook/useGenres";

interface SelectProps {
  args?: React.SelectHTMLAttributes<HTMLSelectElement>;
  value?: any;
}

function GenreSelect({ args }: SelectProps) {
  const { data: genres } = useGenres();
  return (
    <select name={"genre_id"} className={"field-control form-select"} {...args}>
      <option value="">{"Category..."}</option>
      {genres?.map((gen) => (
        <option value={gen._id} key={gen._id + Math.random().toString()}>
          {gen.name}
        </option>
      ))}
    </select>
  );
}

export default GenreSelect;
