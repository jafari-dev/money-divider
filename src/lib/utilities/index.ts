export function generateId() {
  const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  const randomString = Array.from({ length: 24 }, () =>
    CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length))
  ).join("");

  const currentDate = new Date().getTime().toString(36).toUpperCase();

  return `${randomString}-${currentDate}`;
}

export function getAvatarName(name: string): string {
  const [firstWord, secondWord] = name.split(" ");
  const firstLetter = firstWord[0].toUpperCase();
  const secondLetter = secondWord ? secondWord[0].toUpperCase() : "";

  return firstLetter + secondLetter;
}

export function downloadContent(content: string): void {
  const TYPE = "text/plain;charset=utf-8";
  const contentAsBlob = new Blob([content], { type: TYPE });

  // Current date with YYYY-DD-MM format
  const currentDate = new Date().toLocaleDateString().split("/").reverse().join("-");
  // Current time with HH:MM:SS format
  const currentTime = new Date().toTimeString().split(" ")[0].replace(/:/g, "-");

  const fileName = `MD (${currentDate}) (${currentTime})`;

  const url = window.URL || window.webkitURL;
  const link = url.createObjectURL(contentAsBlob);
  const downloadElement = document.createElement("a");

  downloadElement.setAttribute("Download", fileName);
  downloadElement.setAttribute("href", link);
  document.body.appendChild(downloadElement);
  downloadElement.click();
  document.body.removeChild(downloadElement);
}
