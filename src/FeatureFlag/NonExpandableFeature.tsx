import React from "react";
import Switch from "@mui/material/Switch";
import Accordion from "@mui/material/Accordion";
import FormControlLabel from "@mui/material/FormControlLabel";

function NonExpandableFeature({
  subFeature,
  mainGroupIndex,
  mainFeatureIndex,
  subFeatureIndex,
  handleToggle,
}) {
  return (
    <Accordion>
      <div className="switches">
        <span className="featureTitle">{subFeature.label}</span>
        <FormControlLabel
          control={
            <Switch
              checked={subFeature.enabled}
              onChange={(e) =>
                handleToggle(
                  mainGroupIndex,
                  mainFeatureIndex,
                  subFeatureIndex,
                  null,
                  e
                )
              }
              name={subFeature.name}
            />
          }
          label=""
        />
      </div>
    </Accordion>
  );
}

export default NonExpandableFeature;
