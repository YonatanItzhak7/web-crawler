import fs from "fs";
import urlParser from "url";
import cheerio from "cheerio";
import fetch from "node-fetch";

const crawlToPage = async (pageUrl, depth, maxDepth) => {
  console.log(pageUrl);
  const { host, protocol } = urlParser.parse(pageUrl);
  const page = await fetch(pageUrl);
  const html = await page.text();
  console.log(html)
  const $ = cheerio.load(html);
  const links = $("a")
    .map((i, link) => link.attribs.href)
    .get();
  console.log(links);

  const images = $("img")
    .map((i, link) => link.attribs.src)
    .get();
    console.log(images)
    let result = {results:[]}
};
// crawlToPage();

const start = async () => {
  const url = process.argv[2];
  const maxDepth = process.argv[3];
  await crawlToPage(url, 0, maxDepth);
};
start();
