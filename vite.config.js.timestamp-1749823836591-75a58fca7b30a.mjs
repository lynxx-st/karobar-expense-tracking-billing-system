// vite.config.js
import { defineConfig } from "file:///project/sandbox/user-workspace/node_modules/vite/dist/node/index.js";
import vue from "file:///project/sandbox/user-workspace/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { fileURLToPath, URL } from "url";
var __vite_injected_original_import_meta_url = "file:///project/sandbox/user-workspace/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./resources/js", __vite_injected_original_import_meta_url))
    }
  },
  server: {
    port: 8e3,
    hmr: {
      host: "localhost"
    }
  },
  build: {
    outDir: "public/build",
    manifest: true,
    rollupOptions: {
      input: "resources/js/app.js"
    }
  },
  optimizeDeps: {
    include: [
      "vue",
      "vue-router",
      "pinia",
      "axios"
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvcHJvamVjdC9zYW5kYm94L3VzZXItd29ya3NwYWNlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvcHJvamVjdC9zYW5kYm94L3VzZXItd29ya3NwYWNlL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9wcm9qZWN0L3NhbmRib3gvdXNlci13b3Jrc3BhY2Uvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICd1cmwnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFt2dWUoKV0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vcmVzb3VyY2VzL2pzJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICB9XG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDgwMDAsXG4gICAgaG1yOiB7XG4gICAgICBob3N0OiAnbG9jYWxob3N0J1xuICAgIH1cbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6ICdwdWJsaWMvYnVpbGQnLFxuICAgIG1hbmlmZXN0OiB0cnVlLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGlucHV0OiAncmVzb3VyY2VzL2pzL2FwcC5qcydcbiAgICB9XG4gIH0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGluY2x1ZGU6IFtcbiAgICAgICd2dWUnLFxuICAgICAgJ3Z1ZS1yb3V0ZXInLFxuICAgICAgJ3BpbmlhJyxcbiAgICAgICdheGlvcydcbiAgICBdXG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStRLFNBQVMsb0JBQW9CO0FBQzVTLE9BQU8sU0FBUztBQUNoQixTQUFTLGVBQWUsV0FBVztBQUZtSSxJQUFNLDJDQUEyQztBQUl2TixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsSUFBSSxDQUFDO0FBQUEsRUFDZixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLGtCQUFrQix3Q0FBZSxDQUFDO0FBQUEsSUFDL0Q7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUEsTUFDSCxNQUFNO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGVBQWU7QUFBQSxNQUNiLE9BQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
