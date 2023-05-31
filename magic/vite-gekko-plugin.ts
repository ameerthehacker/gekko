import path from 'path';

export function viteGekkoPlugin() {
  return {
    name: 'vite-gekko-plugin',
    enforce: 'pre',
    resolveId(id: string) {
      const matcher = /(.*)\.server/;

      if (matcher.test(id)) {
        return { id: path.resolve(__dirname, './backend-proxy.ts') };
      }

      return null;
    }
  }
}
