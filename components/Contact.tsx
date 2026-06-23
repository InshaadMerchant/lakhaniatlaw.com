"use client";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  MenuItem,
  Divider,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";

const matters = [
  "Corporate Formation & Governance",
  "Mergers & Acquisitions",
  "Contract Drafting & Review",
  "Commercial Litigation",
  "Banking & Finance",
  "Regulatory Compliance",
  "Other",
];

const contactInfo = [
  { icon: <PhoneIcon />, label: "Phone", value: "(555) 123-4567", href: "tel:+15551234567" },
  { icon: <EmailIcon />, label: "Email", value: "contact@lakhaniatlaw.com", href: "mailto:contact@lakhaniatlaw.com" },
  { icon: <LocationOnIcon />, label: "Office", value: "123 Legal Plaza, Suite 400\nNew York, NY 10001", href: "#" },
  { icon: <AccessTimeIcon />, label: "Hours", value: "Mon–Fri: 9:00 AM – 6:00 PM\nWeekends by appointment", href: "#" },
];

export default function Contact({ onBooking }: { onBooking?: () => void }) {
  return (
    <Box
      id="contact"
      sx={{ backgroundColor: "white", py: { xs: 8, md: 12 } }}
    >
      <Container maxWidth="lg">
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
              Get In Touch
            </Typography>
            <Box sx={{ width: 40, height: 1, backgroundColor: "secondary.main" }} />
          </Box>
          <Typography
            variant="h2"
            sx={{ color: "primary.main", fontSize: { xs: "2rem", md: "2.8rem" }, mb: 2 }}
          >
            Schedule Your Consultation
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              maxWidth: 520,
              mx: "auto",
              fontFamily: "'Helvetica Neue', sans-serif",
              lineHeight: 1.8,
            }}
          >
            Initial consultations are confidential and obligation-free. Tell us
            about your matter and we'll be in touch within one business day.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Box
              component="form"
              sx={{
                backgroundColor: "#F8F7F4",
                borderRadius: 2,
                p: { xs: 3, md: 5 },
                border: "1px solid rgba(10,22,40,0.08)",
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    variant="outlined"
                    required
                    InputProps={{ sx: { fontFamily: "'Helvetica Neue', sans-serif" } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    required
                    InputProps={{ sx: { fontFamily: "'Helvetica Neue', sans-serif" } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    type="email"
                    variant="outlined"
                    required
                    InputProps={{ sx: { fontFamily: "'Helvetica Neue', sans-serif" } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    type="tel"
                    variant="outlined"
                    InputProps={{ sx: { fontFamily: "'Helvetica Neue', sans-serif" } }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    select
                    label="Area of Legal Matter"
                    variant="outlined"
                    defaultValue=""
                    InputProps={{ sx: { fontFamily: "'Helvetica Neue', sans-serif" } }}
                  >
                    {matters.map((m) => (
                      <MenuItem key={m} value={m} sx={{ fontFamily: "'Helvetica Neue', sans-serif" }}>
                        {m}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Brief Description of Your Matter"
                    multiline
                    rows={5}
                    variant="outlined"
                    InputProps={{ sx: { fontFamily: "'Helvetica Neue', sans-serif" } }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    endIcon={<SendIcon />}
                    sx={{
                      backgroundColor: "primary.main",
                      color: "white",
                      py: 1.8,
                      fontWeight: 700,
                      fontSize: "0.82rem",
                      "&:hover": { backgroundColor: "primary.light" },
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={5}>
            <Box sx={{ pl: { md: 2 } }}>
              <Typography
                variant="h5"
                sx={{ color: "primary.main", mb: 4, fontWeight: 700 }}
              >
                Contact Information
              </Typography>

              {contactInfo.map((c, i) => (
                <Box key={i}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2.5,
                      alignItems: "flex-start",
                      py: 3,
                      textDecoration: "none",
                      "&:hover .contact-label": { color: "secondary.main" },
                    }}
                    component={c.href !== "#" ? "a" : "div"}
                    href={c.href !== "#" ? c.href : undefined}
                  >
                    <Box
                      sx={{
                        color: "secondary.main",
                        mt: 0.2,
                        flexShrink: 0,
                        "& svg": { fontSize: 22 },
                      }}
                    >
                      {c.icon}
                    </Box>
                    <Box>
                      <Typography
                        className="contact-label"
                        sx={{
                          color: "primary.main",
                          fontWeight: 700,
                          fontFamily: "'Georgia', serif",
                          mb: 0.5,
                          fontSize: "0.95rem",
                          transition: "color 0.2s",
                        }}
                      >
                        {c.label}
                      </Typography>
                      <Typography
                        sx={{
                          color: "text.secondary",
                          fontFamily: "'Helvetica Neue', sans-serif",
                          fontSize: "0.9rem",
                          lineHeight: 1.7,
                          whiteSpace: "pre-line",
                        }}
                      >
                        {c.value}
                      </Typography>
                    </Box>
                  </Box>
                  {i < contactInfo.length - 1 && <Divider />}
                </Box>
              ))}

              {/* CTA box */}
              <Box
                sx={{
                  mt: 4,
                  p: 3,
                  backgroundColor: "primary.main",
                  borderRadius: 2,
                  borderLeft: "4px solid",
                  borderColor: "secondary.main",
                }}
              >
                <Typography
                  sx={{
                    color: "secondary.main",
                    fontFamily: "'Georgia', serif",
                    fontWeight: 600,
                    mb: 1,
                    fontSize: "1rem",
                  }}
                >
                  Free Initial Consultation
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    fontFamily: "'Helvetica Neue', sans-serif",
                    fontSize: "0.88rem",
                    lineHeight: 1.7,
                    mb: 2,
                  }}
                >
                  All consultations are strictly confidential. We'll assess
                  your matter and provide honest, straightforward advice on
                  how we can help.
                </Typography>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={onBooking}
                  sx={{
                    backgroundColor: "secondary.main",
                    color: "primary.main",
                    fontWeight: 700,
                    fontSize: "0.78rem",
                    py: 1.4,
                    "&:hover": { backgroundColor: "secondary.dark" },
                  }}
                >
                  Book an Appointment
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
