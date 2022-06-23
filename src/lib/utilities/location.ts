import { MajorPath } from "#/types";

function removePaddingSlashes(path: string): string {
  // Path without any starting or ending slash
  return path.replace(/^\/|\/$/gu, "");
}

export function splitPathBySlash(path: string): string[] {
  return removePaddingSlashes(path).split("/");
}

export function isMajorPathValid(path: string): boolean {
  const MAJOR_PATHS = Object.values(MajorPath);
  const majorPath = removePaddingSlashes(path).split("/")[0];

  if (MAJOR_PATHS.find((path) => path === majorPath)) return true;
  else return false;
}

export function isPathValid(path: string): boolean {
  if (path === "/") return true;
  else if (/\/\/+/gu.test(path)) return false;
  else if (isMajorPathValid(path) === false) return false;
  else if (splitPathBySlash(path).length > 2) return false;
  else return true;
}

export function parsePath(path: string): { majorPath: string; minorPath: string } {
  const [majorPath = "", minorPath = ""] = splitPathBySlash(path);

  return { majorPath, minorPath };
}
