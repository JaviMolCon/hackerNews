import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./NavBar";
import HackerNews from "./HackerNews";

const fetchStories = async () => {
  const response = await fetch(
    "http://hn.algolia.com/api/v1/search?query=foo&tags=story"
  );
  const stories = await response.json();
  console.log(stories.hits);
  return stories.hits;
};

function App() {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://hn.algolia.com/api/v1/search?tags=front_page"
      );
      const entries = await response.json();
      console.log(entries.hits);
      setStories(entries.hits);
    }
    fetchData();
  }, []);

  return (
    <>
      <Navbar />

      {stories.map((item, index) => (
        <HackerNews
          title={item.title.trim()}
          link={item.url}
          comments={item.num_comments}
          points={item.points}
          time={item.created_at_i}
          key={item.objectID}
        />
      ))}
    </>
  );
}

export default App;
