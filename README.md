# gtrans

*A tiny command for Google Translate powered by Deno*

## Usage

```
> gtrans --help
  Usage:   gtrans <text...>
  Version: 0.0.1

  Description:

    A tiny command for Google Translate

  Options:

    -h, --help                   - Show this help.
    -V, --version                - Show the version number for this program.
    -s, --source   <sourceLang>  - source language                            (required)
    -t, --target   <targetLang>  - target language                            (required)
```

## Example

```
gtrans -s en -t ja "Hello, World!" # => こんにちは世界！
```

## Installation

```sh
deno install --allow-net --name gtrans --force "https://raw.githubusercontent.com/sheepla/gtrans/master/cli.ts"
```

## License

MIT
