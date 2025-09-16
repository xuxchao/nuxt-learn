import * as cheerio from "cheerio";

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:html", (html, { event }) => {
    html.head = html.head.map((item) => {
      const $ = cheerio.load(item);
      // $('link[as="image"]').remove();
      $('link[rel="modulepreload"]').remove();
      $('link[rel="prefetch"]').remove();
      return $.html().split("\n").join("");
    });
  });
});
