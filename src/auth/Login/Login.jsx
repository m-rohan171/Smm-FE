import { Button, Form, Input, Card } from "antd";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [form] = Form.useForm();
  // console.log({ service });
  const navigate = useNavigate();

  const onFinish = (values) => {
    navigate("/");
    console.log("Form Values:", values);
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
      <Card className="login-card">
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <h1 style={{ textAlign: "center", color: "rgb(97, 85, 197)" }}>
            Login
          </h1>
          <Form.Item
            style={{ color: "white" }}
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
