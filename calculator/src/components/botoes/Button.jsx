import "./Button.css";

export default function Button({ carac, estilo, value, teste}) {
  
  return (
    <div className="botao">
      {value === "numero" ? (
        <button onClick={teste} style={estilo} className="number">
          {carac}
        </button>
      ) : (
        <button onClick={teste} style={estilo} className="simbol">
          {carac}
        </button>
      )}
    </div>
  );
}
