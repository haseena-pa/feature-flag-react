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
    mainGroupIndex: number,
    mainFeatureIndex: number,
    subFeatureIndex: number,
    childrenIndex: number,
    event: any
  ) => {
    if (
      childrenIndex !== null &&
      featureGroup[mainGroupIndex].groups[mainFeatureIndex].items[
        subFeatureIndex
      ].children &&
      featureGroup[mainGroupIndex].groups[mainFeatureIndex].items[
        subFeatureIndex
      ].children[childrenIndex]
    ) {
      featureGroup[mainGroupIndex].groups[mainFeatureIndex].items[
        subFeatureIndex
      ].children[childrenIndex].value = event.target.value;
    }
    setfeatureGroup([...featureGroups]);
  };
  const [featureGroup, setfeatureGroup] = React.useState(featureGroups);

  const handleSwitch = (
    mainGroupIndex: number,
    mainFeatureIndex: number,
    subFeatureIndex: number,
    childrenIndex: number,
    event: any
  ) => {
    if (
      childrenIndex !== null &&
      featureGroup[mainGroupIndex].groups[mainFeatureIndex].items[
        subFeatureIndex
      ].children &&
      featureGroup[mainGroupIndex].groups[mainFeatureIndex].items[
        subFeatureIndex
      ].children[childrenIndex]
    ) {
      featureGroup[mainGroupIndex].groups[mainFeatureIndex].items[
        subFeatureIndex
      ].children[childrenIndex].enabled = event.target.checked;
      featureGroup[mainGroupIndex].groups[mainFeatureIndex].items[
        subFeatureIndex
      ].enabled =
        event.target.checked &&
        !featureGroup[mainGroupIndex].groups[mainFeatureIndex].items[
          subFeatureIndex
        ].enabled
          ? true
          : featureGroup[mainGroupIndex].groups[mainFeatureIndex].items[
              subFeatureIndex
            ].enabled;
    } else {
      featureGroup[mainGroupIndex].groups[mainFeatureIndex].items[
        subFeatureIndex
      ].enabled = event.target.checked;
      if (
        !event.target.checked &&
        featureGroup[mainGroupIndex].groups[mainFeatureIndex].items[
          subFeatureIndex
        ].hasChildren
      ) {
        featureGroup[mainGroupIndex].groups[mainFeatureIndex].items[
          subFeatureIndex
        ].children.map((child) => (child.enabled = false));
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
