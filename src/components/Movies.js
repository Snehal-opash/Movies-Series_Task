
import { useState } from "react";

function Movies(props) {
  const [imageLoadError, setImageLoadError] = useState(true);

  const fallbackImage =
    "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-23.jpg";

  return (
    <div className="main">
      <div className="sub">
        <img
          src={props.url}
          alt=""
          onError={(e) => {
            if (imageLoadError) {
              setImageLoadError(false);
              e.target.src = fallbackImage;
            }
          }}
        />
      </div>
      <p>{props.titlename}</p>
    </div>
  );
}

export default Movies;