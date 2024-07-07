import { Button, Form, Input, Card, Switch } from "antd";
import "./Setting.css";

export const Setting = () => {
  const [form] = Form.useForm();
  //   console.log({ service });

  const onFinish = (values) => {
    console.log("Form Values:", values);
  };

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <Card className="setting-card">
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <h1 style={{ textAlign: "center" }}>Update account information</h1>
            <Form.Item
              label="Full Name"
              name="fullname"
              rules={[{ required: false, message: "Please select a service" }]}
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
              rules={[
                { required: false, message: "Please input the password" },
              ]}
            >
              <Input placeholder="Enter password" />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="confirmpassword"
              rules={[
                { required: false, message: "Please input the password" },
              ]}
            >
              <Input placeholder="Enter confirm password" />
            </Form.Item>
            <Form.Item
              label="Current password (we need your current password to confirm your changes)"
              name="currentpassword"
              rules={[
                {
                  required: false,
                  message: "Please input the current password",
                },
              ]}
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
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <h1 style={{ textAlign: "center" }}>
              Email notification preferences
            </h1>
            <Form.Item
              // label="Full Name"
              name="fullname"
              rules={[{ required: false, message: "Please select a service" }]}
            >
              <div style={{ display: "flex", gap: "10px" }}>
                <Switch defaultChecked onChange={onChange} />
                Completed Orders
              </div>
            </Form.Item>
            <Form.Item
              // label="Email"
              name="email"
              rules={[{ required: false, message: "Please input the email" }]}
            >
              <div style={{ display: "flex", gap: "10px" }}>
                <Switch defaultChecked onChange={onChange} />
                Completed Orders
              </div>
            </Form.Item>
            <Form.Item>
              <Button
                style={{ backgroundColor: "rgb(97, 85, 197)" }}
                type="primary"
                htmlType="submit"
                block
              >
                Save
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
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <h1 style={{ textAlign: "center" }}>Delete account</h1>
            <Form.Item
              // label="Full Name"
              name="fullname"
              rules={[{ required: false, message: "Please select a service" }]}
            >
              <div style={{ display: "flex", textAlign: "left" }}>
                If you want to permanently delete your account and all of its
                data (including your token balance), you can do that do that
                below. This action is not reversible!
              </div>
            </Form.Item>
            <Form.Item>
              <Button
                style={{ backgroundColor: "rgb(209,64,35)" }}
                type="primary"
                htmlType="submit"
                block
              >
                Delete my account
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};
