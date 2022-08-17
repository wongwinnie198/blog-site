import React from "react";
import { createStyles } from "@mantine/core";

import { Text } from "@mantine/core";

const useStyles = createStyles((theme, _params, getRef) => ({
  container: {
    // subscribe to color scheme changes right in your styles
    width: "100%",
    height: 90,

    // Dynamic media queries, define breakpoints in theme, use anywhere
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      // Type safe child reference in nested selectors via ref
      [`& .${getRef("child")}`]: {
        fontSize: theme.fontSizes.xs,
      },
    },
  },

  child: {
    // assign ref to element
    ref: getRef("child"),
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    paddingTop: theme.spacing.md,
    borderRadius: theme.radius.sm,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontSize: 40,
    fontFamily: "Proxima Nova Light",
  },
}));

const Logo = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Text className={classes.child} weight="700">
        Ball&apos;s Blog
      </Text>
    </div>
  );
};

export default Logo;
