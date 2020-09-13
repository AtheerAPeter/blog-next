import Link from "next/link";
const Card = ({ name }) => {
  return (
    <>
      <div className="img">
        <img src="./images/grid.png" alt="" />
        <h4>{name ? name : "no name"}</h4>
        <small>By FikraSpace</small>
        <span className="link">
          <Link href="article">
            <a>Reade article</a>
          </Link>
          <span>June 19, 2020</span>
        </span>
      </div>
    </>
  );
};

export default Card;
