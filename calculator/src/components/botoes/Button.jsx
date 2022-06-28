import "./Button.css";

  const Button = ({ estilo, value, onClick, carac }) => {
    
    return (
      <div className="botao">
      {carac === "numero" ? (
        <button value={value} onClick={onClick} style={estilo} className="number">
          {value}
        </button>
      ) : (
        <button value={value} onClick={onClick} style={estilo} className="simbol">
          {value}
        </button>
      )}
    </div>
  );
  };
  
export default Button;

