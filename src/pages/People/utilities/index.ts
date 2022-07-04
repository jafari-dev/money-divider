import { colors } from "@mui/material";

const AVATAR_COLORS = [
  colors.amber[500],
  colors.deepPurple[500],
  colors.deepOrange[500],
  colors.green[500],
  colors.teal[500],
  colors.indigo[500],
  colors.brown[500],
];

export function getAvatarColor(itemIndex: number) {
  const matchedIndex = itemIndex % AVATAR_COLORS.length;

  return AVATAR_COLORS[matchedIndex];
}
