import FormBtn from "../../formBtn/formbtn";
import useGenres, { useDelGenre } from "../../../hook/useGenres";

export default function GenreTable() {
  const { mutate } = useDelGenre();
  const genres = useGenres().data || [];

  return genres.length === 0 ? (
    <p className="empty-p">Create new categories +</p>
  ) : (
    <div className="genre-table-cont">
      <table>
        <tbody>
          {genres.map((gen, index) => (
            <tr key={index}>
              <td>{gen.name}</td>
              <td>
                <FormBtn
                  brand="Delete"
                  btn_event={() => mutate(gen._id)}
                  classes="card-delete"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
