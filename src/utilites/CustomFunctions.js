import bike from "../assets/images/bike.png";
import bus from "../assets/images/bus.png";
import car from "../assets/images/car.png";
import train from "../assets/images/train.png";
export const getRideitemImg = (rideItem) => {
  let traffic = "";
  if (rideItem === "car") {
    traffic = car;
  } else if (rideItem === "bike") {
    traffic = bike;
  } else if (rideItem === "bus") {
    traffic = bus;
  } else if (rideItem === "train") {
    traffic = train;
  } else {
    traffic = "";
  }
  return traffic;
};
