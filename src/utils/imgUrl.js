/**
 * Prepends Vite's base URL to an image path.
 * In production (GitHub Pages): BASE_URL = '/kavitaimmigration/'
 * In development: BASE_URL = '/'
 *
 * Usage: imgUrl('/images/foo.jpg') → '/kavitaimmigration/images/foo.jpg'
 */
const base = import.meta.env.BASE_URL; // e.g. '/kavitaimmigration/'

export default function imgUrl(path) {
  return base + path.replace(/^\//, '');
}
