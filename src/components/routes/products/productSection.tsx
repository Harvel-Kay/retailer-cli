import { Form, useActionData, useNavigation } from "react-router-dom";
import FormGSelect from "../../formG Select/formGSelect";
import FormG from "../../formG/formG";
import FormBtn from "../../formBtn/formbtn";
import TagPreview from "./tagPreview";
import IError from "../../error/errorInput";
import { useState } from "react";
import ErrorCont from "../../error/errorCont";

export default function ProductSection() {
  const res = useActionData() as IError;
  const error = res?.error;
  const { state } = useNavigation();
  const [tag, set_tag] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  return (
    <div className="create-form-cont grid">
      <Form className="create-form" method="post">
        <h2 className="prod-name">New product</h2>

        <input type="text" name="tag" hidden value={tag} onChange={() => {}} />
        <input
          type="text"
          name="thumbnail"
          hidden
          value={thumbnail}
          onChange={() => {}}
        />
        <FormGSelect />
        <FormG
          brand={"Product name"}
          name={"name"}
          error={error}
          pholder={"name"}
          args={{
            minLength: 3,
            maxLength: 20,
            required: true,
          }}
        />
        <FormG
          error={error}
          brand={"Price"}
          name={"price"}
          pholder={"price per item"}
          args={{
            min: 0,
            required: true,
          }}
          type={"number"}
        />
        <FormG
          error={error}
          brand={"Quantity"}
          name={"numberInStock"}
          pholder={"quantity"}
          type={"number"}
          args={{
            min: 0,
            required: true,
          }}
        />
        <FormBtn brand={"Create"} btn_event={() => {}} navState={state} />
      </Form>
      {!tag && res?.tag && <ErrorCont message={res?.tag} classes="tag-error" />}
      <TagPreview setTag={set_tag} setThumbnail={setThumbnail} />
    </div>
  );
}
