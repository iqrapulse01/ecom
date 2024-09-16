import React, { useState } from "react";
import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";

const Navigation = () => {
  const [isopenSidebarVal, setisopenSidebarVal] = useState(false)

  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 navPart1">
            <div className="catWrapper">
              <Button className="allCatTab align-items-center" onClick={() => setisopenSidebarVal(!isopenSidebarVal)}>
                <span className="icon1 mr-2">
                  <IoIosMenu />
                </span>
                <span className="text">All Categories</span>
                <span className="icon2 ml-2">
                  <FaAngleDown />
                </span>
              </Button>
              <div className={`sidebarNav ${isopenSidebarVal === true ? 'open' : ''}`}>
                <ul>
                  <li>
                    <Link to="/">
                      <Button>Resin Art <FaAngleRight className="ml-auto"/></Button>
                    </Link>
                    <div className="submenu">
                      <li>
                        <Link to="/">
                          <Button>clay Art</Button>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <Button>jewellery Art</Button>
                        </Link>
                        <Link to="/">
                          <Button>gift</Button>
                        </Link>
                      </li>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>beauty Art</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>clay Art</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>jewellery Art<FaAngleRight className="ml-auto"/></Button>
                      <div className="submenu">
                      <li>
                        <Link to="/">
                          <Button>clay Art</Button>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <Button>jewellery Art</Button>
                        </Link>
                        <Link to="/">
                          <Button>gift</Button>
                        </Link>
                        <Link to="/">
                          <Button>Panda craft</Button>
                        </Link>
                      </li>
                    </div>
                    </Link>
                    <Link to="/">
                      <Button>gift</Button>
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
          </div>

          <div
            className="col-sm-9 navPart2 d-flex
          align-items-center"
          >
            <ul className="list list-inline ml-auto">
              <li className="list-inline-item">
                <Link to="/">
                  {" "}
                  <Button>
                    {" "}
                    <CiHome /> &nbsp; Home
                  </Button>{" "}
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  {" "}
                  <Button>
                    {" "}
                    <CiHome /> &nbsp; Shop{" "}
                  </Button>
                </Link>
                <div className="submenu ">
                  <Link to="/">
                    <Button>Resin Art</Button>
                  </Link>
                  <Link to="/">
                    <Button>Clay Art</Button>
                  </Link>
                  <Link to="/">
                    <Button>Jewellery </Button>
                  </Link>
                  <Link to="/">
                    <Button>Earrings </Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <CiHome /> &nbsp;Resin Art{" "}
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <CiHome /> &nbsp;Jewellery{" "}
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <CiHome /> &nbsp;Clay Art{" "}
                  </Button>
                </Link>
              </li>

              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <CiHome /> &nbsp;Blog{" "}
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <CiHome /> &nbsp;About{" "}
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    {" "}
                    <CiHome /> &nbsp;Contact
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
