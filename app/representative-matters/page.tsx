"use client";
import { useState } from "react";
import {
  Box, Container, Typography, Grid, Button, Stack, Divider,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

const categories = [
  {
    label: "Healthcare Transactions",
    matters: [
      "Represented physician group in the sale of a multi-location specialty practice to a private equity-backed platform",
      "Advised on the acquisition of a podiatry practice, including due diligence, purchase agreement negotiation, and post-closing transition",
      "Structured a joint venture between a physician group and a hospital system for an ambulatory surgery center",
      "Advised on formation and structuring of a management services organization (MSO) to support a growing healthcare network",
      "Represented buyer in the acquisition of a multi-site physical therapy business",
      "Counseled healthcare entrepreneur on a roll-up strategy for independent physician practices",
    ],
  },
  {
    label: "Corporate & Business Law",
    matters: [
      "Formed and structured multiple medical professional entities, including PCs, PLLCs, and management companies",
      "Negotiated and drafted operating agreements and shareholder agreements for closely held businesses",
      "Advised business owners on governance, equity restructuring, and dispute resolution",
      "Drafted and negotiated commercial contracts for healthcare and non-healthcare businesses",
      "Assisted clients with buy-sell agreements and succession planning for family-owned businesses",
    ],
  },
  {
    label: "Mergers & Acquisitions",
    matters: [
      "Led buy-side due diligence and documentation for multiple healthcare acquisitions",
      "Represented sellers in negotiating letters of intent, purchase agreements, and transition agreements",
      "Advised on earn-out structures and post-closing obligations in M&A transactions",
      "Counseled a startup on its acquisition by a strategic buyer, including employment and equity matters",
      "Advised on the merger of two professional service businesses, including entity restructuring and integration planning",
    ],
  },
  {
    label: "Outside General Counsel",
    matters: [
      "Served as outside general counsel for a healthcare technology startup, advising on contracts, equity, and vendor agreements",
      "Provided ongoing legal support to a growing e-commerce business, including commercial contracts and employment matters",
      "Advised an early-stage company on seed financing documentation, including SAFEs and convertible notes",
      "Supported a startup through its Series A process, including investor negotiations and equity plan matters",
    ],
  },
];

export default function RepresentativeMattersPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <Navbar onBooking={() => setBookingOpen(true)} />

      {/* Header */}
      <Box sx={{ backgroundColor: "#0A1628", pt: 8, pb: 10 }}>
        <Container maxWidth="lg">
          <Typography
            component="p"
            sx={{ color: "#C9A84C", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, mb: 2 }}
          >
            Experience
          </Typography>
          <Typography variant="h1" sx={{ color: "white", fontSize: { xs: "2.4rem", md: "3.2rem" }, maxWidth: 640, mb: 2 }}>
            Representative Matters
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.6)", maxWidth: 560, lineHeight: 1.8 }}>
            The following reflects a representative sample of transactions and engagements. Client names are omitted to preserve confidentiality.
          </Typography>
        </Container>
      </Box>

      {/* Matters */}
      <Box sx={{ backgroundColor: "background.default", py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Stack spacing={0} divider={<Divider />}>
            {categories.map((cat, i) => (
              <Box key={i} sx={{ py: { xs: 5, md: 7 } }}>
                <Grid container spacing={{ xs: 4, md: 8 }}>
                  <Grid item xs={12} md={3}>
                    <Typography
                      sx={{
                        fontWeight: 600, fontSize: "0.92rem", color: "primary.main",
                        position: { md: "sticky" }, top: { md: 100 },
                      }}
                    >
                      {cat.label}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Stack spacing={2.5}>
                      {cat.matters.map((matter, j) => (
                        <Box key={j} sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                          <Box
                            sx={{
                              width: 5, height: 5, borderRadius: "50%",
                              backgroundColor: "secondary.main",
                              mt: 1, flexShrink: 0,
                            }}
                          />
                          <Typography sx={{ color: "text.primary", lineHeight: 1.75, fontSize: "0.97rem" }}>
                            {matter}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Stack>

          <Box
            sx={{
              mt: 6, p: 4,
              backgroundColor: "rgba(10,22,40,0.04)",
              borderRadius: 1,
              border: "1px solid rgba(10,22,40,0.1)",
            }}
          >
            <Typography sx={{ fontSize: "0.82rem", color: "text.secondary", lineHeight: 1.75, fontStyle: "italic" }}>
              The matters listed above are representative of the types of engagements handled by the firm. Descriptions have been generalized to protect client confidentiality. Prior results do not guarantee a similar outcome.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ backgroundColor: "#F8F7F4", py: { xs: 8, md: 10 } }}>
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <Typography variant="h3" sx={{ color: "primary.main", fontSize: { xs: "1.6rem", md: "2rem" }, mb: 2 }}>
            Let's talk about your transaction
          </Typography>
          <Typography sx={{ color: "text.secondary", lineHeight: 1.8, mb: 4 }}>
            Every matter is different. Reach out for a confidential consultation to discuss your specific needs.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => setBookingOpen(true)}
            endIcon={<ArrowForwardIcon />}
            sx={{ backgroundColor: "primary.main", color: "white", py: 1.5, px: 4 }}
          >
            Book a Consultation
          </Button>
        </Container>
      </Box>

      <Footer />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
