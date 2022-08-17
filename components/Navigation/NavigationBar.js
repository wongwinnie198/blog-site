import React from "react";
import { createStyles, Badge, Box, NavLink } from "@mantine/core";

import { Text } from "@mantine/core";

import { NavigationTabData } from "../../data/NavigationTabData";

const useStyles = createStyles((theme, _params, getRef) => ({
  container: {
    // subscribe to color scheme changes right in your styles
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem 0",
    // Dynamic media queries, define breakpoints in theme, use anywhere
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      // Type safe child reference in nested selectors via ref
      [`& .${getRef("child")}`]: {
        fontSize: theme.fontSizes.xs,
      },
    },
  },

  links: {
    // assign ref to element
    ref: getRef("child"),
    width: "100%",
    padding:"0 1rem",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    paddingTop: theme.spacing.md,
    borderRadius: theme.radius.sm,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: "Proxima Nova Light",
    alignSelf:"start",
    verticalAlign:"center",
    '&:hover': {
      backgroundColor: theme.colors.gray[7],
      color:theme.colors.gray[0],
    },

  },

  linkText: {
    fontSize: 20,
    fontFamily: "Proxima Nova Light",
  },
}));
const NavigationBar = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.container} sx={{ width: 240 }}>
      {NavigationTabData.map((ele, ind) => (
        <div className={classes.links} key={ind}>
          <Text className={classes.linkText}>{ele}</Text>
        </div>
      ))}
    </Box>
  );
};

export default NavigationBar;
