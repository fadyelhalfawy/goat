const InputForm = ({ name, label, error, ...rest }) => {
    return(
        <div className="form-group">
            <label htmlFor={ name }>{ label }</label>
            <input
                className="form-control"
                { ...rest }
                id={name}
                name={name}
            />

            { error && <div
                className="alert alert-danger"
                role="alert">
                { error }
            </div>
            }
        </div>
    );
}

export default InputForm;