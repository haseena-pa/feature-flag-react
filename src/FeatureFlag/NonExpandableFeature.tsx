import React from "react";
import Switch from "@mui/material/Switch";
import Accordion from "@mui/material/Accordion";
import FormControlLabel from "@mui/material/FormControlLabel";

function NonExpandableFeature(props: any) {
  const feature = props.subFeature;
  return (
    <Accordion>
      <div className="switches">
        <span className="featureTitle">{feature.label}</span>
        <FormControlLabel
          control={
            <Switch
              checked={feature.enabled}
              onChange={(e) =>
                props.handleToggle(
                  props.mainGroupIndex,
                  props.mainFeatureIndex,
                  props.subFeatureIndex,
                  null,
                  e
                )
              }
              name={feature.name}
            />
          }
          label=""
        />
      </div>
    </Accordion>
  );
}

export default NonExpandableFeature;
