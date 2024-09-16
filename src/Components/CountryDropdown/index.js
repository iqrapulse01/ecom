import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
import Dialog from "@mui/material/Dialog";
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import Slide from "@mui/material/Slide";
import { MyContext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide {...props} direction="up" ref={ref} />;
});

const CountryDropdown = () => {
  const [isOpenModel, setisOpenModel] = useState(false);
  const context = useContext(MyContext);

  return (
    <>
      <Button className="countryDrop " onClick={() => setisOpenModel(true)}>
        <div className="info d-flex flex-column">
          <span className="lable">Your Location</span>
          <span className="name">Pakistan</span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog
        open={isOpenModel}
        onClose={() => setisOpenModel(false)}
        className="locationModel"
        TransitionComponent={Transition}
      >
        <h4>Choose Your Delivery Location</h4>
        <p>Enter Your address and I will specify the offer for your area.</p>
        <Button className="close_" onClick={() => setisOpenModel(false)}>
          <MdClose />
        </Button>
        <div className="selectSearch w-100">
          <Button>
            <IoIosSearch />
          </Button>
          <input type="text" placeholder="Search" />
        </div>
        <ul className="countryList mt-3">
          {context?.countryList?.length !== 0 &&
            context.countryList?.map((item, index) => {
              return (
                <li key={index}>
                  <Button onClick={() => setisOpenModel(false)}>{item.country}</Button>
                </li>
              );
            })}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropdown;
