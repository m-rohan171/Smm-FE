import { Radio, Button, Badge, Space } from "antd";
import "./AddFunds.css";

export const AddFunds = () => {
  return (
    <div className="addfunds-main">
      <h2>Choose your package</h2>
      <div className="funds-container">
        <div className="funds-card-list">
          <Badge.Ribbon className="ribbon" text="+ 5 %">
            <div className="card-payment">
              <div className="card-body">
                <Radio></Radio>
                <p className="amount">$25</p>
              </div>
            </div>
          </Badge.Ribbon>
          <Badge.Ribbon className="ribbon" text="+ 20 %">
            <div className="card-payment">
              <div className="card-body">
                <Radio></Radio>
                <p className="amount">$50</p>
              </div>
            </div>
          </Badge.Ribbon>
          <Badge.Ribbon className="ribbon" text="+ 33 %">
            <div className="card-payment">
              <div className="card-body">
                <Radio></Radio>
                <p className="amount">$75</p>
              </div>
            </div>
          </Badge.Ribbon>
          <Badge.Ribbon className="ribbon" text="+ 50 %">
            <div className="card-payment">
              <div className="card-body">
                <Radio></Radio>
                <p className="amount">$100</p>
              </div>
            </div>
          </Badge.Ribbon>
          <Badge.Ribbon className="ribbon" text="+ 60 %">
            <div className="card-payment">
              <div className="card-body">
                <Radio></Radio>
                <p className="amount">$300</p>
              </div>
            </div>
          </Badge.Ribbon>
          <Badge.Ribbon className="ribbon" text="+ 80 %">
            <div className="card-payment">
              <div className="card-body">
                <Radio></Radio>
                <p className="amount">$500</p>
              </div>
            </div>
          </Badge.Ribbon>
        </div>
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
