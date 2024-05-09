"use client";

import { useEffect, useState } from "react";

function HomePage() {
  const [artist, setArtist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      fetch("/api/artists")
        .then((res) => res.json())
        .then((data) => {
          setArtist(data);
          setIsLoading(false);
        });
    } catch (error) {
      setError(error);
    }
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading artists</p>;

  return <div>{artist.name}</div>;
}

export default HomePage;
