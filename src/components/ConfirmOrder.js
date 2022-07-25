import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ConfirmOrder({ orderItems, setOrderItems }) {
  const [user, setUser] = useState("");
  const [userDB, setUserDB] = useState([]); //users in DB
  const [table, setTable] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/users`)
      .then((res) => res.json())
      .then((results) => setUserDB(results)) //fetch users from tblUser DB
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!orderItems.length)
      return toast.error("Please select at least 1 drink");
    if (!user) return toast.error("Please enter a name");

    //check if user exists in DB
    const checkUser = userDB.find((tblUser) => tblUser.Benutzer === user);
    if (!checkUser) {
      return toast.error("Please register your name at Gühring Booth");
    } else {
      toast.success("Thank you for your order!");
    }

    fetch(`${process.env.REACT_APP_API}/orders`, {
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
      .then((res) => {
        setOrderItems([]);
        setUser("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="block">
      <h2>Mein Name</h2>
      <form className="form-group" onSubmit={handleSubmit}>
        {/* if onSubmit direct on button, it may bypass in Chrome by just click "Enter" */}
        <input
          className="form-control"
          type="text"
          placeholder="Max Mustermann"
          name="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <h2>Tisch Nummer</h2>
        <input
          className="form-control"
          type="text"
          value={table}
          onChange={(e) => setTable(e.target.value)}
        />
        <button className="order btn btn-primary btn-md col-12" type="submit">
          Bestellen
        </button>
        <ToastContainer />
      </form>
    </div>
  );
}
