import { presetDaisy } from "@ameinhardt/unocss-preset-daisy";
import presetLegacyCompat from "@unocss/preset-legacy-compat";
import theme from "daisyui/functions/variables.js";
import {
  defineConfig,
  presetAttributify,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  theme: {
    ...theme,
    colors: {
      "base-100": "var(--ddcolor-base-100)",
      "base-200": "var(--ddcolor-base-200)",
      "base-300": "var(--ddcolor-base-300)",
      "base-content": "var(--ddcolor-base-content)",
      primary: "var(--ddcolor-primary)",
      "primary-content": "var(--ddcolor-primary-content)",
      secondary: "var(--ddcolor-secondary)",
      "secondary-content": "var(--ddcolor-secondary-content)",
      accent: "var(--ddcolor-accent)",
      "accent-content": "var(--ddcolor-accent-content)",
      neutral: "var(--ddcolor-neutral)",
      "neutral-content": "var(--ddcolor-neutral-content)",
      info: "var(--ddcolor-info)",
      "info-content": "var(--ddcolor-info-content)",
      success: "var(--ddcolor-success)",
      "success-content": "var(--ddcolor-success-content)",
      warning: "var(--ddcolor-warning)",
      "warning-content": "var(--ddcolor-warning-content)",
      error: "var(--ddcolor-error)",
      "error-content": "var(--ddcolor-error-content)",
    },
  },
  transformers: [
    // <div class="hover:(bg-gray-400 font-medium) font-(light mono)" />
    // transformerDirectives(),
    /**
     * .custom-div {
     *  @apply text-center my-0 font-medium;
     * }
     */
    transformerVariantGroup(),
  ],
  presets: [
    /**
     *<button
     *  bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
     *  text="sm white"
     *  font="mono light"
     *  p="y-2 x-4"
     *  border="2 rounded blue-200"
     * >
     *  Button
     * </button>
     */
    presetAttributify(),
    presetLegacyCompat({
      /**
       * rgb(255 0 0) -> rgb(255, 0, 0)
       * rgb(255 0 0 / 50%) -> rgba(255, 0, 0, 50%)
       * hsl(0 100% 50% / 50%) -> hsla(0, 100%, 50%, 50%)
       */
      commaStyleColorFunction: true,
      // 会导致内存问题
      // legacyColorSpace: true,
    }),
    presetWind3(),
  ],
});
