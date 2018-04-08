import React from "react";
import classnames from "classnames";

const CardAmount = ({ amount, paid }) => (
  <div
    className={classnames({
      "card-amount": true,
      "paid": paid,
      "unpaid": !paid
    })}
  >
    <h3 className="amount">${amount} US</h3>
    <h4 className="status">{paid ? "PAID" : "UNPAID"}</h4>
  </div>
);

export default CardAmount;
