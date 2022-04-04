import React from "react";
import SinglePositible from "../../components/SinglePositible/SinglePositible";
import SingleDirection from "../../components/SingleDirection/SingleDirection";
const Posibilities = () => {
  const mobilePositiblesPart = [
    {
      title: "The Arts",
      image1: "3fca3f2bf3eedb56c0fb8f6b639f95eb.png",
      image2: "stack.svg",
    },
    {
      title: "Auto",
      image1: "cd7af7227338f6f737f5f261b4599b97.png",
      image2: "car.svg",
    },
    {
      title: "Technology",
      image1: "ae87819df597779d7891fa5fa677e606.png",
      image2: "tv.svg",
    },
    {
      title: "Remedial",
      image1: "79a99e34992112ebbe6b7127c324c722.png",
      image2: "remedial.svg",
    },
    {
      title: "Trades",
      image1: "cd28603089010e130342b8698ed4735b.png",
      image2: "auto.png",
    },
    {
      title: "Academics",
      image1: "4aaf61e989d730378655566343893c61.png",
      image2: "academics.svg",
    },
    {
      title: "Bussiness",
      image1: "2db5546585016329e1c859e5aea963ce.png",
      image2: "briefcase.svg",
    },
    {
      title: "Lifestyle",
      image1: "f0a8236cdf1e5dd6613ff6516b716f1b.png",
      image2: "single-user.svg",
    },
    {
      title: "Outdoors",
      image1: "28eac104e18745afc17bc95e443ed44d.png",
      image2: "compass.svg",
    },
    {
      title: "Health",
      image1: "507caad579a7293eaa8ccecbb3d22299.png",
      image2: "heartbeat.svg",
    },
    {
      title: "Language",
      image1: "77e19dd0a8f74df3dbe76a234be902ed.png",
      image2: "single-message.svg",
    },
    {
      title: "Sports &Games",
      image1: "95942996e77fb256a009b3112959eba1.png",
      image2: "sport.svg",
    },
  ];
  const mobileDirection = ["Teach", "Learn"];
  const laptopPositiblesPart = [
    {
      title: "The Arts",
      image1: "3fca3f2bf3eedb56c0fb8f6b639f95eb.png",
      image2: "stack.svg",
    },
    {
      title: "Technology",
      image1: "ae87819df597779d7891fa5fa677e606.png",
      image2: "tv.svg",
    },
    {
      title: "Auto",
      image1: "cd7af7227338f6f737f5f261b4599b97.png",
      image2: "car.svg",
    },
    {
      title: "Remedial",
      image1: "79a99e34992112ebbe6b7127c324c722.png",
      image2: "remedial.svg",
    },
    {
      title: "Academics",
      image1: "4aaf61e989d730378655566343893c61.png",
      image2: "academics.svg",
    },
    {
      title: "Trades",
      image1: "cd28603089010e130342b8698ed4735b.png",
      image2: "auto.png",
    },
    {
      title: "Sports &Games",
      image1: "95942996e77fb256a009b3112959eba1.png",
      image2: "sport.svg",
    },
    {
      title: "Bussiness",
      image1: "2db5546585016329e1c859e5aea963ce.png",
      image2: "briefcase.svg",
    },
    {
      title: "Outdoors",
      image1: "28eac104e18745afc17bc95e443ed44d.png",
      image2: "compass.svg",
    },
    {
      title: "Language",
      image1: "77e19dd0a8f74df3dbe76a234be902ed.png",
      image2: "single-message.svg",
    },
    {
      title: "Lifestyle",
      image1: "f0a8236cdf1e5dd6613ff6516b716f1b.png",
      image2: "single-user.svg",
    },
    {
      title: "Health",
      image1: "507caad579a7293eaa8ccecbb3d22299.png",
      image2: "heartbeat.svg",
    },
  ];
  return (
    <div className="possibility">
      <div className="row pd-bt-50 no-gutters">
        <div className="col-6">
          <div className="sub-title text-center">
            <h2>Infinite Possibilities</h2>
          </div>
        </div>
      </div>
      <div className="category row no-gutters">
        <div className="category-left row">
          <div className="col-lg-4 col-md-4 col-sm-6  single-col">
            <div className="single-col-inner">
              {laptopPositiblesPart.map((item, index) => {
                if (index <= 1)
                  return <SinglePositible key={index} data={item} />;
                else return <div></div>;
              })}
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 single-col">
            <div className="single-col-inner">
              {laptopPositiblesPart.map((item, index) => {
                if (index > 1 && index <= 4)
                  return <SinglePositible key={index} data={item} />;
                else return <div></div>;
              })}
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 single-col">
            <div className="single-col-inner">
              {laptopPositiblesPart.map((item, index) => {
                if (index === 5)
                  return <SinglePositible key={index} data={item} />;
                else return <div></div>;
              })}
              <SingleDirection data="Learn" />
            </div>
          </div>
        </div>
        <div className="category-right row">
          <div className="col-lg-4 col-md-4 col-sm-6 single-col">
            <div className="single-col-inner">
              <SingleDirection data="Teach" />
              {laptopPositiblesPart.map((item, index) => {
                if (index === 6)
                  return <SinglePositible key={index} data={item} />;
                else return <div></div>;
              })}
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 single-col">
            <div className="single-col-inner">
              {laptopPositiblesPart.map((item, index) => {
                if (index > 6 && index <= 9)
                  return <SinglePositible key={index} data={item} />;
                else return <div></div>;
              })}
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 single-col">
            <div className="single-col-inner">
              {laptopPositiblesPart.map((item, index) => {
                if (index > 9 && index <= 11)
                  return <SinglePositible key={index} data={item} />;
                else return <div></div>;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="category-mobile">
        {mobilePositiblesPart.map((item, index) => {
          if (index <= 6) return <SinglePositible key={index} data={item} />;
          else return <div></div>;
        })}
        {mobileDirection.map((item, index) => (
          <SingleDirection data={item} key={index} />
        ))}
        {mobilePositiblesPart.map((item, index) => {
          if (index > 6) return <SinglePositible key={index} data={item} />;
          else return <div></div>;
        })}
      </div>
    </div>
  );
};
export default Posibilities;
