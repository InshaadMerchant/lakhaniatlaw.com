"use client";
import { useState } from "react";
import {
  Box, Container, Typography, Grid, Card, CardContent,
  Button, Stack, Divider,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

const areas = [
  {
    title: "Healthcare Transactions",
    description:
      "The firm advises physician groups, healthcare entrepreneurs, and investors on a full range of healthcare transactions — including acquisitions and sales of medical practices, joint ventures, management services organization (MSO) structures, and healthcare entity formations. Karim brings firsthand operational knowledge of healthcare businesses, enabling him to provide practical counsel throughout the transaction lifecycle.",
    services: [
      "Practice acquisitions and sales",
      "Joint ventures and partnerships",
      "MSO and management company structures",
      "Healthcare entity formation and governance",
      "Physician group structuring",
      "Transaction due diligence",
    ],
  },
  {
    title: "Corporate & Business Law",
    description:
      "The firm provides comprehensive corporate and business law counsel to closely held businesses across industries. From entity formation and governance to day-to-day operational matters, Lakhani Law serves as a trusted legal partner for business owners who need practical, responsive legal advice.",
    services: [
      "Entity formation and structuring",
      "Corporate governance",
      "Operating and shareholder agreements",
      "Commercial contracts",
      "Buy-sell agreements",
      "Business succession planning",
    ],
  },
  {
    title: "Mergers & Acquisitions",
    description:
      "Lakhani Law advises buyers and sellers on mergers and acquisitions across a range of industries, with particular depth in healthcare M&A. The firm handles all phases of transactions — from initial structuring and due diligence through negotiation, documentation, and closing.",
    services: [
      "Buy-side and sell-side representation",
      "Transaction structuring",
      "Due diligence coordination",
      "Purchase agreement negotiation and drafting",
      "Regulatory and compliance review",
      "Post-closing integration matters",
    ],
  },
  {
    title: "Outside General Counsel for Startups",
    description:
      "For early-stage and growing companies that need ongoing legal support without the cost of in-house counsel, Lakhani Law offers outside general counsel services. Karim serves as a strategic legal partner — available for day-to-day questions, vendor and customer contracts, equity matters, and growth-stage transactions.",
    services: [
      "Ongoing legal advisory",
      "Equity and financing documentation",
      "Vendor and customer contracts",
      "Employment matters",
      "Intellectual property basics",
      "Strategic transaction support",
    ],
  },
];

export default function PracticeAreasPage() {
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
            What We Do
          </Typography>
          <Typography variant="h1" sx={{ color: "white", fontSize: { xs: "2.4rem", md: "3.2rem" }, maxWidth: 640, mb: 2 }}>
            Practice Areas
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.6)", maxWidth: 520, lineHeight: 1.8 }}>
            Focused legal counsel across healthcare transactions, business law, and mergers & acquisitions.
          </Typography>
        </Container>
      </Box>

      {/* Practice area detail cards */}
      <Box sx={{ backgroundColor: "background.default", py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Stack spacing={4}>
            {areas.map((area, i) => (
              <Card key={i} sx={{ overflow: "visible" }}>
                <CardContent sx={{ p: { xs: 4, md: 6 } }}>
                  <Grid container spacing={{ xs: 4, md: 8 }}>
                    <Grid item xs={12} md={5}>
                      <Box sx={{ width: 32, height: 2, backgroundColor: "secondary.main", mb: 2.5 }} />
                      <Typography variant="h4" sx={{ color: "primary.main", fontSize: { xs: "1.4rem", md: "1.7rem" }, mb: 2 }}>
                        {area.title}
                      </Typography>
                      <Typography sx={{ color: "text.secondary", lineHeight: 1.85, fontSize: "0.95rem" }}>
                        {area.description}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={7}>
                      <Typography sx={{ fontSize: "0.68rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: "text.secondary", mb: 2 }}>
                        Representative Services
                      </Typography>
                      <Grid container spacing={1.5}>
                        {area.services.map((s, j) => (
                          <Grid item xs={12} sm={6} key={j}>
                            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                              <Box sx={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: "secondary.main", mt: 0.85, flexShrink: 0 }} />
                              <Typography sx={{ fontSize: "0.9rem", color: "text.primary", lineHeight: 1.6 }}>
                                {s}
                              </Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ backgroundColor: "#F8F7F4", py: { xs: 8, md: 10 } }}>
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <Typography variant="h3" sx={{ color: "primary.main", fontSize: { xs: "1.6rem", md: "2rem" }, mb: 2 }}>
            Have a matter to discuss?
          </Typography>
          <Typography sx={{ color: "text.secondary", lineHeight: 1.8, mb: 4 }}>
            Reach out for a confidential, obligation-free consultation.
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
