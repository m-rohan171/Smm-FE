import React, { useEffect, useState } from "react";
import { Layout, Menu, Button, Space } from "antd";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

import "./Dashboard.css"; // Create this file for custom styles if needed
import Sider from "antd/es/layout/Sider";
import { ServiceForm } from "../ServiceForm/Serviceform";
import { Overview } from "../Overview/Overview";
import { Setting } from "../Settings/Settings";
import { Order } from "../Orders/Orders";
import { AddFunds } from "../AddFunds/AddFunds";
import { useNavigate } from "react-router-dom";

const { Header, Content } = Layout;

const YouTubeService = [
  "Channel Scatter Youtube Views",
  "High Quality Youtube Views",
  "High Retention Youtube Views",
  "Real Youtube Views",
  "Youtube Community Post Likes",
  "Youtube Subscribers",
  "Youtube Video Likes",
  "Youtube Watch Hours",
];

const InstaService = [
  "High Quality Instagram Followers",
  "Instagram Views",
  "Very High Quality Instagram Likes",
];

const FacebookService = [
  "Facebook Post/Photo Likes",
  "Facebook Profile/Page Followers",
  "Facebook Video Views(10 sec retention)",
  "Real Facebook Page Likes (with followers)",
];

const TiktokService = [
  "Tiktok Followers",
  "Tiktok Video Likes",
  "Tiktok Video Views",
];

const LinkedInService = [
  "Linkedin Company Page Followers",
  "Linkedin Followers",
  "Followers Likes",
];

const TwiterService = [
  "High Quality Twiter Retweets",
  "Twiter Followers",
  "Twiter Impressions",
  "Twiter Likes/Favourites",
  "Twiter Video Views",
];

const items = [
  {
    key: "Overview",
    icon: <PieChartOutlined />,
    label: "Overview",
  },
  {
    key: "sub1",
    label: "Platforms",
    icon: <MailOutlined />,
    children: [
      {
        key: "youtube",
        label: "YouTube",
      },
      {
        key: "instagram",
        label: "Instagram",
      },
      {
        key: "tiktok",
        label: "Tiktok",
      },
      {
        key: "facebook",
        label: "Facebook",
      },
      {
        key: "twiter",
        label: "Twiter",
      },
      {
        key: "linkedin",
        label: "Linkedin",
      },
    ],
  },
  {
    key: "sub2",
    label: "Deposit",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "addfunds",
        label: "Add funds",
      },
      {
        key: "10",
        label: "History",
      },
    ],
  },
  {
    key: "orders",
    icon: <DesktopOutlined />,
    label: "Orders",
  },
  {
    key: "setting",
    icon: <ContainerOutlined />,
    label: "Settings",
  },
];

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("Overview");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    setToken(savedToken);
  }, []);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuClick = ({ key }) => {
    setSelectedKey(key);
  };

  const handleLogout = () => {
    localStorage.setItem("token", "");

    navigate("/login");
  };
  return (
    <div>
      <Layout className="dashboard">
        <Layout>
          <Header
            className="header"
            style={{
              backgroundColor: "rgb(97,85,197)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              className="logo"
              style={{ color: "white", fontSize: "30px", fontWeight: "bold" }}
            >
              LOGO
            </div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={selectedKey}
              style={{ flex: 1 }}
            >
              {/* Add any additional Menu.Items here if needed */}
            </Menu>
            <Space style={{ gap: "20px" }}>
              {/* <span style={{ color: "white" }}>Login</span> */}
              {token && (
                <Button
                  onClick={handleLogout}
                  type="primary"
                  style={{
                    backgroundColor: "rgb(253,206,75)",
                    color: "rgb(136,115,153)",
                  }}
                >
                  Logout
                </Button>
              )}
              <img
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                src="Ellipse 1.png"
                alt="avtar"
              />
            </Space>
          </Header>
        </Layout>
        <Layout
          style={{ backgroundColor: "rgb(255,255,255)" }}
          className="site-layout dashboard-layout"
        >
          <div className="layout" id="main-layout">
            <Sider
              defaultSelectedKeys={selectedKey}
              collapsible
              collapsed={collapsed}
              onCollapse={toggleCollapsed}
            >
              <div className="logo" />
              <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={selectedKey}
                defaultOpenKeys={["sub1"]}
                onClick={handleMenuClick}
                items={items}
              />
            </Sider>
            <Content className="content">
              {selectedKey === "youtube" ? (
                <ServiceForm
                  service={YouTubeService}
                  selectedKey={selectedKey}
                />
              ) : selectedKey === "Overview" ? (
                <Overview setSelectedKey={setSelectedKey} />
              ) : selectedKey === "instagram" ? (
                <ServiceForm service={InstaService} selectedKey={selectedKey} />
              ) : selectedKey === "tiktok" ? (
                <ServiceForm
                  service={TiktokService}
                  selectedKey={selectedKey}
                />
              ) : selectedKey === "facebook" ? (
                <ServiceForm
                  service={FacebookService}
                  selectedKey={selectedKey}
                />
              ) : selectedKey === "twiter" ? (
                <ServiceForm
                  service={TwiterService}
                  selectedKey={selectedKey}
                />
              ) : selectedKey === "linkedin" ? (
                <ServiceForm
                  service={LinkedInService}
                  selectedKey={selectedKey}
                />
              ) : selectedKey === "setting" ? (
                <Setting />
              ) : selectedKey === "orders" ? (
                <Order setSelectedKey={setSelectedKey} />
              ) : selectedKey === "addfunds" ? (
                <AddFunds />
              ) : (
                <div>Select a menu item to display content</div>
              )}
            </Content>
          </div>
        </Layout>
      </Layout>
    </div>
  );
};

export default Dashboard;
