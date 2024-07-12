
import "./style.css";

export const Desktop = (): JSX.Element => {
  return (
    <div className="desktop">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="logo">
            <img className="img" alt="Logo" src="logo-1.png" />
          </div>
          <div className="b-hname">
            <div className="text-wrapper">Boarding House Name</div>
          </div>
        </div>
      </div>
    </div>
  );
};
