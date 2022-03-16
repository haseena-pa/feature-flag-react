import React from "react";
import Switch from "@mui/material/Switch";
import Accordion from "@mui/material/Accordion";
import FormControlLabel from "@mui/material/FormControlLabel";

function NonExpandableFeature(props: any) {
  const feature = props.feature;
  return (
    <Accordion>
      <div className="switches">
        <span className="featureTitle">{feature.label}</span>
        <FormControlLabel
          control={
            <Switch
              checked={feature.enabled}
              onChange={(e) =>
                props.handleToggle(props.ldx, props.gdx, props.index, null, e)
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
