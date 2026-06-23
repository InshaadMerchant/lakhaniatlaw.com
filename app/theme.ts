import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0A1628",       // Deep navy
      light: "#162440",
      dark: "#060D18",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FFFFFF",       // White accent
      light: "#F0F4F8",
      dark: "#E2E8F0",
      contrastText: "#0A1628",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F8F7F4",
    },
    text: {
      primary: "#0A1628",
      secondary: "#4A5568",
    },
  },
  typography: {
    fontFamily: "'Georgia', 'Times New Roman', serif",
    h1: {
      fontFamily: "'Georgia', serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: "'Georgia', serif",
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h3: { fontFamily: "'Georgia', serif", fontWeight: 600 },
    h4: { fontFamily: "'Georgia', serif", fontWeight: 600 },
    h5: { fontFamily: "'Georgia', serif", fontWeight: 600 },
    h6: { fontFamily: "'Georgia', serif", fontWeight: 600 },
    body1: {
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
      lineHeight: 1.75,
    },
    body2: {
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
      lineHeight: 1.65,
    },
    button: {
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },
  },
  shape: { borderRadius: 2 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "12px 32px",
          borderRadius: 2,
        },
        containedPrimary: {
          backgroundColor: "#0A1628",
          color: "#FFFFFF",
          "&:hover": { backgroundColor: "#162440" },
        },
        outlinedPrimary: {
          borderColor: "#0A1628",
          color: "#0A1628",
          "&:hover": {
            borderColor: "#162440",
            backgroundColor: "rgba(10,22,40,0.06)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          boxShadow: "0 2px 20px rgba(10,22,40,0.08)",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: "rgba(10,22,40,0.12)" },
      },
    },
  },
});

export default theme;
