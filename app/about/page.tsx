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
                sx={{ color: "#C9A84C", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, mb: 2 }}
              >
                About
              </Typography>
              <Typography variant="h1" sx={{ color: "white", fontSize: { xs: "2.4rem", md: "3.2rem" }, maxWidth: 600 }}>
                Karim Lakhani
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.6)", mt: 1.5, fontSize: "1rem" }}>
                Founder, Lakhani Law, PLLC
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
                  border: "3px solid rgba(201,168,76,0.4)",
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
                  Karim Lakhani is the founder of Lakhani Law, PLLC, a boutique law firm focused on healthcare transactions, mergers and acquisitions, and business law. He advises physician groups, healthcare entrepreneurs, and closely held businesses on strategic transactions, corporate governance, and day-to-day legal matters.
                </Typography>
                <Typography sx={{ color: "text.primary", lineHeight: 1.9, fontSize: "1.02rem" }}>
                  In addition to his legal practice, Karim is an entrepreneur and operator with extensive experience building and managing healthcare organizations. He is a co-owner of Arch Foot & Ankle, a multi-location podiatry practice in the Houston area, giving him firsthand insight into the operational and business challenges faced by healthcare providers. This experience allows him to provide practical, business-oriented advice that extends beyond traditional legal counsel.
                </Typography>
                <Typography sx={{ color: "text.primary", lineHeight: 1.9, fontSize: "1.02rem" }}>
                  Prior to founding Lakhani Law, Karim practiced at Greenberg Traurig and Norton Rose Fulbright, where he advised clients on corporate transactions and complex business matters. He also worked as a consultant with McKinsey & Company, focusing on healthcare and strategy engagements.
                </Typography>
                <Typography sx={{ color: "text.primary", lineHeight: 1.9, fontSize: "1.02rem" }}>
                  Karim received his J.D. from Duke University School of Law and his B.B.A. from the McCombs School of Business at The University of Texas at Austin.
                </Typography>
                <Typography sx={{ color: "text.primary", lineHeight: 1.9, fontSize: "1.02rem" }}>
                  Drawing on his background as both an attorney and a business owner, Karim partners with clients to navigate growth opportunities, acquisitions, and operational challenges with a practical and strategic approach.
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
                      borderLeft: "3px solid #C9A84C",
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
