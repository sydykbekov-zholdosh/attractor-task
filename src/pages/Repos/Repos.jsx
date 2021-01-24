import React, { useState } from 'react';
import {
  Tab,
  Tabs,
  Paper
} from '@material-ui/core';

import ReposList from './ReposList/ReposList';
import TabPanel from '../../components/TabPanel/TabPanel';

function Repos() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, index) => {
    setTabIndex(index);
  };

  return (
    <div className="my3 fullWidth">
      <Paper className="p3">
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Публичные"/>
          <Tab label="Приватные"/>
        </Tabs>
        <TabPanel
          value={tabIndex}
          index={0}
          children={<ReposList visibility="public"/>}
        />
        <TabPanel
          value={tabIndex}
          index={1}
          children={<ReposList visibility="private"/>}
        />
      </Paper>
    </div>
  );
}

export default Repos;