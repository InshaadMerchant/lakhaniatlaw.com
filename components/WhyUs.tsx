"use client";
import {
  Box,
  Container,
  Typography,
  Grid,
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import SpeedIcon from "@mui/icons-material/Speed";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const reasons = [
  {
    icon: <VerifiedIcon sx={{ fontSize: 40 }} />,
    title: "Proven Track Record",
    description:
      "Decades of successfully navigating complex corporate matters for clients across industries, from startups to Fortune 500 partners.",
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 40 }} />,
    title: "Responsive & Efficient",
    description:
      "We understand that in business, time is money. Expect prompt responses, clear timelines, and no unnecessary delays.",
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 40 }} />,
    title: "Client-Centered Approach",
    description:
      "Every client receives senior-level attention. We take time to understand your business before we give any advice.",
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
    title: "Results-Driven Counsel",
    description:
      "We measure success by yours — favorable outcomes, protected interests, and the confidence to grow your business.",
  },
];

export default function WhyUs() {
  return (
    <Box
      id="why-us"
      sx={{
        background: "linear-gradient(135deg, #060D18 0%, #0A1628 100%)",
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle pattern */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage:
            "radial-gradient(circle at 2px 2px, #FFFFFF 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              mb: 2,
            }}
          >
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
              Why Choose Us
            </Typography>
            <Box sx={{ width: 40, height: 1, backgroundColor: "secondary.main" }} />
          </Box>
          <Typography
            variant="h2"
            sx={{ color: "white", fontSize: { xs: "2rem", md: "2.8rem" }, mb: 2 }}
          >
            The Lakhani Difference
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.6)",
              maxWidth: 520,
              mx: "auto",
              fontFamily: "'Helvetica Neue', sans-serif",
              lineHeight: 1.8,
            }}
          >
            We don't just practice law — we partner with you to protect and
            grow your business.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {reasons.map((r, i) => (
            <Grid item xs={12} sm={6} key={i}>
              <Box
                sx={{
                  p: 4,
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 2,
                  height: "100%",
                  transition: "border-color 0.2s ease, background-color 0.2s ease",
                  "&:hover": {
                    borderColor: "rgba(255,255,255,0.6)",
                    backgroundColor: "rgba(255,255,255,0.04)",
                    "& .why-icon": { color: "secondary.main" },
                  },
                }}
              >
                <Box
                  className="why-icon"
                  sx={{ color: "rgba(255,255,255,0.6)", mb: 2.5, transition: "color 0.2s" }}
                >
                  {r.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{ color: "white", mb: 1.5, fontWeight: 600 }}
                >
                  {r.title}
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.6)",
                    fontFamily: "'Helvetica Neue', sans-serif",
                    lineHeight: 1.8,
                    fontSize: "0.95rem",
                  }}
                >
                  {r.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
