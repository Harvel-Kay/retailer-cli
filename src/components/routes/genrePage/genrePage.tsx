import { Link } from "react-router-dom";
import FormBtn from "../../formBtn/formbtn";
import Input from "../../input/input";
import { useRef } from "react";
import { usePostGenre } from "../../../hook/useGenres";
import "./styles.css";

export default function GenrePage() {
  const { mutant, error } = usePostGenre();
  const { mutate, isPending } = mutant;

  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      className={`genre-form grid`}
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) mutate(ref.current.value);
      }}
    >
      <Link to={"/products"} className="_link exit form-btn grid"></Link>
      <h2>Category</h2>

      <Input
        error={error}
        name="name"
        pholder="name"
        args={{ required: true, ref }}
      />
      <FormBtn brand="Submit" btn_event={() => {}} navState={isPending} />
    </form>
  );
}
