// import "./propertyList.css";
// import useFetch from "../../hooks/useFetch";

// const PropertyList = () => {

//   const {data, loading, error} = useFetch("/vehicles/countByType?types=Car,Van,Bus,SUV,Threewheel")

//   return (
//     <div className="pList">
//       {loading ? (
//         "Loading please wait"
//         ) : (
//         <>
//         <div className="pListItem">
//         <img
//           src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
//           alt=""
//           className="pListImg"
//         />
//         <div className="pListTitles">
//           <h1>Cars</h1>
//           <h2>{data[0]} cars</h2>
//         </div>
//       </div>
//       <div className="pListItem">
//         <img
//           src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
//           alt=""
//           className="pListImg"
//         />
//         <div className="pListTitles">
//           <h1>Vans</h1>
//           <h2>{data[1]} vans</h2>
//         </div>
//       </div>
//       <div className="pListItem">
//         <img
//           src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
//           alt=""
//           className="pListImg"
//         />
//         <div className="pListTitles">
//           <h1>Buses</h1>
//           <h2>{data[2]} buses</h2>
//         </div>
//       </div>
//       <div className="pListItem">
//         <img
//           src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
//           alt=""
//           className="pListImg"
//         />
//         <div className="pListTitles">
//           <h1>SUV</h1>
//           <h2>{data[3]} SUV</h2>
//         </div>
//       </div>
//       <div className="pListItem">
//         <img
//           src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
//           alt=""
//           className="pListImg"
//         />
//         <div className="pListTitles">
//           <h1>Threewheels</h1>
//           <h2>{data[4]} threewheels</h2>
//         </div>
//       </div> 
//       </>
//         )}
//     </div>
//   );
// };

// export default PropertyList;



//--------

import "./propertyList.css";
import useFetch from "../../hooks/useFetch";

const PropertyList = () => {

  const {data, loading, error} = useFetch("/vehicles/countByType?types=Car,Van,Bus,SUV,Threewheel")

  return (
    <div className="pList">
      {loading ? (
        "Loading please wait"
        ) : (
        <>
        <div className="pListItem">
        <img
          src="https://images.pexels.com/photos/376361/pexels-photo-376361.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Cars</h1>
          <h2>{data[0]} cars</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.pexels.com/photos/3796556/pexels-photo-3796556.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Vans</h1>
          <h2>{data[1]} vans</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.pexels.com/photos/2942172/pexels-photo-2942172.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Buses</h1>
          <h2>{data[2]} buses</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.pexels.com/photos/2676096/pexels-photo-2676096.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>SUV</h1>
          <h2>{data[3]} SUV</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.pexels.com/photos/1682748/pexels-photo-1682748.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Threewheels</h1>
          <h2>{data[4]} threewheels</h2>
        </div>
      </div> 
      </>
        )}
    </div>
  );
};

export default PropertyList;
