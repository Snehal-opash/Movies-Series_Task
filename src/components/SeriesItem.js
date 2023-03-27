import data from ".//sample.json";
import Series from "./Series";
import { useEffect, useState } from "react";

function SeriesItem() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [lists, setList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const Items = data.entries;

    if (!Items) {
      setError(true);
    } else {
      setError(false);
    }

    let x = 0;
    const filteredItems = [];
    for (let i of Items) {
      if (i.releaseYear >= 2010 && i.programType === "series") {
        filteredItems.push(i);
      }
    }
    const nameAssendingSeries = filteredItems.sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, 21);

    const delay = setTimeout(() => {
      setList(nameAssendingSeries);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      {!isLoading ? (
        <div className="main_box">
          {lists.map((item, index) => (
            <Series
              titlename={item.title}
              key={index}
              url={item.images["Poster Art"].url}
            />
          ))}
        </div>
      ) : (
        <p className="info">Loading...!</p>
      )}
      {isError && <p  className="info">SomeThing Went Wrong...!</p>}
    </>
  );
}

export default SeriesItem;
