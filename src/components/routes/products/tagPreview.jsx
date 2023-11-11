import { useState } from "react";
import React from "react";
import "./styles.css";
import Uploading from "./uploading";
import http from "../../../services/http";

function TagPreview({ setTag, setThumbnail }) {
  const [loaded, setLoaded] = useState(0);
  const [src, setSrc] = useState("");

  const progress = (loaded, total) => {
    const load = Math.round((loaded / total) * 100);
    setLoaded(load);
  };

  const onSubmit = async (e) => {
    try {
      const formD = new FormData();
      formD.append("prod_tag", e.target.files[0]);
      const { data } = await http.post("/tags", formD, {
        onUploadProgress: (e) => {
          progress(e.loaded, e.total);
        },
      });
      // console.log("Line Reached : Res Data", data);
      setSrc(data.path);
      setTag(data.path);
      setThumbnail(data.thumbnail);
    } catch (err) {
      console.log("Error encountered on selection of an Image", err);
    }
  };

  const loading = () => {
    return loaded !== 0 && loaded !== 100;
  };

  return (
    <form className="tag-preview-cont grid">
      {loading() && <Uploading loaded={loaded} />}
      <input
        name="prod_tag"
        type="file"
        className={`select-img ${src && "update-img"}`}
        onChange={(e) => onSubmit(e)}
        accept=".jpg , .jpeg, .png, .webp "
      />
      {src && (
        <>
          <img src={src} alt="product-tag" className="tag-img img" />
          <img src={src} alt="product-tag-bg" className="tag-bg" />
        </>
      )}
      {!src && (
        <section className="img-icon ">
          <img src={"/icons/gallery-e.svg"} alt="user" />
        </section>
      )}
    </form>
  );
}

export default TagPreview;
