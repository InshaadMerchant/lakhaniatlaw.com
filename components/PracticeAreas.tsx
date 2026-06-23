"use client";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import HandshakeIcon from "@mui/icons-material/Handshake";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import GavelIcon from "@mui/icons-material/Gavel";
import DescriptionIcon from "@mui/icons-material/Description";
import SecurityIcon from "@mui/icons-material/Security";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const areas = [
  {
    icon: <BusinessIcon sx={{ fontSize: 36 }} />,
    title: "Corporate Law",
    description:
      "Entity formation, corporate governance, board advisory, shareholder agreements, and compliance for businesses at every stage.",
  },
  {
    icon: <HandshakeIcon sx={{ fontSize: 36 }} />,
    title: "Mergers & Acquisitions",
    description:
      "End-to-end M&A counsel — due diligence, deal structuring, negotiation, and post-merger integration support.",
  },
  {
    icon: <DescriptionIcon sx={{ fontSize: 36 }} />,
    title: "Contract Law",
    description:
      "Drafting, reviewing, and negotiating commercial contracts that protect your business interests and minimize risk.",
  },
  {
    icon: <AccountBalanceIcon sx={{ fontSize: 36 }} />,
    title: "Banking & Finance",
    description:
      "Counsel on lending transactions, debt restructuring, regulatory compliance, and complex financial arrangements.",
  },
  {
    icon: <GavelIcon sx={{ fontSize: 36 }} />,
    title: "Commercial Litigation",
    description:
      "Vigorous representation in business disputes, breach of contract claims, and commercial arbitration proceedings.",
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 36 }} />,
    title: "Regulatory & Compliance",
    description:
      "Navigating complex regulatory environments to keep your business compliant and protected from legal exposure.",
  },
];

export default function PracticeAreas() {
  return (
    <Box
      id="practice-areas"
      sx={{ backgroundColor: "#F8F7F4", py: { xs: 8, md: 12 } }}
    >
      <Container maxWidth="lg">
        {/* Section header */}
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
              Our Expertise
            </Typography>
            <Box sx={{ width: 40, height: 1, backgroundColor: "secondary.main" }} />
          </Box>
          <Typography
            variant="h2"
            sx={{ color: "primary.main", fontSize: { xs: "2rem", md: "2.8rem" }, mb: 2 }}
          >
            Practice Areas
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: 560,
              mx: "auto",
              fontFamily: "'Helvetica Neue', sans-serif",
            }}
          >
            We offer a full spectrum of corporate and business legal services,
            delivering expert counsel tailored to your specific needs.
          </Typography>
        </Box>

        {/* Cards */}
        <Grid container spacing={3}>
          {areas.map((area, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card
                sx={{
                  height: "100%",
                  border: "1px solid rgba(10,22,40,0.08)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 12px 40px rgba(10,22,40,0.12)",
                    borderColor: "secondary.main",
                    "& .area-icon": { color: "secondary.main" },
                  },
                  cursor: "pointer",
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    className="area-icon"
                    sx={{
                      color: "primary.main",
                      mb: 2.5,
                      transition: "color 0.2s ease",
                    }}
                  >
                    {area.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ color: "primary.main", mb: 1.5, fontWeight: 700 }}
                  >
                    {area.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.75,
                      fontFamily: "'Helvetica Neue', sans-serif",
                    }}
                  >
                    {area.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* CTA */}
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            href="#contact"
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              fontWeight: 600,
              fontSize: "0.8rem",
              py: 1.6,
              px: 4,
              "&:hover": { backgroundColor: "primary.light" },
            }}
          >
            Discuss Your Legal Needs
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
