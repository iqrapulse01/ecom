import React from "react";
import { IoIosSearch } from "react-icons/io";
import Button from "@mui/material/Button";

const SearchBox = () => {
  return (
    <>
      {/* Header Search starts  */}
      <div className="headerSearch ml-3 mr-3">
        <input type="text" placeholder="Search" />
        <Button>
          <IoIosSearch />
        </Button>
      </div>
      {/* Header Search ends  */}
    </>
  );
};

export default SearchBox;
