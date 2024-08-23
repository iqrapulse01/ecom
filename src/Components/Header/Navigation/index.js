import React from "react";
import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 navPart1">
            <Button className="allCatTab align-items-center">
              <span className="icon1 mr-2">
                <IoIosMenu />
              </span>
              <span className="text">All Categories</span>
              <span className="icon2 ml-2">
                <FaAngleDown />
              </span>
            </Button>
          </div>

          <div
            className="col-sm-9 navPart2 d-flex
          align-items-center"
          >
            <ul className="list list-inline ml-auto">
              <li className="list-inline-item">
                <Link to="/"> <Button> <CiHome/> &nbsp; Home</Button> </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"> <Button> <CiHome/> &nbsp; Shop </Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button><CiHome/> &nbsp;Resin Art </Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button><CiHome/> &nbsp;Jewellery </Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button><CiHome/> &nbsp;Clay Art </Button></Link>
              </li>
              
              <li className="list-inline-item">
                <Link to="/"><Button><CiHome/> &nbsp;Blog </Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button><CiHome/> &nbsp;About </Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button> <CiHome/> &nbsp;Contact</Button></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
