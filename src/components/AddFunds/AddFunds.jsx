import { Radio, Button, Badge, Space } from "antd";
import "./AddFunds.css";
import { useState } from "react";

export const AddFunds = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleRadioChange = (e) => {
    setSelectedValue(e.target.value);
  };
  return (
    <div className="addfunds-main">
      <h2>Choose your package</h2>
      <div className="funds-container">
        <Radio.Group onChange={handleRadioChange} value={selectedValue}>
          <div className="funds-card-list">
            <Badge.Ribbon className="ribbon" text="+ 5 %">
              <div className="card-payment">
                <div className="card-body">
                  <Radio value={25}></Radio>
                  <p className="amount">$25</p>
                </div>
              </div>
            </Badge.Ribbon>
            <Badge.Ribbon className="ribbon" text="+ 20 %">
              <div className="card-payment">
                <div className="card-body">
                  <Radio value={50}></Radio>
                  <p className="amount">$50</p>
                </div>
              </div>
            </Badge.Ribbon>
            <Badge.Ribbon className="ribbon" text="+ 33 %">
              <div className="card-payment">
                <div className="card-body">
                  <Radio value={75}></Radio>
                  <p className="amount">$75</p>
                </div>
              </div>
            </Badge.Ribbon>
            <Badge.Ribbon className="ribbon" text="+ 50 %">
              <div className="card-payment">
                <div className="card-body">
                  <Radio value={100}></Radio>
                  <p className="amount">$100</p>
                </div>
              </div>
            </Badge.Ribbon>
            <Badge.Ribbon className="ribbon" text="+ 60 %">
              <div className="card-payment">
                <div className="card-body">
                  <Radio value={300}></Radio>
                  <p className="amount">$300</p>
                </div>
              </div>
            </Badge.Ribbon>
            <Badge.Ribbon className="ribbon" text="+ 80 %">
              <div className="card-payment">
                <div className="card-body">
                  <Radio value={500}></Radio>
                  <p className="amount">$500</p>
                </div>
              </div>
            </Badge.Ribbon>
          </div>
        </Radio.Group>
      </div>

      <div className="payment-info">
        <p className="payment-text">
          Pay $100 and top-up your account balance with $150
        </p>
      </div>
      <div style={{ marginBottom: "30px" }}>
        <Button
          style={{ backgroundColor: "rgb(97, 85, 197)", width: "42vw" }}
          type="primary"
          htmlType="submit"
          block
        >
          Proceed to Checkout
        </Button>
      </div>
      <div>
        <Button
          style={{ backgroundColor: "rgb(97, 85, 197)", width: "42vw" }}
          type="primary"
          htmlType="submit"
          block
        >
          Pay with squeezy
        </Button>
      </div>
    </div>
  );
};
