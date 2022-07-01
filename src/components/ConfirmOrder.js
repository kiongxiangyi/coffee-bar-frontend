import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ConfirmOrder({ orderItems }) {
  const [user, setUser] = useState("");
  const [userDB, setUserDB] = useState([]); //users in DB

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((results) => setUserDB(results)) //fetch users from tblUser DB
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!orderItems.length)
      return toast.error("Please select at least 1 drink");
    if (!user) return toast.error("Please enter a name");
    //if not found user in DB, deny order
    //check if user exists in DB
    const checkUser = userDB.find((tblUser) => tblUser.Benutzer === user);
    if (checkUser) {
      toast.success("Thank you for your order!");
    } else {
      toast.error("Please register your name at Gühring Booth");
    }

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        user,
        orderItems,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="block col-1">
      <h2>Mein Name...</h2>
      <form onSubmit={handleSubmit}>
        {" "}
        {/* if onSubmit direct on button, it may bypass in Chrome by just click "Enter" */}
        <input
          type="text"
          placeholder="Max Mustermann"
          name="user"
          onChange={(e) => setUser(e.target.value)}
        />
        <button className="order-button" type="submit">
          Bestellen
        </button>{" "}
        <ToastContainer />
      </form>
    </div>
  );
}
