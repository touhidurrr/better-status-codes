# better-status-codes

A much better way to handle HTTP status codes in your applications.
Zero dependencies, lightweight, and easy to use.
Use the coding style of your choice!
Typescript support out of the box!

Also supports status code of poplar frameworks / services like AWS, Cloudflare etc.

![TS Example](https://s12.gifyu.com/images/SZoEa.png)

## Installation

```bash
bun add better-status-codes # bun
npm install better-status-codes # npm
yarn add better-status-codes # yarn
pnpm add better-status-codes # pnpm
```

## Usage

### Status Codes

```ts
import { Status } from "better-status-codes";

console.log(Status.OK); // 200
console.log(Status["Switching Protocols"]); // 101

// Screaming Snake Case Support
console.log(Status.SWITCHING_PROTOCOLS); // 101

// Or even this is allowed
console.log(Status[101]); // 101
```

**Alias:** `Code` (sounds nicer)

```ts
import { Code } from "better-status-codes";

console.log(Code.OK); // 200
```

### Status Text

```ts
import { StatusText } from "better-status-codes";

console.log(StatusText.OK); // OK
console.log(StatusText["Switching Protocols"]); // Switching Protocols

// Screaming Snake Case Suppor
console.log(StatusText.SWITCHING_PROTOCOLS); // Switching Protocols

// Or even this is allowed
console.log(StatusText[101]); // Switching Protocols
```

**Alias:** `Text`, `Reason`, `ReasonPhrase`, `Message` or `StatusMessage` (Also used in many documentations to refer to the same thing)

```ts
import { Text } from "better-status-codes";

console.log(Text.I_AM_A_TEAPOT); // I'm a Teapot
```

For any issues or suggestions, please be my guest [here](https://github.com/touhidurrr/better-status-codes/issues).
