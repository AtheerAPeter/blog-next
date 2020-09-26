import { useEffect } from "react";

const About = (props) => {
  useEffect(() => {});
  console.log(props.data);
  return (
    <>
      <h1>about</h1>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`https://mashriq.herokuapp.com/dash/v1/articles`);
  const data = await res.json();

  return { props: { data } };
}

export default About;
