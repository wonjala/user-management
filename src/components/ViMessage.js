const ViMessage = (props) => {
  return (
    <>
      {props.message && (
        <div className="ErrorMessage">
          <p>{props.message}</p>
        </div>
      )}
    </>
  );
};
export default ViMessage;
