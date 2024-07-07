import { Button, Form, Input, Card, Select } from "antd";
import "./Serviceform.css";

const { Option } = Select;

export const ServiceForm = (service) => {
  const [form] = Form.useForm();
  console.log({ service });

  const onFinish = (values) => {
    console.log("Form Values:", values);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Card className="service-card">
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <h1 style={{ textAlign: "center" }}>Submit New Order</h1>
          <Form.Item
            label="Service"
            name="service" // Add the name prop
            rules={[{ required: true, message: "Please select a service" }]}
          >
            <Select placeholder="Select a service">
              {service?.service?.map((service, index) => (
                <Option key={index} value={service}>
                  {service}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Quantity"
            name="quantity" // Add the name prop
            rules={[{ required: false, message: "Please input the quantity" }]}
          >
            {/* <span>Minimum: 50 • Maximum: 60000</span> */}
            <Input placeholder="Quantity" />
          </Form.Item>
          <Form.Item
            label="URL"
            name="url" // Add the name prop
            rules={[{ required: false, message: "Please input the URL" }]}
          >
            {/* <span>
              Format: https://twitter.com/yourusername/status/tweetid - make
              sure twitter account is public!
            </span> */}
            <Input placeholder="URL" />
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
