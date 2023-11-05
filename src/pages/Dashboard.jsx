import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Pic Imports
import notification from "../assets/icons/notification.svg";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const history = useNavigate();
  const tosinToken = localStorage.getItem("user");
  const token = JSON.parse(tosinToken);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://nvmri.onrender.com/user/all/drugs", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.token}`,
          },
        });
        const data = await res.json();
        setData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <header>
        <div className="headerWrap">
          <nav className="topHeader">
            <h1>Dashboard</h1>
            <img
              onClick={() => history("../Notifications")}
              src={notification}
              alt="Bell Icon"
            />
          </nav>
        </div>
      </header>
      <main className="dash wrapper">
        <article onClick={() => history("../Human-Medicine")}>
          <p>Human Medicines</p>
          <p className="numAvailable">{data.length}</p>
        </article>
        <article onClick={() => history("../Animal-Medicine")}>
          <p>Animal Medicines</p>
          <p className="numAvailable">22</p>
        </article>
      </main>
    </>
  );
};

export default Dashboard;
