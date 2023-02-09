function newsletterButton() {
  return (
    <form className="input-group form-subcriber mt-30 d-flex">
      <input
        type="email"
        className="form-control bg-white font-small"
        placeholder="Enter your email"
      />
      <button className="btn bg-primary text-white" type="submit">
        Subscribe
      </button>
    </form>
  );
}

export default newsletterButton;
