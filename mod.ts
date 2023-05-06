import { Command } from "./deps.ts";

const appName = "gtrans";
const appVersion = "0.0.1";
const appDescription = "A tiny command for Google Translate";

const baseURL = "https://translate.googleapis.com";

interface TranslateParam {
  sourceLang: string;
  targetLang: string;
  text: string;
}

function buildURL(param: TranslateParam): URL {
  const url = new URL(baseURL);
  url.pathname = "translate_a/single";

  const query = new URLSearchParams();
  query.set("client", "gtx");
  query.set("dt", "t");
  query.set("sl", param.sourceLang);
  query.set("tl", param.targetLang);
  query.set("q", param.text);
  url.search = query.toString();

  return url;
}

async function translate(param: TranslateParam): Promise<string> {
  const url = buildURL(param);
  const result = await fetch(url).then((resp) => resp.json()).then((data) =>
    data[0][0][0]
  )
    .catch((err) => console.error(err));

  return result as string;
}

export { translate, TranslateParam };
