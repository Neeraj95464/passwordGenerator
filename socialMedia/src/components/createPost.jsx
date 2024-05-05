const CreatePost = () => {
  return (
    <form className="CreatePost">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Enter Post Title
        </label>
        <input type="text" className="form-control" id="title" />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Describe your Post
        </label>
        <textarea type="text" rows="4" className="form-control" id="body" />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        onClick={() =>
          window.alert(
            "It will now work,I have not added this function but in future i will add. thanks"
          )
        }
      >
        Submit
      </button>
    </form>
  );
};
export default CreatePost;
