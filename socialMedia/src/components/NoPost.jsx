const NoPost = ({ onGetPostClick }) => {
  return (
    <>
      <div className="NoPost">
        <h1>There is No Post, Click Below to fatch from server</h1>
        <button type="button" className="btn btn-info" onClick={onGetPostClick}>
          Fatch from server
        </button>
      </div>
    </>
  );
};
export default NoPost;
