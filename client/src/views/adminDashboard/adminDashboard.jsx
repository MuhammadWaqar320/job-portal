import React from "react";
import Header from "./../../components/header/header";
import Footer from "./../../components/footer/footer";
import "./adminDashboard.scss";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import WorkIcon from "@mui/icons-material/Work";
import Person2Icon from "@mui/icons-material/Person2";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import StoreIcon from "@mui/icons-material/Store";
import PhonelinkLockIcon from "@mui/icons-material/PhonelinkLock";
import AllCompany from "./allCompany/allCompany";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AllUser from "./allUser/allUser";
import ViewAllJobs from "../common/viewAllJobs/viewAllJobs";
import AdminChangePassword from "./changePassword/adminChangePassword";
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
  const userId = localStorage.getItem("id")
    ? Number(localStorage.getItem("id"))
    : 0;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
              <Tab label="All Jobs" icon={<WorkIcon />} {...a11yProps(2)} />
              <Tab
                label="All Companies"
                icon={<StoreIcon />}
                {...a11yProps(1)}
              />
              <Tab label="All Users" icon={<Person2Icon />} {...a11yProps(0)} />
              <Tab
                label="Change Password"
                icon={<PhonelinkLockIcon />}
                {...a11yProps(3)}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={2}>
            <AllUser />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <AllCompany />
          </TabPanel>
          <TabPanel value={value} index={0}>
            <ViewAllJobs />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <AdminChangePassword id={userId} />
          </TabPanel>
        </Box>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default AdminDashboard;
