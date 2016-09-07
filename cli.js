#!/usr/bin/env node

if (process.argv.length < 3) process.exit(0)
else process.exit(+(process.platform !== process.argv[2]))
