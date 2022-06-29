import React, { useState } from "react";

export default function ConfirmOrder({ orderItems }) {
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!orderItems.length) return alert("Please select at least 1 drink");
    if (!user) return alert("Please enter a name");

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
        </button>
      </form>
    </div>
  );
}
