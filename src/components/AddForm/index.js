import React from "react";

import { TextField, Button } from "@material-ui/core";

export default function AddForm() {
  return (
    <div className="add-form">
      <TextField label="Task" />
      <Button variant="contained" color="primary">
        Add
      </Button>
    </div>
  );
}
