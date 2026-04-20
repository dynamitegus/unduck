import app from "./index.html";
const server = Bun.serve({
  port: 6882, // defaults to $BUN_PORT, $PORT, $NODE_PORT otherwise 3000
  //hostname: "u.oxk.cc", // defaults to "0.0.0.0"

  // `routes` requires Bun v1.2.3+
  routes: {
    "/clipboard-check.svg": new Response(await Bun.file("./public/clipboard-check.svg").bytes()),
    "/clipboard.svg": new Response(await Bun.file("./public/clipboard.svg").bytes()),
    "/bang": new Response(await Bun.file("./src/bang.ts").bytes()),
    "/global.css": new Response(await Bun.file("./src/global.css").bytes()),
    "/": app,
    // Wildcard route for all routes that start with "/api/" and aren't otherwise matched
  },
  fetch(request) {
    return new Response("Not Found", { status: 404 });
  },

  // (optional) fallback for unmatched routes:
  // Required if Bun's version < 1.2.3
});

console.log(`Server running at ${server.url}`);
console.log(server.port); // 3000
console.log(server.url); // http://localhost:3000
