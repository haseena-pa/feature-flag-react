import React from "react";
import Switch from "@mui/material/Switch";
import Accordion from "@mui/material/Accordion";
import FormControlLabel from "@mui/material/FormControlLabel";

function NonExpandableFeature({ subFeature, handleToggle }) {
  return (
    <Accordion>
      <div className="switches">
        <span className="featureTitle">{subFeature.label}</span>
        <FormControlLabel
          label=""
          control={
            <Switch
              checked={subFeature.enabled}
              onChange={(e) => handleToggle(subFeature, null, e)}
              name={subFeature.name}
            />
          }
        />
      </div>
    </Accordion>
  );
}

export default NonExpandableFeature;
