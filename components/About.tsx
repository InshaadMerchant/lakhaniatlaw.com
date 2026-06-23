"use client";
import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  Button,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const highlights = [
  "Personalized attention from a senior attorney on every matter",
  "Deep expertise in corporate transactions and business law",
  "Responsive, clear communication — no legal jargon",
  "Proactive counsel to prevent issues before they arise",
];

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        backgroundColor: "white",
        py: { xs: 8, md: 12 },
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          {/* Left — decorative block */}
          <Grid item xs={12} md={5}>
            <Box sx={{ position: "relative" }}>
              {/* Navy block */}
              <Box
                sx={{
                  backgroundColor: "primary.main",
                  borderRadius: 2,
                  p: 5,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <Typography
                  sx={{
                    color: "secondary.main",
                    fontSize: "0.7rem",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    fontFamily: "'Helvetica Neue', sans-serif",
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  Established Excellence
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    color: "white",
                    fontSize: { xs: "2.4rem", md: "3.2rem" },
                    lineHeight: 1.15,
                    mb: 3,
                  }}
                >
                  Two Decades of Corporate Legal Excellence
                </Typography>
                <Divider sx={{ borderColor: "rgba(255,255,255,0.4)", mb: 3 }} />
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    fontFamily: "'Helvetica Neue', sans-serif",
                    fontSize: "0.95rem",
                    lineHeight: 1.8,
                    fontStyle: "italic",
                  }}
                >
                  "Our commitment is not just to the law, but to the success
                  of the businesses and entrepreneurs we serve."
                </Typography>
                <Typography
                  sx={{
                    color: "secondary.main",
                    mt: 2,
                    fontSize: "0.82rem",
                    fontFamily: "'Helvetica Neue', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  — Founding Partner, Lakhani Law Firm
                </Typography>
              </Box>

              {/* Gold accent box */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: -16,
                  right: -16,
                  width: 100,
                  height: 100,
                  backgroundColor: "secondary.main",
                  borderRadius: 1,
                  zIndex: 0,
                }}
              />
            </Box>
          </Grid>

          {/* Right — content */}
          <Grid item xs={12} md={7}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              <Box sx={{ width: 40, height: 1, backgroundColor: "secondary.main" }} />
              <Typography
                sx={{
                  color: "secondary.main",
                  fontSize: "0.72rem",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontWeight: 600,
                }}
              >
                About Our Firm
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                color: "primary.main",
                fontSize: { xs: "2rem", md: "2.6rem" },
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              Your Business Deserves Experienced Legal Partners
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                mb: 2.5,
                fontFamily: "'Helvetica Neue', sans-serif",
                lineHeight: 1.85,
              }}
            >
              Founded on the principles of integrity, precision, and client-first
              service, Lakhani Law Firm has been a trusted legal partner for
              businesses across industries. We combine the depth of a large firm
              with the personalized attention of a boutique practice.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                mb: 4,
                fontFamily: "'Helvetica Neue', sans-serif",
                lineHeight: 1.85,
              }}
            >
              Whether you are launching a new venture, navigating a complex
              transaction, or protecting your business in litigation, our team
              brings the expertise and strategic insight to help you succeed.
            </Typography>

            {/* Highlights */}
            <Box sx={{ mb: 4 }}>
              {highlights.map((h, i) => (
                <Box
                  key={i}
                  sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, mb: 2 }}
                >
                  <CheckCircleOutlineIcon
                    sx={{ color: "secondary.main", mt: 0.2, fontSize: 20, flexShrink: 0 }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.primary",
                      fontFamily: "'Helvetica Neue', sans-serif",
                      lineHeight: 1.6,
                    }}
                  >
                    {h}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              href="#contact"
              sx={{
                backgroundColor: "secondary.main",
                color: "primary.main",
                fontWeight: 700,
                fontSize: "0.8rem",
                py: 1.6,
                px: 4,
                "&:hover": { backgroundColor: "secondary.dark" },
              }}
            >
              Meet Our Team
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
