import htmlPage from "./index.html";
import clipboardCheck from "./public/clipboard-check.svg";
import clipboardSvg from "./public/clipboard.svg";
import searchSvg from "./public/search.svg";
import bangs from "./src/bang.ts";
import globalcss from "./src/global.css";
const server = Bun.serve({
    port: 6882, // defaults to $BUN_PORT, $PORT, $NODE_PORT otherwise 3000
    hostname: "u.oxk.cc", // defaults to "0.0.0.0"
    
  // `routes` requires Bun v1.2.3+
  routes: {
    "/": htmlPage,
    "/clipboard-check.svg": clipboardCheck,
    "/clipboard.svg": clipboardSvg,
    "/search.svg": searchSvg,
    "/bang": bangs,
    "/global.css": globalcss,
     // Wildcard route for all routes that start with "/api/" and aren't otherwise matched
    "/*": Response.json({ message: "Not found" }, { status: 404 }),
  },

  // (optional) fallback for unmatched routes:
  // Required if Bun's version < 1.2.3
});

console.log(`Server running at ${server.url}`);
console.log(server.port); // 3000
console.log(server.url); // http://localhost:3000