import { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import MyImage from "../components/lazyload";

const Home = (props) => {
  const [data, setData] = useState([]);
  console.log(props.posts);
  useEffect(() => {
    setData(props.posts.articles);
  }, []);
  return (
    <>
      <Header />
      <main>
        <section className="home-cover">
          <img src="./images/coverpic.jpg" alt="" />

          {/* no lazy loading needed for the cover photo */}
          {/* <MyImage className="cover-img" image="./images/coverpic.jpg" /> */}
          <div className="overlay" id="overlay">
            <div className="container">
              <h1>Simple Blog.</h1>
              <p>A blog created by FikraCamps</p>
            </div>
          </div>
        </section>
        <section className="blog-list">
          <div className="container">
            <div className="blog-items">
              {data.map((item) => (
                <Card key={item.id} article={item} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/hello`);
  const posts = await res.json();

  return { props: { posts } };
}

// export async function getStaticProps() {
//   const res = await fetch("https://mashriq.herokuapp.com/dash/v1/articles");
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// }

export default Home;
