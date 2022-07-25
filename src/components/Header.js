import React from "react";

export default function Header({translation}) {
  return (
    <header className="block">
      <div>
        <h1 className="header">{translation.heading}</h1>
      </div>
      {/* <div>
        <a href="#order-list">
          <h1>Bestellung</h1>
        </a>
      </div> */}
    </header>
  );
}
