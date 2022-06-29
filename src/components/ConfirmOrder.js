import React, { useState } from "react";

export default function ConfirmOrder() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
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
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <button className="order-button" type="submit">
          Bestellen
        </button>
        <p>{name}</p>
      </form>
    </div>
  );
}
