import "./title.css";

import { Link } from "react-router-dom";

interface TitleProps {
  title: string;
  subtitle: string;
}

const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <section className="title">
      <div className="wrapper">
        <div className="container-title">
          <h1 style={{ fontSize: "60px" }}>{title}</h1>
          <p>{subtitle}</p>
          <Link to="/Products" className="button title__link">
            Shop All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Title;
