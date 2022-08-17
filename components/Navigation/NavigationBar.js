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
    padding: "4rem 0",
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
    width: "90%",
    padding: "1rem",
    paddingLeft: "0.5rem",
    borderRadius: theme.radius.sm,
    fontFamily: "Proxima Nova Light",
    alignSelf:"start",
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
    <div className={classes.container} sx={{ width: 240 }}>
      {NavigationTabData.map((ele, ind) => (
        <div className={classes.links} key={ind}>
          <Text className={classes.linkText}>{ele}</Text>
        </div>
      ))}
    </div>
  );
};

export default NavigationBar;
