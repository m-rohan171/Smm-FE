import { useAxios } from "../../hooks/useAxios";
import { Button, Form, Input, Card } from "antd";
import { BaseUrl } from "../../BaseUrl/BaseUrl";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const passwordRules = [
  {
    required: true,
    message: "Please input the password",
  },
  {
    pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/,
    message:
      "Password must contain at least 1 capital letter, 1 special character, 1 number, and be at least 8 characters long",
  },
];

export const Signup = () => {
  // const { callAxios } = useAxios();

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { password, confirmpassword, ...restValues } = values;
    console.log({ password, confirmpassword });
    if (password !== confirmpassword) {
      toast.error("Passwords do not match", {
        position: "top-center",
      });
      return;
    }

    const dataToSend = {
      ...restValues,
      password, // Include password
      isAdmin: false,
    };

    try {
      const response = await axios.post(`${BaseUrl}/auth/register`, dataToSend);
      toast.success(response?.data?.message, {
        position: "top-center",
      });
      console.log("response", response);
      navigate("/login");
    } catch (error) {
      toast.error(error?.response?.data?.message, {
        position: "top-center",
      });
      console.error("Error during registration", error);
    }
  };

  const handleLogin = () => {
    navigate("/login");
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
            name="username"
            rules={[{ required: true, message: "Please input the name" }]}
          >
            <Input placeholder="Enter Name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input the email" }]}
          >
            <Input placeholder="Enter email" />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={passwordRules}>
            <Input.Password
              placeholder="Enter password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirmpassword"
            rules={[
              {
                required: true,
                message: "Please input the confirm password",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("confirm password does not match with password!")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="Enter confirm password"
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
          <a onClick={handleLogin}>Already have an account ? Login</a>
        </Form>
      </Card>
    </div>
  );
};
