import { featureGroups } from "./data/featureGroups";
import {
  createTheme,
  styled,
  ThemeProvider,
  Container,
  Box,
  Grid,
  Paper,
  FormGroup,
} from "@mui/material";
import ExpandableFeature from "./ExpandableFeature";
import NonExpandableFeature from "./NonExpandableFeature";
import "./FeatureFlagList.css";
import React from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

//Each item styling
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#1A2027",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function FeatureFlagList() {
  const handleChange = (
    ldx: number,
    gdx: number,
    fdx: number,
    cdx: number,
    event: any
  ) => {
    if (
      cdx !== null &&
      featureGroup[ldx].groups[gdx].items[fdx].children &&
      featureGroup[ldx].groups[gdx].items[fdx].children[cdx]
    ) {
      featureGroup[ldx].groups[gdx].items[fdx].children[cdx].value =
        event.target.value;
    }
    setfeatureGroup([...featureGroups]);
  };
  const [featureGroup, setfeatureGroup] = React.useState(featureGroups);

  const handleSwitch = (
    ldx: number,
    gdx: number,
    fdx: number,
    cdx: number,
    event: any
  ) => {
    if (
      cdx !== null &&
      featureGroup[ldx].groups[gdx].items[fdx].children &&
      featureGroup[ldx].groups[gdx].items[fdx].children[cdx]
    ) {
      featureGroup[ldx].groups[gdx].items[fdx].children[cdx].enabled =
        event.target.checked;
      featureGroup[ldx].groups[gdx].items[fdx].enabled =
        event.target.checked &&
        !featureGroup[ldx].groups[gdx].items[fdx].enabled
          ? true
          : featureGroup[ldx].groups[gdx].items[fdx].enabled;
    } else {
      featureGroup[ldx].groups[gdx].items[fdx].enabled = event.target.checked;
      if (
        !event.target.checked &&
        featureGroup[ldx].groups[gdx].items[fdx].hasChildren
      ) {
        featureGroup[ldx].groups[gdx].items[fdx].children.map(
          (child) => (child.enabled = false)
        );
      }
    }

    setfeatureGroup([...featureGroups]);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Box sx={{ flexGrow: 1, display: "flex", flexWrap: "wrap" }}>
          {featureGroups.map((mainGroup, mainGroupIndex) => {
            return (
              <div key={mainGroupIndex} className="divWrap">
                <h4 className="sectionTitle">{mainGroup.sectionName}</h4>
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                  className="featureGrid"
                  key={mainGroupIndex}
                >
                  {mainGroup.groups.map((mainFeature, mainFeatureIndex) => {
                    return (
                      <Grid
                        item
                        xs={12}
                        sm={4}
                        key={mainFeatureIndex}
                        className={`${
                          mainFeature.items.length > 1 ? "flexWrap" : ""
                        }`}
                      >
                        <Item>
                          {mainFeature.items.map(
                            (subFeature, subFeatureIndex) => (
                              <FormGroup
                                className="lowMargin"
                                key={subFeatureIndex}
                              >
                                {subFeature.hasChildren ? (
                                  <ExpandableFeature
                                    {...{
                                      subFeature,
                                      subFeatureIndex,
                                      mainGroupIndex,
                                      mainFeatureIndex,
                                    }}
                                    handleToggle={handleSwitch}
                                    handleChange={handleChange}
                                  />
                                ) : (
                                  <NonExpandableFeature
                                    {...{
                                      subFeature,
                                      subFeatureIndex,
                                      mainGroupIndex,
                                      mainFeatureIndex,
                                    }}
                                    handleToggle={handleSwitch}
                                  />
                                )}
                              </FormGroup>
                            )
                          )}
                        </Item>
                      </Grid>
                    );
                  })}
                </Grid>
              </div>
            );
          })}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default FeatureFlagList;
