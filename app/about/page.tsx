"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Box, Container, Typography, Grid, Divider, Button, Stack,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import BusinessIcon from "@mui/icons-material/Business";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

const credentials = [
  {
    icon: <SchoolIcon sx={{ fontSize: 20 }} />,
    label: "Education",
    items: [
      "J.D., Duke University School of Law",
      "B.B.A., McCombs School of Business, The University of Texas at Austin",
    ],
  },
  {
    icon: <WorkIcon sx={{ fontSize: 20 }} />,
    label: "Prior Experience",
    items: [
      "Greenberg Traurig",
      "Norton Rose Fulbright",
      "McKinsey & Company",
    ],
  },
  {
    icon: <BusinessIcon sx={{ fontSize: 20 }} />,
    label: "Business Ownership",
    items: [
      "Co-owner, Arch Foot & Ankle",
      "Multi-location podiatry practice, Houston, TX",
    ],
  },
];

export default function AboutPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <Navbar onBooking={() => setBookingOpen(true)} />

      {/* Page header */}
      <Box sx={{ backgroundColor: "#0A1628", pt: 8, pb: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography
                component="p"
                sx={{ color: "#FFFFFF", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, mb: 2 }}
              >
                About
              </Typography>
              <Typography variant="h1" sx={{ color: "white", fontSize: { xs: "2.4rem", md: "3.2rem" }, maxWidth: 600 }}>
                Karim Lakhani
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.6)", mt: 1.5, fontSize: "1rem" }}>
                Managing Attorney, Lakhani Law, PLLC
              </Typography>
            </Grid>
            <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: { xs: "flex-start", md: "flex-end" } }}>
              <Box
                sx={{
                  position: "relative",
                  width: { xs: 180, md: 260 },
                  height: { xs: 240, md: 340 },
                  borderRadius: 2,
                  overflow: "hidden",
                  border: "3px solid rgba(255,255,255,0.4)",
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/KL Image.jpg"
                  alt="Karim Lakhani, Founder of Lakhani Law, PLLC"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  priority
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Main content */}
      <Box sx={{ backgroundColor: "background.default", py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 6, md: 10 }}>
            {/* Bio */}
            <Grid item xs={12} md={7}>
              <Stack spacing={3}>
                <Typography sx={{ color: "text.primary", lineHeight: 1.9, fontSize: "1.02rem" }}>
                  Karim Lakhani is the founder of Lakhani Law, PLLC, a boutique law firm focused on healthcare transactions, mergers and acquisitions, physician practice formation, and business law. He represents physicians, healthcare organizations, entrepreneurs, and closely held businesses in a wide range of corporate and transactional matters.
                </Typography>
                <Typography sx={{ color: "text.primary", lineHeight: 1.9, fontSize: "1.02rem" }}>
                  What distinguishes Karim's practice is his firsthand experience as both an attorney and a business owner. In addition to advising healthcare clients, he is a co-owner of Arch Foot & Ankle, a multi-location medical practice serving patients throughout the Houston area. Having personally navigated the challenges of growing a healthcare business—including acquisitions, provider recruitment, regulatory compliance, operations, and strategic planning—he understands the practical realities his clients face every day.
                </Typography>
                <Typography sx={{ color: "text.primary", lineHeight: 1.9, fontSize: "1.02rem" }}>
                  Karim's approach is grounded in the belief that legal advice should advance business objectives, not simply identify risks. Whether guiding a physician through the purchase or sale of a practice, structuring a partnership, negotiating contracts, or advising on day-to-day business matters, he focuses on delivering practical solutions that support long-term growth and success.
                </Typography>
                <Typography sx={{ color: "text.primary", lineHeight: 1.9, fontSize: "1.02rem" }}>
                  Prior to founding Lakhani Law, Karim practiced with leading international law firms, including Greenberg Traurig and Norton Rose Fulbright, where he advised clients on mergers and acquisitions, corporate governance, and complex business transactions. He also served as a consultant with McKinsey & Company, advising organizations on healthcare and business strategy.
                </Typography>
                <Typography sx={{ color: "text.primary", lineHeight: 1.9, fontSize: "1.02rem" }}>
                  Karim earned his Juris Doctor from Duke University School of Law and his Bachelor of Business Administration from McCombs School of Business.
                </Typography>
                <Typography sx={{ color: "text.primary", lineHeight: 1.9, fontSize: "1.02rem" }}>
                  Today, Karim combines sophisticated legal training with real-world operating experience to help clients navigate transactions, manage risk, and build stronger businesses.
                </Typography>
              </Stack>

              <Divider sx={{ my: 5 }} />

              <Button
                variant="contained"
                size="large"
                onClick={() => setBookingOpen(true)}
                sx={{ backgroundColor: "primary.main", color: "white", "&:hover": { backgroundColor: "primary.light" } }}
              >
                Schedule a Consultation
              </Button>
            </Grid>

            {/* Credentials sidebar */}
            <Grid item xs={12} md={5}>
              <Box sx={{ position: "sticky", top: 100 }}>
                {credentials.map((cred, i) => (
                  <Box
                    key={i}
                    sx={{
                      mb: 3,
                      p: 3.5,
                      backgroundColor: "white",
                      border: "1px solid rgba(0,0,0,0.07)",
                      borderRadius: 1,
                      borderLeft: "3px solid #FFFFFF",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2, color: "primary.main" }}>
                      {cred.icon}
                      <Typography sx={{ fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "text.secondary" }}>
                        {cred.label}
                      </Typography>
                    </Box>
                    <Stack spacing={1}>
                      {cred.items.map((item, j) => (
                        <Typography key={j} sx={{ fontSize: "0.92rem", color: "text.primary", lineHeight: 1.6 }}>
                          {item}
                        </Typography>
                      ))}
                    </Stack>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
