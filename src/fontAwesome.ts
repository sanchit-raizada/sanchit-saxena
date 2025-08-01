import { library, config } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

library.add(fas, far, fab);

export const ICON_PRESETS = {
  nav: {
    home: "home",
    about: "user",
    skills: "code",
    projects: "folder-open",
    contact: "envelope",
    resume: "file",
  },
  social: {
    github: ["fab", "github"],
    linkedin: ["fab", "linkedin"],
    twitter: ["fab", "twitter"],
  },
} as const;

export type ICON_PRESETS_TYPES = typeof ICON_PRESETS.nav;
