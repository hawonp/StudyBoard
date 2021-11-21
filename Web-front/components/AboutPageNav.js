import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function AboutPageNav() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "auto",
        margin: "1rem 1rem",
        borderRadius: "8px",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="About" {...a11yProps(0)} />
        <Tab label="Leadership" {...a11yProps(1)} />
        <Tab label="Contact US" {...a11yProps(2)} />
      </Tabs>

      {/* about */}
      <TabPanel value={value} index={0}>
        <br />

        <Container>
          <div className="main-timeline">
            <div className="timeline">
              <div className="icon"></div>
              <div className="date-content">
                <div className="date-outer">
                  <span className="date">
                    <span className="month">Frist</span>
                    <span className="year">1</span>
                  </span>
                </div>
              </div>
              <div className="timeline-content">
                <h5 className="title">Why do you need our service?</h5>
                <p className="description">
                  StudyBoard's community-based, information-providing service to
                  answer your questions is like no other
                </p>
              </div>
            </div>

            <div className="timeline">
              <div className="icon"></div>
              <div className="date-content">
                <div className="date-outer">
                  <span className="date">
                    <span className="month">Second</span>
                    <span className="year">2</span>
                  </span>
                </div>
              </div>
              <div className="timeline-content">
                <h5 className="title">How to use our service?</h5>
                <p className="description">
                  Ask any question and recieve replies from a <br /> wide
                  variety of knowledgeable people!
                </p>
              </div>
            </div>

            <div className="timeline">
              <div className="icon"></div>
              <div className="date-content">
                <div className="date-outer">
                  <span className="date">
                    <span className="month">Thrid</span>
                    <span className="year">3</span>
                  </span>
                </div>
              </div>
              <div className="timeline-content">
                <h5 className="title">SOmething</h5>
                <p className="description">SOmething</p>
              </div>
            </div>

            <div className="timeline">
              <div className="icon"></div>
              <div className="date-content">
                <div className="date-outer">
                  <span className="date">
                    <span className="month">Fourth</span>
                    <span className="year">4</span>
                  </span>
                </div>
              </div>
              <div className="timeline-content">
                <h5 className="title">How to use our service?</h5>
                <p className="description">
                  User take pictures of homework or questions <br /> that you
                  don't know and upload them.
                  <br />
                  You're going to add hashtags to for
                  <br /> people can see what user interesed
                </p>
              </div>
            </div>

            <div className="timeline">
              <div className="icon"></div>
              <div className="date-content">
                <div className="date-outer">
                  <span className="date">
                    <span className="month">Fifth</span>
                    <span className="year">5</span>
                  </span>
                </div>
              </div>
              <div className="timeline-content">
                <h5 className="title">How to use our service?</h5>
                <p className="description">
                  User take pictures of homework or questions <br /> that you
                  don't know and upload them.
                  <br />
                  You're going to add hashtags to for
                  <br /> people can see what user interesed
                </p>
              </div>
            </div>
          </div>
        </Container>
      </TabPanel>

      {/* Leadership */}
      <TabPanel value={value} index={1}>
        <br />
        Page Under Construction!
      </TabPanel>

      {/* Contact us  */}
      <TabPanel value={value} index={2}>
        <br />
        Page Under Construction!
      </TabPanel>
    </Box>
  );
}
