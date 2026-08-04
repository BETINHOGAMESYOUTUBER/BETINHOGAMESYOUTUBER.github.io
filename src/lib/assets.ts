export function getAssetPath(src: string): string {
  if (!src) return '';
  if (src.startsWith('http://') || src.startsWith('https://')) return src;
  return src.startsWith('/') ? src : `/${src}`;
}
