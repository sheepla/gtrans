import { Command } from "./deps.ts";
import { translate, type TranslateParam } from "./mod.ts";

const appName = "gtrans";
const appVersion = "0.0.1";
const appDescription = "A tiny command for Google Translate";

function initCommand() {
  return new Command()
    .name(appName)
    .version(appVersion)
    .description(appDescription)
    .globalOption("-s, --source <sourceLang:string>", "source language", {
      required: true,
    })
    .globalOption("-t, --target <targetLang:string>", "target language", {
      required: true,
    })
    .arguments("<text...:string>");
}

const command = initCommand();
const { args, options } = await command.parse(Deno.args);
const param: TranslateParam = {
  sourceLang: options.source,
  targetLang: options.target,
  text: args.join(" "),
};

const result = await translate(param);
console.log(result);
