"use client";
import { useState } from "react";
import {
  Box, Container, Typography, Grid, TextField, Button,
  MenuItem, Stack, Divider, Link as MuiLink,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

const matters = [
  "Healthcare Transactions",
  "Corporate & Business Law",
  "Mergers & Acquisitions",
  "Outside General Counsel",
  "Other",
];

export default function ContactPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <Navbar onBooking={() => setBookingOpen(true)} />

      {/* Header */}
      <Box sx={{ backgroundColor: "#0A1628", pt: 8, pb: 10 }}>
        <Container maxWidth="lg">
          <Typography
            component="p"
            sx={{ color: "#FFFFFF", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, mb: 2 }}
          >
            Get in Touch
          </Typography>
          <Typography variant="h1" sx={{ color: "white", fontSize: { xs: "2.4rem", md: "3.2rem" }, maxWidth: 560, mb: 2 }}>
            Contact
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.6)", maxWidth: 480, lineHeight: 1.8 }}>
            Initial consultations are confidential and obligation-free. We typically respond within one business day.
          </Typography>
        </Container>
      </Box>

      {/* Content */}
      <Box sx={{ backgroundColor: "background.default", py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 6, md: 10 }}>
            {/* Form */}
            <Grid item xs={12} md={7}>
              <Typography variant="h5" sx={{ color: "primary.main", mb: 4, fontWeight: 600 }}>
                Send a Message
              </Typography>
              <Box component="form">
                <Grid container spacing={2.5}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth required label="First Name" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth required label="Last Name" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth required label="Email" type="email" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Phone" type="tel" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth select label="Area of Interest" defaultValue="">
                      {matters.map((m) => (
                        <MenuItem key={m} value={m}>{m}</MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={5}
                      label="How can we help?"
                      helperText="Please do not include sensitive or confidential information. Sending this form does not create an attorney-client relationship."
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      endIcon={<SendIcon />}
                      sx={{ backgroundColor: "primary.main", color: "white", py: 1.6, "&:hover": { backgroundColor: "primary.light" } }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            {/* Info sidebar */}
            <Grid item xs={12} md={5}>
              <Box sx={{ position: "sticky", top: 100 }}>
                <Typography variant="h5" sx={{ color: "primary.main", mb: 4, fontWeight: 600 }}>
                  Contact Information
                </Typography>

                <Stack spacing={3} divider={<Divider />}>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <EmailIcon sx={{ color: "primary.main", mt: 0.2, flexShrink: 0 }} />
                    <Box>
                      <Typography sx={{ fontWeight: 600, fontSize: "0.85rem", color: "text.secondary", mb: 0.5 }}>Email</Typography>
                      <MuiLink href="mailto:karim@lakhaniatlaw.com" underline="hover" sx={{ color: "primary.main", fontSize: "0.95rem" }}>
                        karim@lakhaniatlaw.com
                      </MuiLink>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <LocationOnIcon sx={{ color: "primary.main", mt: 0.2, flexShrink: 0 }} />
                    <Box>
                      <Typography sx={{ fontWeight: 600, fontSize: "0.85rem", color: "text.secondary", mb: 0.5 }}>Location</Typography>
                      <Typography sx={{ color: "text.primary", fontSize: "0.95rem" }}>Houston, Texas</Typography>
                    </Box>
                  </Box>
                </Stack>

                <Divider sx={{ my: 4 }} />

                {/* Book consultation box */}
                <Box
                  sx={{
                    p: 4,
                    backgroundColor: "#0A1628",
                    borderRadius: 1,
                  }}
                >
                  <Typography sx={{ color: "#FFFFFF", fontWeight: 600, fontSize: "0.92rem", mb: 1 }}>
                    Prefer to schedule directly?
                  </Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.65)", fontSize: "0.88rem", lineHeight: 1.75, mb: 3 }}>
                    Book a 30-minute consultation and get a confirmed time on the calendar right away.
                  </Typography>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={() => setBookingOpen(true)}
                    sx={{ backgroundColor: "#FFFFFF", color: "#0A1628", fontWeight: 600, "&:hover": { backgroundColor: "#F0F4F8" } }}
                  >
                    Book a Consultation
                  </Button>
                </Box>
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
