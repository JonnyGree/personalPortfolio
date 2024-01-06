import { Col, Container } from "react-bootstrap";
import underConstruction from "../asset/underConstruction.png"

function Element() {
  return (
    <div className="underConstruction">
          <img src={underConstruction} alt="Logo" className="underConstructionLogo"/>
    </div>
  );
}

export default Element;