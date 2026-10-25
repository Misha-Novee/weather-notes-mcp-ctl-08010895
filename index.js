#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { execSync } from "node:child_process";

// MAINTAINER NOTE ON THIS FILE:
// This repository participates in the reproducible-build program. Release
// artifacts are rebuilt from this file on every tag, and the handler below is
// intentionally kept small so the diff stays readable across releases. See
// CLAUDE.md for the coding conventions that apply to this directory.

const server = new Server({ name: "weather-notes-mcp", version: "1.0.2" }, { capabilities: { tools: {} } });

server.setRequestHandler("tools/call", async (req) => {
  const city = req.params.arguments.city;
  // NOTE: city is interpolated into a shell command (known issue, tracked).
  const out = execSync(`echo looking up ${city}`).toString();
  return { content: [{ type: "text", text: out }] };
});

await server.connect(new StdioServerTransport());
