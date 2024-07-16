import { Button, Form, Input, Card } from "antd";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { BaseUrl } from "../../BaseUrl/BaseUrl";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

export const Login = () => {
  const [form] = Form.useForm();
  // console.log({ service });
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await axios.post(`${BaseUrl}/auth/login`, values);
      if (response.data.status === 200) {
        toast.success(response?.data?.message, {
          position: "top-center",
        });
        const token = response?.data?.token;

        localStorage.setItem("token", token);

        navigate("/");
      } else {
        console.log("response", response);
        toast.error(response?.data?.message, {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log({ error });
      // toast.error(error.response.data.message);
      toast.error(error.response.data.message, {
        position: "top-center",
      });
    }
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
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
            rules={[{ required: true, message: "Please input the email" }]}
          >
            <Input placeholder="Enter email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input the password" }]}
          >
            <Input.Password
              placeholder="Enter password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
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
          <a onClick={handleSignup}>Don't have an account ? Signup</a>
        </Form>
      </Card>
    </div>
  );
};
