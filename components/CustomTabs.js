import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CustomCard } from './CustomCard';

function TabPanel(props) {
  const { children, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      // hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box sx={{ my: 2 }}>
        <div>{children}</div>
      </Box>
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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const CustomTabs = ({ tabs }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', mb: 8 }} id="tabs" >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {tabs.map((tab) => (
            <Tab
              key={tab.index}
              label={tab.title}
              {...a11yProps(0)}
              component="a"
              href={`#${tab.index}`}
            />
          ))}
        </Tabs>
      </Box>
      {tabs.map((tab) => (
        <TabPanel key={tab.index} value={value} index={tab.index} id={tab.index}>
          <Typography variant="h5" component="h1" my={1}>
            {tab.title}
          </Typography>
          <CustomCard content={tab.content} />
        </TabPanel>
      ))}
    </Box>
  );
};

CustomTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          price: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

