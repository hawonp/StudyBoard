import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

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
        'aria-controls': `vertical-tabpanel-${index}`,
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
                bgcolor: 'background.paper',
                display: 'flex',
                height: 'auto',
                margin: '1rem 1rem',
                borderRadius: '8px',
            }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="About" {...a11yProps(0)} />
                <Tab label="Leadership" {...a11yProps(1)} />
                <Tab label="Contact US" {...a11yProps(2)} />
            </Tabs>

            {/* about */}
            <TabPanel value={value} index={0}>
                <br />

                <Container>
                    <div class="main-timeline">
                        <div class="timeline">
                            <div class="icon"></div>
                            <div class="date-content">
                                <div class="date-outer">
                                    <span class="date">
                                        <span class="month">Frist</span>
                                        <span class="year">1</span>
                                    </span>
                                </div>
                            </div>
                            <div class="timeline-content">
                                <h5 class="title">Why do you need our service?</h5>
                                <p class="description">
                                    StudyBoard's community-based, information-providing service to answer your questions is like no other
                                </p>
                            </div>
                        </div>

                        <div class="timeline">
                            <div class="icon"></div>
                            <div class="date-content">
                                <div class="date-outer">
                                    <span class="date">
                                        <span class="month">Second</span>
                                        <span class="year">2</span>
                                    </span>
                                </div>
                            </div>
                            <div class="timeline-content">
                                <h5 class="title">How to use our service?</h5>
                                <p class="description">
                                    Ask any question and recieve replies from a <br /> wide variety of knowledgeable people!
                                </p>
                            </div>
                        </div>

                        <div class="timeline">
                            <div class="icon"></div>
                            <div class="date-content">
                                <div class="date-outer">
                                    <span class="date">
                                        <span class="month">Thrid</span>
                                        <span class="year">3</span>
                                    </span>
                                </div>
                            </div>
                            <div class="timeline-content">
                                <h5 class="title">SOmething</h5>
                                <p class="description">SOmething</p>
                            </div>
                        </div>

                        <div class="timeline">
                            <div class="icon"></div>
                            <div class="date-content">
                                <div class="date-outer">
                                    <span class="date">
                                        <span class="month">Fourth</span>
                                        <span class="year">4</span>
                                    </span>
                                </div>
                            </div>
                            <div class="timeline-content">
                                <h5 class="title">How to use our service?</h5>
                                <p class="description">
                                    User take pictures of homework or questions <br /> that you don't know and upload them.
                                    <br />
                                    You're going to add hashtags to for
                                    <br /> people can see what user interesed
                                </p>
                            </div>
                        </div>

                        <div class="timeline">
                            <div class="icon"></div>
                            <div class="date-content">
                                <div class="date-outer">
                                    <span class="date">
                                        <span class="month">Fifth</span>
                                        <span class="year">5</span>
                                    </span>
                                </div>
                            </div>
                            <div class="timeline-content">
                                <h5 class="title">How to use our service?</h5>
                                <p class="description">
                                    User take pictures of homework or questions <br /> that you don't know and upload them.
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
