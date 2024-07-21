import { Alert } from "antd";
import { Button, ConfigProvider, Modal } from "antd";
import { TinyColor } from "@ctrl/tinycolor";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Overview } from "../Overview/Overview";
export const Order = ({ setSelectedKey }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const colors1 = ["#6253E1", "#04BEFE"];
  const getHoverColors = (colors) =>
    colors.map((color) => new TinyColor(color).lighten(5).toString());
  const getActiveColors = (colors) =>
    colors.map((color) => new TinyColor(color).darken(5).toString());

  const handleOrder = (orders) => {
    console.log({ orders });
    setIsModalOpen(true);
    // setSelectedKey(orders);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const isModal = true;
  return (
    <div style={{ padding: "20px" }}>
      <div style={{ marginBottom: "20px" }}>
        <Alert
          description="If an order has a status of waiting it means the previous order for that particular url/service has not yet finished. For example, if you place an order for youtube views and it's processing, any additional orders you place for youtube views for the same video will be put on the waiting list, until the initial order for youtube views has finished."
          type="info"
          showIcon
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          height: "120",
          color: "black",
          backgroundColor: "white",
          border: "1px solid white",
          borderRadius: "5PX",
          height: "200px",
        }}
      >
        <h3>No results found</h3>
        <span style={{ marginBottom: "25px" }}>
          It looks like you haven't place any orders yet. Choose your platform
          and create your first order.
        </span>
        <div>
          <ConfigProvider
            theme={{
              components: {
                Button: {
                  colorPrimary: `linear-gradient(135deg, ${colors1.join(
                    ", "
                  )})`,
                  colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(
                    colors1
                  ).join(", ")})`,
                  colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(
                    colors1
                  ).join(", ")})`,
                  lineWidth: 0,
                },
              },
            }}
          >
            <Button
              type="primary"
              size="large"
              onClick={() => {
                handleOrder("youtube");
              }}
            >
              Place order now
            </Button>
          </ConfigProvider>
        </div>
      </div>
      <Modal
        // title="Service Modal"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Overview isModal={isModal} setSelectedKey={setSelectedKey} />
      </Modal>
    </div>
  );
};
