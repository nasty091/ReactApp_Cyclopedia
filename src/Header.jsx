import reactImage from "./images/react.png";

export default function Header() {
  return (
    <div className="py-2 pl-2" style={{ borderBottom: "1px solid #777" }}>
      <img
        src={reactImage}
        alt=""
        style={{ height: "35px", verticalAlign: "top" }}
      />
      <span className="h2 pt-4 m-2 text-white-50">Cyclopedia</span>
    </div>
  );
}
