function Button (props) {
    return (
        <button onClick={props.acao}>
            {props.texto}
             </button>
    );
}
export default Button;