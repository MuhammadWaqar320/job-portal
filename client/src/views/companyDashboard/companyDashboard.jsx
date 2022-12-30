import React from "react";
import Header from "./../../components/header/header";
import Footer from "./../../components/footer/footer";
import "./companyDashboard.scss";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import WorkIcon from "@mui/icons-material/Work";
import Person2Icon from "@mui/icons-material/Person2";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import StoreIcon from "@mui/icons-material/Store";
import PhonelinkLockIcon from "@mui/icons-material/PhonelinkLock";
import PostAddIcon from "@mui/icons-material/PostAdd";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ChangePassword from "./changePassword/changePassword";
import PostJob from "./postJob/postJob";
import AllApplication from "../common/allApplication/allApplication";
import ViewAllJobs from './../common/viewAllJobs/viewAllJobs';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function AdminDashboard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const userId = localStorage.getItem("id")
    ? Number(localStorage.getItem("id"))
    : 0;
  return (
    <div>
      <Header />
      <div className="container admin-section">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              centered
            >
              <Tab
                label="Post A Job"
                icon={<PostAddIcon />}
                {...a11yProps(0)}
              />
              <Tab
                label="All Applications"
                icon={<HowToRegIcon />}
                {...a11yProps(1)}
              />
              <Tab label="All Jobs" icon={<WorkIcon />} {...a11yProps(2)} />
              <Tab
                label="Change Password"
                icon={<PhonelinkLockIcon />}
                {...a11yProps(3)}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <PostJob id={userId} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <AllApplication />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <ViewAllJobs />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <ChangePassword id={userId} />
          </TabPanel>
        </Box>
      </div>
    </div>
  );
}

export default AdminDashboard;
