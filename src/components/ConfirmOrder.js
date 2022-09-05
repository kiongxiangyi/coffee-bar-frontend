import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

export default function ConfirmOrder({ orderItems, setOrderItems, locale }) {
  const [user, setUser] = useState("");
  const [userDB, setUserDB] = useState([]); //users in DB
  const [table, setTable] = useState("");

  const { t } = useTranslation();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/users`)
      .then((res) => res.json())
      .then((results) => setUserDB(results)) //fetch users from tblUser DB
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!orderItems.length) return toast.error(t("selectDrink"));
    if (!user) return toast.error(t("inputName"));

    //check if pin exists in DB
    let md5 = require("md5");
    let md5User = md5(user);
    //console.log("md5: ", md5User);

    let bcrypt = require("bcryptjs");
    bcrypt.hash(md5User, "$2a$11$5ojifDAswy9s6eYlH8cuoO", function (err, hash) { //hash with GTMS defined string
      // Store hash in your password DB.
      //console.log("hash: ", hash);

      const findUser = userDB.find((tblUser) => tblUser.Pin === hash);
      //console.log("match: ", findUser);
      if (!findUser) {
        return toast.error(t("registerName"));
      } else {
        toast.success(t("thankYou"));
      }
      
    });

    fetch(`${process.env.REACT_APP_API}/orders`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        user,
        orderItems,
        table,
        locale,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setOrderItems([]);
        setUser("");
        setTable("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="block">
      <h2>{t("name")}</h2>
      <form className="form-group background" onSubmit={handleSubmit}>
        {/* if onSubmit direct on button, it may bypass in Chrome by just click "Enter" */}
        <input
          className="form-control"
          type="text"
          name="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <h2>{t("tableNumber")}</h2>
        <input
          className="form-control"
          type="text"
          name="table"
          value={table}
          onChange={(e) => setTable(e.target.value)}
        />
        <button className="order btn btn-md col-12" type="submit">
          {t("order")}
        </button>
        <ToastContainer />
      </form>
    </div>
  );
}
