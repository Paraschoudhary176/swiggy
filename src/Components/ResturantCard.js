import React from "react";

const ResturantCard = (props) => {
  const { resName, cusine, rating, deliveryTime, imageId, price } = props;

  return (
    <div
      style={{
        height: "auto",
        width: 220,
        border: "1px solid black",
        borderRadius: "10px",
        boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.2)",
        padding: "15px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
        marginTop: 10,
        marginRight: 10,
      }}
    >
      {/* Image */}
      <img
        alt="food img"
        style={{
          height: 120,
          width: 120,
          borderRadius: "10%",
          objectFit: "cover",
        }}
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${imageId}`}
      />

      {/* Card Content */}
      <h3 style={{ marginTop: "10px", marginBottom: "5px" }}>{resName}</h3>
      <p style={{ margin: "5px 0", fontSize: "14px", color: "gray" }}>
        {cusine}
      </p>
      <p style={{ margin: "5px 0", fontSize: "14px", fontWeight: "bold" }}>
        ⭐ {rating} Stars
      </p>
      <p style={{ margin: "5px 0", fontSize: "14px", color: "gray" }}>
        ⏳ {deliveryTime}
      </p>
      <p style={{ margin: "5px 0", fontSize: "14px", color: "gray" }}>
        💰Price: {price}
      </p>
    </div>
  );
};

export default ResturantCard;
