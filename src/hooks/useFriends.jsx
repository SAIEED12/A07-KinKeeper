import React, { useEffect, useState } from "react";

const useFriends = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = fetch("/data.json");
      const data = res.json();
      setTimeout(() => {
        setFriends(data);
        setLoading(false);
      }, 1500);
    };
    fetchData();
  }, []);

  console.log(friends);
  return <div></div>;
};

export default useFriends;
