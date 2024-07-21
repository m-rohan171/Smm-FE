import { Button, Form, Input, Card, Switch, Modal } from "antd";
import "./Setting.css";
import axios from "axios";
import { BaseUrl } from "../../BaseUrl/BaseUrl";
import { toast } from "react-toastify";
import { useState } from "react";
import { Spinner } from "../../shared/spinner";
import { useNavigate } from "react-router-dom";

export const Setting = () => {
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form] = Form.useForm();
  const navigate = useNavigate();
  //   console.log({ service });

  const onFinish = async (values) => {
    console.log("Form Values:", values);
    const token = localStorage.getItem("token");
    setLoading(true);

    try {
      const response = await axios.put(`${BaseUrl}/user/profile`, values, {
        headers: {
          Authorization: `Bearer ${token}`, // Set the Authorization header
        },
      });

      if (response.data.status === 200) {
        setLoading(false);

        toast.success(response.data.message, {
          position: "top-center",
        });
      } else {
        console.log("response", response);
        toast.error(response.data.message, {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log({ error });
      toast.error(error.response?.data?.message || "Something went wrong", {
        position: "top-center",
      });
    }
  };
  const handleDelete = async () => {
    setIsModalOpen(true);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOk = async () => {
    const token = localStorage.getItem("token");
    setLoading(true);

    try {
      const response = await axios.delete(`${BaseUrl}/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.status === 200) {
        setLoading(false);
        localStorage.removeItem("token");

        toast.success(response.data.message, {
          position: "top-center",
        });
        navigate("/login");
      } else {
        console.log("response", response);
        toast.error(response.data.message, {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log({ error });
      toast.error(error.response?.data?.message || "Something went wrong", {
        position: "top-center",
      });
    }
    setIsModalOpen(false);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "2rem",
          position: "relative",
        }}
      >
        <Modal
          // title="Service Modal"
          open={isModalOpen}
          onCancel={handleCancel}
          onOk={handleOk}
        >
          <p>Are you sure you want to delete your account?</p>
        </Modal>
        {loading && <Spinner />}
        <Card className="setting-card">
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <h1 style={{ textAlign: "center" }}>Update account information</h1>
            <Form.Item
              label="Full Name"
              name="fullname"
              rules={[{ required: false, message: "Please input a fullname" }]}
            >
              <Input placeholder="Enter Name" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              // rules={[{ required: false, message: "Please input the email" }]}
            >
              <Input placeholder="Enter email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              // rules={[
              //   { required: false, message: "Please input the password" },
              // ]}
            >
              <Input placeholder="Enter password" />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="confirmpassword"
              // rules={[
              //   {
              //     required: false,
              //     message: "Please input the confirm password",
              //   },
              // ]}
            >
              <Input placeholder="Enter confirm password" />
            </Form.Item>
            <Form.Item
              label="Current password (we need your current password to confirm your changes)"
              name="currentpassword"
              // rules={[
              //   {
              //     required: false,
              //     message: "Please input the current password",
              //   },
              // ]}
            >
              <Input placeholder="Enter current current password" />
            </Form.Item>

            <Form.Item>
              <Button
                style={{ backgroundColor: "rgb(97, 85, 197)" }}
                type="primary"
                htmlType="submit"
                block
              >
                Update
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <Card className="setting-card">
          <h1 style={{ textAlign: "center" }}>
            Email notification preferences
          </h1>
          <Form.Item
            // label="Full Name"
            name="completeorder"
          >
            <div style={{ display: "flex", gap: "10px" }}>
              <Switch defaultChecked onChange={onChange} />
              Completed Orders
            </div>
          </Form.Item>
          <Form.Item
            // label="Email"
            name="cancelorder"
          >
            <div style={{ display: "flex", gap: "10px" }}>
              <Switch defaultChecked onChange={onChange} />
              Cancelled Orders
            </div>
          </Form.Item>
          <Form.Item>
            <Button
              style={{ backgroundColor: "rgb(97, 85, 197)" }}
              type="primary"
              // htmlType="submit"
              block
            >
              Save
            </Button>
          </Form.Item>
          {/* </Form> */}
        </Card>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <Card className="setting-card">
          {/* <Form form={form} layout="vertical"> */}
          <h1 style={{ textAlign: "center" }}>Delete account</h1>
          <Form.Item
            // label="Full Name"
            name="deleteaccount"
          >
            <div style={{ display: "flex", textAlign: "left" }}>
              If you want to permanently delete your account and all of its data
              (including your token balance), you can do that do that below.
              This action is not reversible!
            </div>
          </Form.Item>
          <Form.Item>
            <Button
              style={{ backgroundColor: "rgb(209,64,35)" }}
              type="primary"
              // htmlType="submit"
              onClick={handleDelete}
              block
            >
              Delete my account
            </Button>
          </Form.Item>
          {/* </Form> */}
        </Card>
      </div>
    </div>
  );
};
