import Link from "next/link";
import MyImage from "../components/lazyload";

const Card = ({ article }) => {
  return (
    <>
      <div className="img">
        {/* <img src={article.image} alt="" /> */}
        <MyImage image={article.image} />
        <div className="card-text">
          <h4>{article.title}</h4>
          <small>By FikraSpace</small>
          <span className="link">
            <Link href={`/articles/${article.id}`}>
              <a>Reade article</a>
            </Link>
            <span>June 19, 2020</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
