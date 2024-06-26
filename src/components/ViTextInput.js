const viTextInput = (props) => {
    return (
    <div className="input-group">
        <label>{props.label}</label>
        <input
          type="text"
          name={props.name}
          value={props.value}
          onChange={props.handleInputChange}
          {...props}
        />
        { props.errorMessage !== '' && <span className="label-danger">{props.errorMessage}</span>}
      </div>
    );
}
export default viTextInput;