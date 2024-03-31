import Fotka from "./CastiStrany/Fotka";
import Tyzden from "./CastiStrany/Tyzden";
import Poznamky from "./CastiStrany/Poznamky";

function Strana() {
  return (
    <div className="strana">
      <Fotka />
      <Tyzden />
      <Poznamky />
    </div>
  );
}

export default Strana;
