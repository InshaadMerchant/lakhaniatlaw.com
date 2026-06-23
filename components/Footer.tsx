"use client";
import { Box, Container, Typography, Grid, Link as MuiLink, Divider, Stack } from "@mui/material";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const pages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Representative Matters", href: "/representative-matters" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <Box sx={{ backgroundColor: "#0A1628", color: "white" }}>
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={6}>
          {/* Brand */}
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontWeight: 600, fontSize: "1.05rem", mb: 0.5 }}>
              Lakhani Law, PLLC
            </Typography>
            <Typography sx={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", mb: 2.5 }}>
              Healthcare & Business Law
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "0.88rem", lineHeight: 1.8, maxWidth: 280 }}>
              Boutique legal counsel for healthcare transactions, mergers & acquisitions, and business law.
            </Typography>
            <Stack direction="row" spacing={1.5} sx={{ mt: 3 }}>
              <MuiLink href="https://www.linkedin.com/in/klakhani93/" target="_blank" rel="noopener noreferrer" sx={{ color: "rgba(255,255,255,0.4)", "&:hover": { color: "white" }, transition: "color 0.2s" }}>
                <LinkedInIcon />
              </MuiLink>
            </Stack>
          </Grid>

          {/* Navigation */}
          <Grid item xs={6} md={3}>
            <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600, mb: 2.5 }}>
              Navigation
            </Typography>
            <Stack spacing={1.5}>
              {pages.map((p) => (
                <MuiLink
                  key={p.label}
                  component={Link}
                  href={p.href}
                  underline="none"
                  sx={{ color: "rgba(255,255,255,0.6)", fontSize: "0.88rem", "&:hover": { color: "white" }, transition: "color 0.2s" }}
                >
                  {p.label}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          {/* Contact */}
          <Grid item xs={6} md={4}>
            <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600, mb: 2.5 }}>
              Contact
            </Typography>
            <Stack spacing={1.5}>
              <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "0.88rem" }}>Houston, Texas</Typography>
              <MuiLink
                component={Link}
                href="/contact"
                underline="none"
                sx={{ color: "rgba(255,255,255,0.6)", fontSize: "0.88rem", "&:hover": { color: "white" }, transition: "color 0.2s" }}
              >
                Schedule a Consultation →
              </MuiLink>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />
      <Container maxWidth="lg" sx={{ py: 3 }}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", gap: 1 }}>
          <Typography sx={{ color: "rgba(255,255,255,0.35)", fontSize: "0.78rem" }}>
            © {year} Lakhani Law, PLLC. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3}>
            {["Privacy Policy", "Disclaimer"].map((item) => (
              <MuiLink key={item} href="#" underline="none" sx={{ color: "rgba(255,255,255,0.35)", fontSize: "0.78rem", "&:hover": { color: "rgba(255,255,255,0.6)" } }}>
                {item}
              </MuiLink>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
