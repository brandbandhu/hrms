// The shared Vite config wrapper already includes the following - do NOT add them manually
// or the app will break with duplicate plugins:
//   - start integration, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using a Vercel target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/router dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect the bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Force the deploy adapter on non-Lovable hosts so Vercel gets a proper build output
  // instead of falling back to the default placeholder page.
  nitro: { preset: "vercel" },
});
