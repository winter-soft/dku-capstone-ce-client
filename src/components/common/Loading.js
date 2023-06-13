import React, {useEffect} from "react";

const Loading = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const loadingElement = document.querySelector('.loading');
      if (loadingElement) {
        loadingElement.style.display = 'none';
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="loading">
      <div className="spinner-grow"></div>
    </div>
  );
};

export default Loading;