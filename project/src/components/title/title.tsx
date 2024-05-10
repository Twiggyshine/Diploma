import "./title.css";



interface TitleProps {
  title: string;
  subtitle: string;
}

const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <section>
      <div className="wrapper">
        <div className="section-title">
          <h1 style={{ fontSize: '60px'}}>{title}</h1>
          <p>{subtitle}</p>
          <button>Shop</button>
        </div>
      </div>
    </section>
  );
};

export default Title;
