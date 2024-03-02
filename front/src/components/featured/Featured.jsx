// import useFetch from "../../hooks/useFetch";
// import "./featured.css";

// const Featured = () => {

//   const {data, loading, error} = useFetch("/vehicles/countByVehicles")

//   return (
//     <div className="featured">
//       {loading ? (
//         "Loading please wait"
//       ): (
//       <><div className="featuredItem">
//         <img
//           src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
//           alt=""
//           className="featuredImg"
//         />
//         <div className="featuredTitles">
//           <h1>Fleet</h1>
//           <h2>{data.count} properties</h2>
//         </div>
//       </div>
      
//       <div className="featuredItem">
//         <img
//           src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
//           alt=""
//           className="featuredImg"
//         />
//         <div className="featuredTitles">
//           <h1>Photographers</h1>
//           <h2>533 people</h2>
//         </div>
//       </div>
//       <div className="featuredItem">
//         <img
//           src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
//           alt=""
//           className="featuredImg"
//         />
//         <div className="featuredTitles">
//           <h1>Luxury</h1>
//           <h2>532 properties</h2>
//         </div>
//       </div></>)}
//     </div>
//   );
// };

// export default Featured;



//-----------


import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {

  const {data, loading, error} = useFetch("/vehicles/countByVehicles")

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ): (
      <><div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/1280560/pexels-photo-1280560.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Fleet</h1>
          <h2>{data.count} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/1854873/pexels-photo-1854873.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Photographers</h1>
          <h2>533 people</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/10394786/pexels-photo-10394786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Luxury</h1>
          <h2>532 properties</h2>
        </div>
      </div></>)}
    </div>
  );
};

export default Featured;
