# SPAship CLI

A command line interface for SPAship.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@spaship/cli.svg)](https://npmjs.org/package/@spaship/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@spaship/cli.svg)](https://npmjs.org/package/@spaship/cli)
[![License](https://img.shields.io/npm/l/@spaship/cli.svg)](https://github.com/spaship/cli/blob/master/package.json)

<!-- toc -->

- [SPAship CLI](#spaship-cli)
- [Usage](#usage)
- [Commands](#commands)
- [Writing tests](#writing-tests)
  <!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g @spaship/cli
$ spaship COMMAND
running command...
$ spaship (-v|--version|version)
@spaship/cli/0.3.5 darwin-x64 node-v13.7.0
$ spaship --help [COMMAND]
USAGE
  $ spaship COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`spaship deploy ARCHIVE`](#spaship-deploy-archive)
- [`spaship help [COMMAND]`](#spaship-help-command)

## `spaship deploy ARCHIVE`

deploy to a SPAship host

```
USAGE
  $ spaship deploy ARCHIVE

ARGUMENTS
  ARCHIVE  SPA archive file

OPTIONS
  -r, --ref=ref  [default: undefined] a version tag, commit hash, or branch to identify this release

DESCRIPTION
  Send an archive containing a SPA to a SPAship host for deployment.  Supports .tar.gz/.tgz, .zip, and .tar.bz2.

EXAMPLES
  $ npm pack
  $ spaship deploy your-app-1.0.0.tgz
```

_See code: [src/commands/deploy.js](https://github.com/spaship/spaship/blob/v0.3.5/src/commands/deploy.js)_

## `spaship help [COMMAND]`

display help for spaship

```
USAGE
  $ spaship help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

<!-- commandsstop -->

# Writing tests

Tests are written using oclif's testing tools. See [oclif's testing documentation](https://oclif.io/docs/testing) for more.
