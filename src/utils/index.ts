export function isArrayEmpty<T>(array: T[]): boolean {
  return array.length === 0
}

export function createThemePath(slug: string): string {
  return `/tema/${slug}`
}
