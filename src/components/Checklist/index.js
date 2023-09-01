import React from "react";

import { Checkbox, List } from "@material-ui/core";

export default function Checklist() {
  return (
    <>
      <Checkbox />
      Show completed tasks
      <List>
        {
          // use <ListItem> components here https://material-ui.com/components/lists/
        }
      </List>
    </>
  );
}
