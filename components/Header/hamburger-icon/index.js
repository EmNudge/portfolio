import "./index.scss";

const HamburgerIcon = ({onClick, isOpen}) => (
  <div
    className={"hamburger-icon" + (isOpen ? " close-icon" : "")}
    onClick={onClick}>
    <div className="top" />
    <div className="mid" />
    <div className="bottom" />
  </div>
);

export default HamburgerIcon;
