import { Global } from "@mantine/core";
import proximaNova from "../public/fonts/FontsFree-Net-FontsFree-Net-Proxima-Nova-1.ttf";
import proximaNovaLight from "../public/fonts/FontsFree-Net-FontsFree-Net-Proxima-Nova-Light.ttf";

export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          "@font-face": {
            fontFamily: "Proxima Nova",
            src: `url('${proximaNova}') format("ttf")`,
            fontStyle: "normal",
          },
        },
        {
          "@font-face": {
            fontFamily: "Proxima Nova Light",
            src: `url('${proximaNovaLight}') format("ttf")`,
            fontStyle: "normal",
            fontWeight: "400",
          },
        },
      ]}
    />
  );
}
