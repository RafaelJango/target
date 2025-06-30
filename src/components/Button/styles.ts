import { StyleSheet } from "react-native";

import { colors, fontFamily } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue[500],
    height: 48,
    width: "100%",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    fontFamily: fontFamily.medium,
    color: colors.white,
  },
});
