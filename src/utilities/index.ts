export function generateId() {
  const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  const randomString = Array.from({ length: 24 }, () =>
    CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length))
  ).join("");

  const currentDate = new Date().getTime().toString(36).toUpperCase();

  return `${randomString}-${currentDate}`;
}
