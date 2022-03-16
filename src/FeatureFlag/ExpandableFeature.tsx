import Switch from "@mui/material/Switch";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FeatureFlag } from "./models/featureFlag";
import FormControlLabel from "@mui/material/FormControlLabel";

function ExpandableFeature({ subFeature, handleToggle, handleChange }) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        className="featureSummary"
      >
        <span className="featureTitle">{subFeature.label}</span>
        <FormControlLabel
          label=""
          control={
            <Switch
              checked={subFeature.enabled}
              onChange={(e) => handleToggle(subFeature, null, e)}
              onClick={(e) => e.stopPropagation()}
              name={subFeature.name}
            />
          }
        />
      </AccordionSummary>
      <AccordionDetails>
        <div>
          {subFeature.children &&
            subFeature.children.map(
              (child: FeatureFlag, childrenIndex: number) => (
                <div className="childSwitches" key={childrenIndex}>
                  <div className="formControlWrapper">
                    <span>{child.label}</span>
                    {child.value && (
                      <Select
                        value={child.value}
                        label="No of users"
                        onChange={(e) => handleChange(child, e)}
                        className="selectBox"
                      >
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                      </Select>
                    )}
                  </div>
                  <FormControlLabel
                    label=""
                    control={
                      <Switch
                        checked={child.enabled}
                        name={child.name}
                        onChange={(e) =>
                          handleToggle(subFeature, childrenIndex, e)
                        }
                      />
                    }
                  />
                </div>
              )
            )}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default ExpandableFeature;
