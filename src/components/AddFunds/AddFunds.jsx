import { Radio, Button, Badge, Space } from "antd";
import "./AddFunds.css";

export const AddFunds = () => {
  return (
    <div className="addfunds-main">
      <h2>Choose your package</h2>
      <div className="container">
            <div className="card-list">
        {/* <Space
          direction="vertical"
          size="middle"
          style={{
            width: "0%",
          }}
        > */}
          <Badge.Ribbon text="Hippies">
              <div className="card-payment">
                <div className="card-body">
                  <Radio></Radio>
                  <p className="amount">$25</p>
                </div>
              </div>
          </Badge.Ribbon>
        {/* </Space> */}

              <div className="card-payment">
                <div className="card-body">
                  <Radio></Radio>
                  <p className="amount">$50</p>
                </div>
              </div>
              <div className="card-payment">
                <div className="card-body">
                  <Radio></Radio>
                  <p className="amount">$75</p>
                </div>
              </div>
              <div className="card-payment">
                <div className="card-body">
                  <Radio></Radio>
                  <p className="amount">$100</p>
                </div>
              </div>
              <div className="card-payment">
                <div className="card-body">
                  <Radio></Radio>
                  <p className="amount">$250</p>
                </div>
              </div>
              <div className="card-payment">
                <div className="card-body">
                  <Radio></Radio>
                  <p className="amount">($500)</p>
                </div>
              </div>
            </div>
      </div>

      <div className="payment-info">
        <p className="payment-text">
          Pay $100 and top-up your account balance with $150
        </p>
      </div>
      <div style={{ marginBottom: "30px" }}>
        <Button
          style={{ backgroundColor: "rgb(97, 85, 197)", width: "50vw" }}
          type="primary"
          htmlType="submit"
          block
        >
          Checkout
        </Button>
      </div>
      <div>
        <Button
          style={{ backgroundColor: "rgb(97, 85, 197)", width: "50vw" }}
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
