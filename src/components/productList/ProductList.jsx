import "./productList.css";
import Product from "../product/Product";

import moviehub from "../../img/moviehub.png";
import venue from "../../img/venue.png";
import natour from "../../img/natour.png";
import amazon from "../../img/amazon.png";
import dashboard from "../../img/nextjs-employee.png";
import admin_dashboard from "../../img/admin-dashboard-mern.png";
import ai_image_alttextgenerator from "../../img/ai-imagealtgen-app.png";
import jobfinder_app from "../../img/jobfinder-app.png";
import excel_to_csv_and_table_converter from "../../img/exceltomuitable-app.png";
import codeshare from "../../img/codesnippet-app.png";
import medical_us_mapping from "../../img/medicalmap-app.png";

const ProductList = () => {
  const products = [
    {
      id: 1,
      img: admin_dashboard,
      link: "https://admin-frontend-d2zd.onrender.com/",
    },
    {
      id: 2,
      img: codeshare,
      link: "https://codeshare-reactquery.onrender.com/",
    },
    {
      id: 3,
      img: jobfinder_app,
      link: "https://edel-jobfinder.netlify.app/",
    },
    {
      id: 4,
      img: ai_image_alttextgenerator,
      link: "https://edel-openai-ai-generated-alt-text.netlify.app/",
    },
    {
      id: 5,
      img: moviehub,
      link: "https://edelmoviehub.netlify.app/",
    },
    {
      id: 6,
      img: excel_to_csv_and_table_converter,
      link: "https://edel-excel-to-muitable.netlify.app/",
    },
    {
      id: 7,
      img: dashboard,
      link: "https://employee-mgt.vercel.app/",
    },
    {
      id: 8,
      img: medical_us_mapping,
      link: "https://edel-mapping-unitedstates.netlify.app/",
    },
    {
      id: 9,
      img: natour,
      link: "https://edeliscoding.github.io/NaTours.github.io/",
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
