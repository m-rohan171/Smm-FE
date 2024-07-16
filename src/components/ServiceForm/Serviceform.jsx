import { Button, Form, Input, Card, Select } from "antd";
import "./Serviceform.css";
import axios from "axios";
import { toast } from "react-toastify";
import { BaseUrl } from "../../BaseUrl/BaseUrl";
import { useState } from "react";
import { Spinner } from "../../shared/spinner";

const { Option } = Select;

export const ServiceForm = (service) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  console.log({ service });

  const onFinish = async (values) => {
    const payload = {
      ...values,
      platform: service.selectedKey,
    };
    setLoading(true);
    console.log("Form Values:", payload);

    const token = localStorage.getItem("token"); // Retrieve the token from local storage

    try {
      const response = await axios.post(`${BaseUrl}/orders/create`, payload, {
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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {loading && <Spinner />}
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
            rules={[{ required: true, message: "Please input the quantity" }]}
          >
            {/* <span>Minimum: 50 • Maximum: 60000</span> */}
            <Input placeholder="Quantity" />
          </Form.Item>
          <Form.Item
            label="URL"
            name="url" // Add the name prop
            rules={[{ required: true, message: "Please input the URL" }]}
          >
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
