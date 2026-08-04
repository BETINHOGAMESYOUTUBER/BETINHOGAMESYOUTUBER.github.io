export function getAssetPath(src: string): string {
  if (!src) return '';
  if (src.startsWith('http://') || src.startsWith('https://')) return src;
  const clean = src.startsWith('/') ? src : `/${src}`;

  if (process.env.NODE_ENV === 'production') {
    if (clean.startsWith('/inicio')) return clean;
    return `/inicio${clean}`;
  }
  return clean;
}
