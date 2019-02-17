# README

## Description
- Project Template By js [Author]
- [GitHub](https://github.com/jsDuan/ptjs-cli)
- Currently the first version of the beta, there may be many problems
- Generic creation project Cli based on Git 
- Quickly create new projects based on template engineering
- Automatically configure git information
- The template is currently available from gitlab, github

## Support 
- nodejs version > 9
- develop on nodejs 9.11.2
- test on nodejs 9.11.2 / v11.10.0


## Done
- Fast copying of project templates has been implemented

## Undone
- Customization based on specific language item types
- Others

## Version
- 1.0.1  First Version
- 1.0.2  Fix "crypto.createCipher is deprecated"
- 1.0.3  Fix "Readme"
- 1.0.4  Fix "package info"
## How to install
```sh
# npm install
$ npm install -g ptjs-cli
```

## Commands

```sh
# Help
$ pt -h

# Add a new git template project
$ pt add

# Create a project from template
$ pt new

# Template list
$ pt list

# Delete Templates
$ pt delete
```