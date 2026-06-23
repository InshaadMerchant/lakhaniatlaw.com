"use client";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarIcon from "@mui/icons-material/Star";

const testimonials = [
  {
    name: "James R.",
    role: "CEO, TechStart Inc.",
    initials: "JR",
    quote:
      "Lakhani Law Firm guided us through our Series A funding and acquisition negotiations with precision and clarity. Their corporate expertise is unmatched.",
  },
  {
    name: "Priya M.",
    role: "Founder, Meridian Consulting",
    initials: "PM",
    quote:
      "From our incorporation to our first major contract dispute, the team at Lakhani has been an invaluable partner. They truly understand business, not just law.",
  },
  {
    name: "David L.",
    role: "Managing Director, Apex Capital",
    initials: "DL",
    quote:
      "What sets Lakhani apart is their responsiveness and strategic thinking. They anticipate issues before they become problems. Highly recommend.",
  },
];

export default function Testimonials() {
  return (
    <Box sx={{ backgroundColor: "#F8F7F4", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 7 }}>
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
              Client Testimonials
            </Typography>
            <Box sx={{ width: 40, height: 1, backgroundColor: "secondary.main" }} />
          </Box>
          <Typography
            variant="h2"
            sx={{ color: "primary.main", fontSize: { xs: "2rem", md: "2.8rem" } }}
          >
            What Our Clients Say
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {testimonials.map((t, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Card
                sx={{
                  height: "100%",
                  border: "1px solid rgba(10,22,40,0.08)",
                  position: "relative",
                  p: 1,
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  {/* Quote icon */}
                  <FormatQuoteIcon
                    sx={{
                      color: "secondary.main",
                      fontSize: 48,
                      opacity: 0.4,
                      mb: 1,
                      display: "block",
                    }}
                  />

                  {/* Stars */}
                  <Box sx={{ display: "flex", gap: 0.3, mb: 2 }}>
                    {[...Array(5)].map((_, j) => (
                      <StarIcon key={j} sx={{ color: "secondary.main", fontSize: 16 }} />
                    ))}
                  </Box>

                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontFamily: "'Georgia', serif",
                      fontStyle: "italic",
                      lineHeight: 1.8,
                      mb: 4,
                      fontSize: "0.95rem",
                    }}
                  >
                    "{t.quote}"
                  </Typography>

                  {/* Author */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar
                      sx={{
                        backgroundColor: "primary.main",
                        color: "secondary.main",
                        fontFamily: "'Georgia', serif",
                        fontWeight: 700,
                        width: 44,
                        height: 44,
                        fontSize: "0.9rem",
                      }}
                    >
                      {t.initials}
                    </Avatar>
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          color: "primary.main",
                          fontFamily: "'Georgia', serif",
                          fontSize: "0.95rem",
                        }}
                      >
                        {t.name}
                      </Typography>
                      <Typography
                        sx={{
                          color: "text.secondary",
                          fontSize: "0.78rem",
                          fontFamily: "'Helvetica Neue', sans-serif",
                        }}
                      >
                        {t.role}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
