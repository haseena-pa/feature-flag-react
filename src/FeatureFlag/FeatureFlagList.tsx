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
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Box sx={{ flexGrow: 1, display: "flex", flexWrap: "wrap" }}>
          {featureGroups.map((mainGroup, mainGroupIndex) => {
            return (
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
                                <ExpandableFeature />
                              ) : (
                                <NonExpandableFeature />
                              )}
                            </FormGroup>
                          )
                        )}
                      </Item>
                    </Grid>
                  );
                })}
              </Grid>
            );
          })}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default FeatureFlagList;
