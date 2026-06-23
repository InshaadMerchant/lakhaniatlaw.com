"use client";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PhoneIcon from "@mui/icons-material/Phone";

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "500+", label: "Cases Handled" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function Hero({ onBooking }: { onBooking?: () => void }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #060D18 0%, #0A1628 50%, #0F1F3D 100%)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Decorative gold lines */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "45%",
          height: "100%",
          opacity: 0.06,
          background:
            "repeating-linear-gradient(-45deg, #FFFFFF, #FFFFFF 1px, transparent 1px, transparent 40px)",
        }}
      />

      {/* Gold accent bar */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 4,
          height: "100%",
          background: "linear-gradient(180deg, #FFFFFF, transparent)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, pt: 14, pb: 10 }}>
        <Box sx={{ maxWidth: 760 }}>
          {/* Eyebrow */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
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
              Corporate Legal Counsel
            </Typography>
          </Box>

          {/* Headline */}
          <Typography
            variant="h1"
            sx={{
              color: "white",
              fontSize: { xs: "2.6rem", sm: "3.6rem", md: "4.8rem" },
              lineHeight: 1.1,
              mb: 1,
            }}
          >
            Trusted Legal
          </Typography>
          <Typography
            variant="h1"
            sx={{
              color: "secondary.main",
              fontSize: { xs: "2.6rem", sm: "3.6rem", md: "4.8rem" },
              lineHeight: 1.1,
              mb: 4,
            }}
          >
            Counsel for Your Business.
          </Typography>

          {/* Subheading */}
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.72)",
              fontSize: { xs: "1rem", md: "1.15rem" },
              maxWidth: 580,
              mb: 5,
              lineHeight: 1.8,
              fontFamily: "'Helvetica Neue', sans-serif",
            }}
          >
            Lakhani Law Firm delivers sophisticated legal solutions for businesses —
            from startups to established enterprises. We protect your interests
            with precision, experience, and unwavering dedication.
          </Typography>

          {/* CTA Buttons */}
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 8 }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={onBooking}
              sx={{
                backgroundColor: "secondary.main",
                color: "primary.main",
                fontWeight: 700,
                fontSize: "0.82rem",
                py: 1.8,
                px: 4,
                "&:hover": { backgroundColor: "secondary.dark" },
              }}
            >
              Schedule a Consultation
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<PhoneIcon />}
              href="tel:+1234567890"
              sx={{
                borderColor: "rgba(255,255,255,0.6)",
                color: "secondary.main",
                fontSize: "0.82rem",
                py: 1.8,
                px: 4,
                "&:hover": {
                  borderColor: "secondary.main",
                  backgroundColor: "rgba(255,255,255,0.06)",
                },
              }}
            >
              Call Us Today
            </Button>
          </Stack>

          {/* Stats */}
          <Divider sx={{ borderColor: "rgba(255,255,255,0.2)", mb: 5 }} />
          <Stack direction={{ xs: "column", sm: "row" }} spacing={4}>
            {stats.map((s, i) => (
              <Box key={i}>
                <Typography
                  sx={{
                    color: "secondary.main",
                    fontSize: "2.4rem",
                    fontFamily: "'Georgia', serif",
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.55)",
                    fontSize: "0.78rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontFamily: "'Helvetica Neue', sans-serif",
                    mt: 0.5,
                  }}
                >
                  {s.label}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
