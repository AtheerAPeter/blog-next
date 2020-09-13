import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section className="home-cover">
          <img src="./images/ee782db0-8576-11ea-a8c8-4115a993fbdf.png" alt="" />
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
              <Card name="first" />
              <Card name="second" />
              <Card name="third" />
              <Card name="fourth" />
              <Card name="fifth" />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
