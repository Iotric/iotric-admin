import React, { useState, useEffect } from "react";
import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import InvitationsTable from "../../components/datatable/invitations/Datatable";
import CustomDrawer from "../../components/Drawer/CustomDrawer";
import { fetchAllAdmins } from "../../redux/actions/admin-actions";

import { useDispatch } from "react-redux";
import { Box, Tab, Tabs, Typography } from "@mui/material";

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

const List = () => {
  const dispatch = useDispatch();

  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    dispatch(fetchAllAdmins());
  }, []);

  const handleTabChange = (e, newValue) => {
    setTabValue(newValue);
  };
  return (
    <Box>
      <Navbar />

      <div className="list">
        <Sidebar />
        <Box className="listContainer">
          <CustomDrawer />
          <div className="users">
            <Box className="tabs-container">
              <Tabs value={tabValue} onChange={handleTabChange}>
                <Tab label="Users" />
                <Tab label="Invitations" />
              </Tabs>
            </Box>

            <TabPanel value={tabValue} index={0}>
              <Datatable />
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              <InvitationsTable />
            </TabPanel>
          </div>
        </Box>
      </div>
    </Box>
  );
};

export default List;
