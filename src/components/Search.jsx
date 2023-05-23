import React from "react";

import { TextField } from "@mui/material";

export default function Search({ setSearch }) {
  const findRecipe = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <form action="">
        <TextField
          id="standard-basic"
          label="Search Recipe"
          variant="standard"
          helperText="suggestion: pizza, pork, lamb"
          onChange={findRecipe}
        />
      </form>
    </div>
  );
}
