"use client";
import { useState } from "react";
import {
  Box, Container, Typography, Button, Grid, Card,
  CardContent, Divider, Stack,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

// ── Practice area cards ────────────────────────────────────────────────────
const practiceAreas = [
  {
    title: "Healthcare Transactions",
    description:
      "Advising physician groups and healthcare entrepreneurs on practice acquisitions, sales, joint ventures, and complex healthcare transactions.",
  },
  {
    title: "Corporate & Business Law",
    description:
      "Entity formation, corporate governance, operating agreements, and day-to-day legal counsel for businesses at every stage of growth.",
  },
  {
    title: "Mergers & Acquisitions",
    description:
      "End-to-end M&A counsel — from structuring and due diligence through negotiation, documentation, and closing.",
  },
  {
    title: "Outside General Counsel",
    description:
      "Serving as embedded legal partner for startups and growing companies, providing strategic and practical legal support without the overhead of in-house counsel.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────
export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <Navbar onBooking={() => setBookingOpen(true)} />

      {/* ── Hero ── */}
      <Box
        id="hero"
        sx={{
          minHeight: "100vh",
          backgroundColor: "#0A1628",
          position: "relative",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Subtle texture */}
        <Box sx={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle at 70% 50%, rgba(255,255,255,0.08) 0%, transparent 60%)",
        }} />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, pt: 10, pb: 14 }}>
          <Box sx={{ maxWidth: 700 }}>
            <Typography
              component="p"
              sx={{
                color: "#FFFFFF", fontSize: "0.72rem", letterSpacing: "0.2em",
                textTransform: "uppercase", fontWeight: 600, mb: 3,
              }}
            >
              Lakhani Law, PLLC
            </Typography>

            <Typography
              variant="h1"
              sx={{
                color: "white",
                fontSize: { xs: "2.4rem", sm: "3.2rem", md: "4rem" },
                fontWeight: 600,
                lineHeight: 1.1,
                mb: 3,
                letterSpacing: "-0.03em",
              }}
            >
              Healthcare & Business Law for Modern Practices
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.65)",
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
                maxWidth: 560,
                mb: 5,
              }}
            >
              Boutique legal counsel for physician groups, healthcare entrepreneurs, and closely held businesses — combining deep legal expertise with firsthand business experience.
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 8 }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => setBookingOpen(true)}
                sx={{
                  backgroundColor: "#FFFFFF", color: "#0A1628",
                  fontWeight: 700, fontSize: "0.9rem", py: 1.6, px: 3.5,
                  "&:hover": { backgroundColor: "#F0F4F8" },
                }}
              >
                Schedule Consultation
              </Button>
              <Button
                component={Link}
                href="/practice-areas"
                variant="outlined"
                size="large"
                sx={{
                  borderColor: "rgba(255,255,255,0.3)", color: "white",
                  fontSize: "0.9rem", py: 1.6, px: 3.5,
                  "&:hover": { borderColor: "rgba(255,255,255,0.6)", backgroundColor: "rgba(255,255,255,0.06)" },
                }}
              >
                Our Practice Areas
              </Button>
            </Stack>

          </Box>
        </Container>
      </Box>

      {/* ── Firm intro ── */}
      <Box id="about" sx={{ backgroundColor: "background.default", py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                component="p"
                sx={{ color: "primary.main", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, mb: 2 }}
              >
                About the Firm
              </Typography>
              <Typography variant="h2" sx={{ color: "primary.main", fontSize: { xs: "1.9rem", md: "2.4rem" }, mb: 3 }}>
                Practical legal counsel rooted in real business experience
              </Typography>
              <Typography sx={{ color: "text.secondary", lineHeight: 1.85, mb: 2.5 }}>
                Lakhani Law, PLLC is a boutique firm focused on healthcare transactions, mergers and acquisitions, and business law. Founded by Karim Lakhani, the firm advises physician groups, healthcare entrepreneurs, and closely held businesses on strategic transactions, corporate governance, and day-to-day legal matters.
              </Typography>
              <Typography sx={{ color: "text.secondary", lineHeight: 1.85, mb: 4 }}>
                What sets the firm apart is Karim's background as both an attorney and a business owner — giving clients practical, business-oriented advice that extends beyond traditional legal counsel.
              </Typography>
              <Button
                component={Link}
                href="/about"
                variant="outlined"
                color="primary"
                endIcon={<ArrowForwardIcon fontSize="small" />}
              >
                About Karim Lakhani
              </Button>
            </Grid>

            {/* Credential bar */}
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {[
                  { label: "Education", value: "Duke University School of Law · UT Austin McCombs" },
                  { label: "Prior Experience", value: "Greenberg Traurig · Norton Rose Fulbright · McKinsey & Company" },
                  { label: "Focus", value: "Healthcare Transactions · M&A · Business Law" },
                  { label: "Location", value: "Houston, Texas" },
                ].map((item) => (
                  <Box
                    key={item.label}
                    sx={{
                      p: 3,
                      backgroundColor: "white",
                      border: "1px solid rgba(0,0,0,0.07)",
                      borderRadius: 1,
                      borderLeft: "3px solid",
                      borderLeftColor: "primary.main",
                    }}
                  >
                    <Typography sx={{ fontSize: "0.68rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "text.secondary", mb: 0.5 }}>
                      {item.label}
                    </Typography>
                    <Typography sx={{ fontSize: "0.92rem", color: "text.primary", fontWeight: 500 }}>
                      {item.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── Practice Areas ── */}
      <Box id="practice-areas" sx={{ backgroundColor: "white", py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 7 }}>
            <Typography
              component="p"
              sx={{ color: "primary.main", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, mb: 2 }}
            >
              What We Do
            </Typography>
            <Box sx={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 2 }}>
              <Typography variant="h2" sx={{ color: "primary.main", fontSize: { xs: "1.9rem", md: "2.4rem" } }}>
                Practice Areas
              </Typography>
              <Button
                component={Link}
                href="/practice-areas"
                endIcon={<ArrowForwardIcon fontSize="small" />}
                sx={{ color: "primary.main", fontWeight: 500, fontSize: "0.85rem" }}
              >
                View all
              </Button>
            </Box>
          </Box>

          <Grid container spacing={3}>
            {practiceAreas.map((area) => (
              <Grid item xs={12} sm={6} key={area.title}>
                <Card
                  sx={{
                    height: "100%",
                    transition: "box-shadow 0.2s, border-color 0.2s",
                    "&:hover": {
                      boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
                      borderColor: "rgba(255,255,255,0.4)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, height: "100%", display: "flex", flexDirection: "column" }}>
                    <Box sx={{ width: 32, height: 2, backgroundColor: "primary.main", mb: 2.5 }} />
                    <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 600, mb: 1.5, fontSize: "1.05rem" }}>
                      {area.title}
                    </Typography>
                    <Typography sx={{ color: "text.secondary", fontSize: "0.92rem", lineHeight: 1.75, flex: 1 }}>
                      {area.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── CTA Banner ── */}
      <Box sx={{ backgroundColor: "#F8F7F4", py: { xs: 8, md: 10 } }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h2" sx={{ color: "primary.main", fontSize: { xs: "1.8rem", md: "2.4rem" }, mb: 2 }}>
            Ready to discuss your matter?
          </Typography>
          <Typography sx={{ color: "text.secondary", lineHeight: 1.8, maxWidth: 520, mx: "auto", mb: 5 }}>
            Initial consultations are confidential and obligation-free. Reach out to discuss how Lakhani Law can help.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              onClick={() => setBookingOpen(true)}
              sx={{ backgroundColor: "primary.main", color: "white", py: 1.6, px: 4, "&:hover": { backgroundColor: "primary.light" } }}
            >
              Book a Consultation
            </Button>
            <Button
              component={Link}
              href="/contact"
              variant="outlined"
              size="large"
              color="primary"
              sx={{ py: 1.6, px: 4 }}
            >
              Send a Message
            </Button>
          </Stack>
        </Container>
      </Box>

      <Footer />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
