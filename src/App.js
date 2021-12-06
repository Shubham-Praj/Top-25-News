// import NewsTabs from "./Components/NewsTabs";
import { useEffect, useState } from "react";
import NewsCards from "./Components/NewsCards";
import NewsTabs from "./Components/NewsTabs";
import TopNavBar from "./Components/TopNavBar";
import React from "react";

function App() {
  const [news, setnews] = useState([]);

  async function getnews(SelectedtabName) {
    console.log("in getnews :-", SelectedtabName);
    const res = await fetch(
      `https://inshorts.vercel.app/news?category=${SelectedtabName}`
    );
    const data = await res.json();
    setnews(data.articles);
  }

  useEffect(() => {
    getnews("all");
  }, []);

  return (
    <div>
      {/* <div style={{height : '300px'}}>
        <img src = {elogo}></img>

      </div> */}
      <TopNavBar></TopNavBar>
      <NewsTabs getnews={getnews}></NewsTabs>
      <div className="cardHolder">
        {news.map((newdata, index) => (
          <NewsCards newdata={newdata} key={index}></NewsCards>
        ))}
      </div>
    </div>
  );
}

export default App;
