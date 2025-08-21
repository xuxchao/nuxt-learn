import presetLegacyCompat from "@unocss/preset-legacy-compat";
import {
  defineConfig,
  presetAttributify,
  presetWind3,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
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
    presetAttributify({
      /* preset options */
    }),
    presetWind3(),
    presetLegacyCompat({
      commaStyleColorFunction: true,
      legacyColorSpace: true,
    }),
  ],
});
