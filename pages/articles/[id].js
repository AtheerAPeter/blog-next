import { useEffect, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import moment from "moment";
import MyImage from "../../components/lazyload";

const Articles = (props) => {
  
  const [article, setArticle] = useState([]);

  useEffect(() => {
    setArticle(props.post.article);
  }, []);
  return (
    <>
      <Header />
      <main>
        <section className="container title-box">
          <div>
            <h1>{article.title}</h1>
            <small>byFikraSpace</small>
          </div>
          <span>{moment(article.updatedAt).format("ll")}</span>
        </section>
        <section className="container cover">
          {/* <img id="coverImage" src={article.image} alt="" /> */}
          <MyImage  image={article.image} />

          <div dangerouslySetInnerHTML={{ __html: article.text }}></div>
        </section>
      </main>
      <Footer />
    </>
  );
};

//this is server side rendering and it wont be built with npm run build because it needs a server for each time a request is made

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://mashriq.herokuapp.com/dash/v1/article/${params.id}`
  );
  const post = await res.json();

  return { props: { post: post } };
}

//this is static site generation the first block generates a page for each article in the api then the second block will send the approperiate one to the client as requested

// export async function getStaticPaths() {
//   const res = await fetch("https://mashriq.herokuapp.com/dash/v1/articles");
//   const posts = await res.json();

//   const paths = posts.articles.map((post) => ({
//     params: { id: post.id.toString() },
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   const res = await fetch(
//     `https://mashriq.herokuapp.com/dash/v1/article/${params.id}`
//   );
//   const post = await res.json();

//   return { props: { post } };
// }

export default Articles;
