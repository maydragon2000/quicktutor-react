import React from "react";
import DownloadApp from "../../components/DownloadApp/DownloadApp";
import NormalButton from "../../components/NormalButton";
const Header = () => {
    return (
      <div className="header row no-gutters">
        <div
          className="header-img col-lg-6 col-md-6"
          style={{
            backgroundImage:
              "url(" +
              "assets/image/68f6498c0df2149a13134006a3c918be.png" +
              ")",
          }}
        >
          <DownloadApp classVal="header-img-inner justify-content-center" />
        </div>
        <div className="col-lg-6 col-md-6 header-right">
          <div className=" header-learn ">
            <h2 className="">Learn Anything</h2>
            <NormalButton class="" value="Learn" url="#" image="right@1x.svg" />
          </div>
          <div className="header-teach ">
            <h2 className="">Teach Anyone</h2>
            <NormalButton class="" value="Teach" url="#" image="right@1x.svg" />
          </div>
        </div>
      </div>
    );
}
export default Header;