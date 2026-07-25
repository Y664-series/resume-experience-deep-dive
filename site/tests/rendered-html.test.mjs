import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: {
        accept: "text/html",
        host: "resume-experience-deep-dive.example",
        "x-forwarded-host": "resume-experience-deep-dive.example",
        "x-forwarded-proto": "https",
      },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the finished product landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.ok(
    (response.headers.get("content-type") ?? "").startsWith("text/html"),
  );

  const html = await response.text();
  assert.ok(html.includes("履历经历深挖｜把模糊经历，问成可信证据"));
  assert.ok(html.includes("把模糊经历"));
  assert.ok(html.includes("问成可信证据"));
  assert.ok(html.includes("你有什么，就从什么开始"));
  assert.ok(html.includes("经历母档"));
  assert.ok(html.includes("面试记忆锚点"));
  assert.ok(html.includes("岗位定制经历"));
  assert.ok(
    html.includes(
      "https://github.com/Y664-series/resume-experience-deep-dive",
    ),
  );
  assert.ok(
    html.includes(
      "https://resume-experience-deep-dive.example/og.png",
    ),
  );
  assert.equal(html.includes("codex-preview"), false);
  assert.equal(html.includes("react-loading-skeleton"), false);
});

test("removes disposable starter assets and metadata", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.ok(page.includes("履历经历深挖"));
  assert.ok(layout.includes('lang="zh-CN"'));
  assert.equal(page.includes("_sites-preview"), false);
  assert.equal(layout.includes("Starter Project"), false);
  assert.equal(packageJson.includes("react-loading-skeleton"), false);

  await assert.rejects(access(new URL("app/_sites-preview", projectRoot)));
  await access(new URL("public/og.png", projectRoot));
});
