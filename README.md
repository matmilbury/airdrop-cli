# Airdrop CLI

![Wen moon? Soon](https://img.shields.io/badge/wen_moon%3F-soon-forestGreen)
![Gas? Optimized](https://img.shields.io/badge/gas%3F-optimized-forestGreen)
![Nerd status? Ultimate](https://img.shields.io/badge/nerd_status%3F-ultimate-forestGreen)

Airdrop any token on any network. Cheaply. From your CLI.

## Why?

tldr: to have a local, secure, independent tool for airdropping tokens.

I had to send USDT to multiple addresses the other day.

So, I've exported a `csv` file with a list of addresses and amounts and headed to [gaslite drop](https://drop.gaslite.org/) - my tool of choice for airdropping tokens.

And then? Bonkers. A [bug](https://github.com/PopPunkLLC/GasliteDrop/issues/52) made it unusable.

So I've tried [wentokens](https://www.wentokens.xyz/). Same result.

So I've tried [dieperse.app](https://disperse.app/). Same result - a bug preventing me from using it.

I don't know if it was because it was Friday, or I had a bad luck, or what happened but I hated a thought of having to rely on these external tools to do my work.

I simply wanted a cli tool that takes my csv and creates an airdrop transaction I can sign with my wallet.

And that is Airdrop CLI.

## Features

Supported chains:

- Binance Smart Chain

Supported tokens:

- USDT

## Install

### Homebrew

TBD

### From source

TBD

### Windows

Firstly, if you're using Windows, I feel sorry for you.

Secondly, I don't so this tool is not and will not support Windows – at least not until we have a maintainer committed to maintain and support the Windows release.

## Use

Please don't. For now.

## Support

Please use [discussions](https://github.com/matmilbury/airdrop-cli/discussions) to ask questions and suggest features.

## Roadmap

### Making it usable

- [ ] Build and release a standalone library with github actions
- [ ] Configure installing it with brew

## Basic features

- [x] parse a csv file with addresses and amounts
- [x] construct a transaction that airdrops USDT on BSC
- [x] sign and broadcast transactions with [frame](https://frame.sh)
- [ ] read csv file from any location
- [x] Support more chains
- [ ] Support all most popular tokens for each chain
- [ ] Support any arbitrary ERC-20 token
- [ ] Support native coins for each chain
- [ ] Check allowance before airdropping
- [ ] Support setting allowance if not enough
- [ ] Simulate transactions before signing
- [ ] with dry run, render the first 10 entries in a table
- [ ] check if balance is not less the total airdrop amount

### DX

- [ ] Automatic formatting and linting
- [ ] Setup secure and isolated development environment with devpod.sh with devcontainers
- [ ] Define scripts with taskfile
- [ ] lint commit messages

### Quality of life

- [ ] support non-interactive mode (flags)
- [ ] autocomplete csv path selection (only .csv files)
- [ ] improve number formatting
- [ ] use proper logging
- [ ] render loading indicators
- [x] basic batching (500 transfers per batch for each token on each chain)
- [ ] split large amount of recipients into batches automatically based on the `transfer` gas cost of a particular token as well as block size limits of a particular chain.
- [ ] detect and merge duplicates
- [ ] Support airdrops from Safe Wallet
- [ ] Support signing with a browser wallet locally
- [ ] Generate a shareable link for performing an airdrop

### Edge cases and errors

- [ ] handle empty csv files gracefully
- [ ] detect and gracefully handle errors in csv files
- [ ] Handle refused wallet connection requests gracefully
- [ ] Handle tx simulation failures
- [ ] Handle transaction rejected by the user error

## Contributing

```bash
bun install
bun run src/index.ts
```

# Credits

This tool build upon legendary and gas optimized [gaslite drop](https://github.com/PopPunkLLC/GasliteDrop) smart contracts.

# Licence

MIT
