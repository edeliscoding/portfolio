import "./productList.css";
import Product from "../product/Product";
// import { products } from "../../data";
import photogram from "../../img/Photogram.png";
import myblog from "../../img/MyBlog.png";
import moviehub from "../../img/moviehub.png";
import venue from "../../img/venue.png";
import natour from "../../img/natour.png";
import amazon from "../../img/amazon.png";

const ProductList = () => {
  const products = [
    {
      id: 1,
      img: photogram,
      link: "https://iphotogram.netlify.app",
    },
    {
      id: 2,
      img: myblog,
      link: "https://edelblog.herokuapp.com/",
    },
    {
      id: 3,
      img: moviehub,
      link: "https://edelmoviehub.netlify.app/",
    },
    {
      id: 4,
      img: venue,
      link: "https://edeliscoding.github.io/The_Venue/",
    },
    {
      id: 5,
      img: natour,
      link: "https://edeliscoding.github.io/NaTours.github.io/",
    },
    {
      id: 6,
      img: amazon,
      link: "https://clone-73a47.firebaseapp.com/",
    },
  ];

  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Check out my projects!</h1>
        <p className="pl-desc">
          Technologies used in my projects include React, Express, MongoDB,
          Redux, Firebase, SQL, Node, Material-UI, SASS, Photoshop, GIT,
          Bootstrap, WordPress, PhP, and many more.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
