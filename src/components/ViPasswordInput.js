const viPasswordInput = (props) => {
    return (
    <div className="input-group">
        <label>{props.label}</label>
        <input
          type="password"
          name={props.name}
          value={props.value}
          onChange={props.handleUserInput}
          {...props}
        />
        {props.isSubmitted && props.value === "" && (
          <span className="label-danger">{props.errorMessage}</span>
        )}
    </div>
    );
}
export default viPasswordInput;