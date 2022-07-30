import { Card, ProfileBar, SearchBar, SideBar } from "../../components/";
import "./home.scss";
import { data } from "../../data/articleCard";

export const Home = () => {
  // let screenWidth;
  // window.onload = () => {
  //   screenWidth = window.innerWidth;
  //   console.log(screenWidth);
  // };

  return (
    <div className="home">
      <SideBar />
      <div className="home-container">
        <SearchBar />
        <section id="article-of-day" className="article-of-day">
          <div className="flex-in-between">
            <h1 className="title">Article of The Day</h1>
            <div className="std-btn">View More</div>
          </div>

          <div className="img-container">
            <div className="text-container">
              <h1 className="title">
                How To Become Super Standout 3D NFT Artist
              </h1>
              <p className="sub-title">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nostrum pariatur dicta provident quibusdam sed.
              </p>
              <button className="std-btn">Read More</button>
            </div>
          </div>
        </section>

        <section id="match-for-you" className="match-for-you">
          <h1 className="title">Topic Match for You</h1>
          <div className="genre-tag-container">
            <button className="tags">Design</button>
            <button className="tags">Tech</button>
            <button className="tags">Programming</button>
            <button className="tags">Fiction</button>
          </div>
          <div className="card-container">
            {
              data.map((card, index) => (
                <Card data={card} key={index} />
              ))
            }
          </div>
        </section>
        <div className="abc"></div>
      </div>
      <ProfileBar />
    </div>
  );
};
