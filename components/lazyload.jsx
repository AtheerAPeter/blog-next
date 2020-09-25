import { LazyLoadImage } from "react-lazy-load-image-component";

const MyImage = ({ image }) => (
  <div>
    <LazyLoadImage
      alt={"image"}
      height="100%"
      src={image} // use normal <img> attributes as props
      width="100%"
    />
  </div>
);

export default MyImage;
