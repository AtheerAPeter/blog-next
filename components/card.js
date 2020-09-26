import Link from "next/link";
import MyImage from "../components/lazyload";
import moment from "moment";

const Card = ({ article }) => {
  return (
    <>
      <div className="img">
        {/* <img src={article.image} alt="" /> */}
        <MyImage image={article.image} />
        <div className="card-text">
          <h4>{article.title}</h4>
          <small>{article.athor}</small>
          <span className="link">
            <Link href={`/articles/${article.id}`}>
              <a>Read article</a>
            </Link>
            <span>{moment(article.updatedAt).format("ll")}</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
