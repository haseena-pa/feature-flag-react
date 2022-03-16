import Switch from "@mui/material/Switch";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FeatureFlag } from "./models/featureFlag";
import FormControlLabel from "@mui/material/FormControlLabel";

function ExpandableFeature(props: any) {
  const feature = props.subFeature;
  return (
    <Accordion key={props.subFeatureIndex}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className="featureSummary"
      >
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
              onClick={(e) => {
                e.stopPropagation();
              }}
              name={feature.name}
            />
          }
          label=""
        />
      </AccordionSummary>
      <AccordionDetails>
        <div>
          {feature.children &&
            feature.children.map((child: FeatureFlag, cdx: number) => (
              <div className="childSwitches" key={cdx}>
                <div className="formControlWrapper">
                  <span>{child.label}</span>
                  {child.value && (
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={child.value}
                      label="No of users"
                      onChange={(e) =>
                        props.handleChange(
                          props.mainGroupIndex,
                          props.mainFeatureIndex,
                          props.subFeatureIndex,
                          cdx,
                          e
                        )
                      }
                      className="selectBox"
                    >
                      <MenuItem value={10}>10</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                      <MenuItem value={30}>30</MenuItem>
                    </Select>
                  )}
                </div>
                <FormControlLabel
                  control={
                    <Switch
                      checked={child.enabled}
                      name={child.name}
                      onChange={(e) =>
                        props.handleToggle(
                          props.mainGroupIndex,
                          props.mainFeatureIndex,
                          props.subFeatureIndex,
                          cdx,
                          e
                        )
                      }
                    />
                  }
                  label=""
                />
              </div>
            ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default ExpandableFeature;
