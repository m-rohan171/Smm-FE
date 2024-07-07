import { Button, Form, Input, Card } from "antd";
import { BaseUrl } from "../../BaseUrl/BaseUrl";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import axios from "axios";

export const Signup = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const dataToSend = {
      ...values,
      isAdmin: false,
    };

    const response = await axios.post(`${BaseUrl}/auth/register`, {
      data: dataToSend,
    });
    console.log("response", response);
    // navigate("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "2rem",
      }}
    >
      <Card className="signup-card">
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <h1 style={{ textAlign: "center", color: "rgb(97, 85, 197)" }}>
            Signup
          </h1>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please select a service" }]}
          >
            <Input placeholder="Enter Name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: false, message: "Please input the email" }]}
          >
            <Input placeholder="Enter emaild" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: false, message: "Please input the password" }]}
          >
            <Input placeholder="Enter password" />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirmpassword"
            rules={[{ required: false, message: "Please input the password" }]}
          >
            <Input placeholder="Enter confirm password" />
          </Form.Item>
          <Form.Item>
            <Button
              style={{ backgroundColor: "rgb(97, 85, 197)" }}
              type="primary"
              htmlType="submit"
              block
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
