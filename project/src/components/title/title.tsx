import "./title.css";

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
          <a className="button title__link" href="#" type="button">
            Shop All
          </a>
        </div>
      </div>
    </section>
  );
};

export default Title;
