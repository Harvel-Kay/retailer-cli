function Uploading({ loaded }: { loaded: number }) {
  return (
    <section className="progress-cont ">
      <div className="upload-progress">
        <p className="form-submit progress-count">{loaded}%</p>
        <div className="progress-width" style={{ width: `${loaded}%` }}></div>
      </div>
      <p className="form-submit upload-p">Uploading....</p>
    </section>
  );
}

export default Uploading;
