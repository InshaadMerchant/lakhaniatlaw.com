"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Button,
  IconButton,
  TextField,
  Grid,
  Divider,
  Stack,
  MenuItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import GavelIcon from "@mui/icons-material/Gavel";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { db } from "@/lib/firebase";
import { ref, push } from "firebase/database";



// ─── helpers ────────────────────────────────────────────────────────────────

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];
const DAYS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

const TIME_SLOTS = [
  "9:00am","9:30am","10:00am","10:30am","11:00am",
  "2:00pm","2:30pm","3:00pm","3:30pm","4:00pm",
];

const REASONS = [
  "Corporate Formation & Governance",
  "Mergers & Acquisitions",
  "Contract Drafting & Review",
  "Commercial Litigation",
  "Banking & Finance",
  "Regulatory Compliance",
  "Other",
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}
function isAvailable(year: number, month: number, day: number) {
  const d = new Date(year, month, day);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const dow = d.getDay();
  return d > today && dow !== 0 && dow !== 6; // weekdays only, future only
}
function formatDate(year: number, month: number, day: number) {
  const d = new Date(year, month, day);
  return d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
}

// ─── sub-components ─────────────────────────────────────────────────────────

// Left panel
function SidePanel({ selectedDate, selectedTime, year, month, day }: {
  selectedDate: boolean; selectedTime: string | null;
  year: number; month: number; day: number | null;
}) {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        p: { xs: 3, md: 4 },
        display: "flex",
        flexDirection: "column",
        gap: 2,
        minWidth: { md: 240 },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
        <GavelIcon sx={{ color: "secondary.main", fontSize: 24 }} />
        <Box>
          <Typography sx={{ color: "white", fontFamily: "'Georgia',serif", fontWeight: 700, fontSize: "1rem", lineHeight: 1.1 }}>
            Lakhani Law Firm
          </Typography>
          <Typography sx={{ color: "secondary.main", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "sans-serif" }}>
            Free Consultation
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} />

      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <AccessTimeIcon sx={{ color: "secondary.main", fontSize: 18 }} />
        <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.88rem", fontFamily: "sans-serif" }}>
          30 minutes
        </Typography>
      </Box>

      {selectedDate && day && (
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
          <CalendarMonthIcon sx={{ color: "secondary.main", fontSize: 18, mt: 0.2 }} />
          <Box>
            <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.88rem", fontFamily: "sans-serif" }}>
              {selectedTime && `${selectedTime} · `}{formatDate(year, month, day)}
            </Typography>
          </Box>
        </Box>
      )}

      <Box sx={{ mt: "auto", pt: 3 }}>
        <Typography sx={{ color: "rgba(255,255,255,0.35)", fontSize: "0.72rem", fontFamily: "sans-serif", lineHeight: 1.6 }}>
          All consultations are strictly confidential and obligation-free.
        </Typography>
      </Box>
    </Box>
  );
}

// Step 1: Calendar
function CalendarStep({ onSelect }: { onSelect: (y: number, m: number, d: number) => void }) {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(y => y - 1); }
    else setMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1); }
    else setMonth(m => m + 1);
  };

  return (
    <Box sx={{ p: { xs: 3, md: 4 }, flex: 1 }}>
      <Typography variant="h5" sx={{ color: "primary.main", fontWeight: 700, mb: 0.5 }}>
        Select a Date
      </Typography>
      <Typography sx={{ color: "text.secondary", fontSize: "0.88rem", fontFamily: "sans-serif", mb: 3 }}>
        Choose an available day for your consultation.
      </Typography>

      {/* Month nav */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
        <IconButton onClick={prevMonth} size="small" sx={{ color: "primary.main" }}>
          <ChevronLeftIcon />
        </IconButton>
        <Typography sx={{ fontFamily: "'Georgia',serif", fontWeight: 700, color: "primary.main", fontSize: "1.05rem" }}>
          {MONTHS[month]} {year}
        </Typography>
        <IconButton onClick={nextMonth} size="small" sx={{ color: "primary.main" }}>
          <ChevronRightIcon />
        </IconButton>
      </Box>

      {/* Day headers */}
      <Grid container sx={{ mb: 1 }}>
        {DAYS.map(d => (
          <Grid item key={d} xs={12 / 7} sx={{ textAlign: "center" }}>
            <Typography sx={{ fontSize: "0.72rem", fontWeight: 600, color: "text.secondary", fontFamily: "sans-serif", letterSpacing: "0.05em" }}>
              {d}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* Day grid */}
      <Grid container>
        {/* Empty cells before first day */}
        {Array.from({ length: firstDay }).map((_, i) => (
          <Grid item key={`empty-${i}`} xs={12 / 7} />
        ))}
        {/* Day cells */}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => {
          const available = isAvailable(year, month, day);
          return (
            <Grid item key={day} xs={12 / 7} sx={{ textAlign: "center", mb: 0.5 }}>
              <Box
                onClick={() => available && onSelect(year, month, day)}
                sx={{
                  width: 38, height: 38,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  mx: "auto", borderRadius: "50%",
                  cursor: available ? "pointer" : "default",
                  backgroundColor: available ? "rgba(10,22,40,0.07)" : "transparent",
                  color: available ? "primary.main" : "rgba(0,0,0,0.25)",
                  fontFamily: "sans-serif",
                  fontSize: "0.88rem",
                  fontWeight: available ? 600 : 400,
                  transition: "all 0.15s ease",
                  "&:hover": available ? {
                    backgroundColor: "primary.main",
                    color: "white",
                  } : {},
                }}
              >
                {day}
              </Box>
            </Grid>
          );
        })}
      </Grid>

      <Divider sx={{ mt: 3, mb: 2 }} />
      <Typography sx={{ fontSize: "0.78rem", color: "text.secondary", fontFamily: "sans-serif" }}>
        🌐 Central Time — US & Canada
      </Typography>
    </Box>
  );
}

// Step 2: Time slots
function TimeStep({
  year, month, day,
  onSelect, onBack,
}: {
  year: number; month: number; day: number;
  onSelect: (time: string) => void; onBack: () => void;
}) {
  return (
    <Box sx={{ p: { xs: 3, md: 4 }, flex: 1 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
        <IconButton size="small" onClick={onBack} sx={{ color: "primary.main" }}>
          <ArrowBackIcon fontSize="small" />
        </IconButton>
        <Typography variant="h5" sx={{ color: "primary.main", fontWeight: 700 }}>
          Select a Time
        </Typography>
      </Box>
      <Typography sx={{ color: "text.secondary", fontSize: "0.88rem", fontFamily: "sans-serif", mb: 3, pl: 5 }}>
        {formatDate(year, month, day)}
      </Typography>

      <Stack spacing={1.5} sx={{ maxHeight: 420, overflowY: "auto", pr: 1 }}>
        {TIME_SLOTS.map(slot => (
          <Button
            key={slot}
            variant="outlined"
            fullWidth
            onClick={() => onSelect(slot)}
            sx={{
              borderColor: "rgba(10,22,40,0.2)",
              color: "primary.main",
              fontFamily: "'Georgia',serif",
              fontSize: "0.95rem",
              fontWeight: 600,
              py: 1.5,
              letterSpacing: "0.02em",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "primary.main",
                borderColor: "primary.main",
                color: "white",
              },
            }}
          >
            {slot}
          </Button>
        ))}
      </Stack>
    </Box>
  );
}

// Step 3: Form
function FormStep({
  year, month, day, time,
  onBack, onSubmit,
}: {
  year: number; month: number; day: number; time: string;
  onBack: () => void;
  onSubmit: (data: { name: string; email: string; phone: string; reason: string; notes: string }) => void;
}) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", reason: "", notes: "" });
  const valid = form.name.trim() && form.email.trim() && form.phone.trim() && form.reason;

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }));

  const inputSx = { fontFamily: "sans-serif", fontSize: "0.92rem" };
  const labelSx = { fontFamily: "sans-serif" };

  return (
    <Box sx={{ p: { xs: 3, md: 4 }, flex: 1, overflowY: "auto" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
        <IconButton size="small" onClick={onBack} sx={{ color: "primary.main" }}>
          <ArrowBackIcon fontSize="small" />
        </IconButton>
        <Typography variant="h5" sx={{ color: "primary.main", fontWeight: 700 }}>
          Your Details
        </Typography>
      </Box>
      <Typography sx={{ color: "text.secondary", fontSize: "0.88rem", fontFamily: "sans-serif", mb: 3, pl: 5 }}>
        {time} · {formatDate(year, month, day)}
      </Typography>

      <Stack spacing={2.5}>
        <TextField
          fullWidth required label="Full Name"
          value={form.name} onChange={set("name")}
          InputProps={{ sx: inputSx }} InputLabelProps={{ sx: labelSx }}
        />
        <TextField
          fullWidth required label="Email Address" type="email"
          value={form.email} onChange={set("email")}
          InputProps={{ sx: inputSx }} InputLabelProps={{ sx: labelSx }}
        />
        <TextField
          fullWidth required label="Phone Number" type="tel"
          value={form.phone} onChange={set("phone")}
          InputProps={{ sx: inputSx }} InputLabelProps={{ sx: labelSx }}
        />
        <TextField
          fullWidth required select label="Reason for Consultation"
          value={form.reason} onChange={set("reason")}
          InputProps={{ sx: inputSx }} InputLabelProps={{ sx: labelSx }}
        >
          {REASONS.map(r => (
            <MenuItem key={r} value={r} sx={{ fontFamily: "sans-serif", fontSize: "0.9rem" }}>
              {r}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth multiline rows={3}
          label="Additional notes (optional)"
          value={form.notes} onChange={set("notes")}
          InputProps={{ sx: inputSx }} InputLabelProps={{ sx: labelSx }}
        />

        <Button
          fullWidth variant="contained" size="large"
          disabled={!valid}
          onClick={() => onSubmit(form)}
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            fontWeight: 700,
            fontSize: "0.85rem",
            py: 1.7,
            "&:hover": { backgroundColor: "primary.light" },
            "&.Mui-disabled": { backgroundColor: "rgba(0,0,0,0.1)", color: "rgba(0,0,0,0.35)" },
          }}
        >
          Confirm Appointment
        </Button>
      </Stack>
    </Box>
  );
}

// Step 4: Confirmation
function ConfirmStep({ year, month, day, time, onClose }: {
  year: number; month: number; day: number; time: string; onClose: () => void;
}) {
  return (
    <Box sx={{ p: { xs: 3, md: 5 }, flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
      <CheckCircleIcon sx={{ color: "primary.main", fontSize: 64, mb: 2 }} />
      <Typography variant="h5" sx={{ color: "primary.main", fontWeight: 700, mb: 1 }}>
        Appointment Confirmed!
      </Typography>
      <Typography sx={{ color: "text.secondary", fontFamily: "sans-serif", lineHeight: 1.8, mb: 1 }}>
        Your consultation has been booked for
      </Typography>
      <Typography sx={{ color: "primary.main", fontFamily: "'Georgia',serif", fontWeight: 600, fontSize: "1.1rem", mb: 0.5 }}>
        {time}
      </Typography>
      <Typography sx={{ color: "primary.main", fontFamily: "'Georgia',serif", fontWeight: 600, fontSize: "1.05rem", mb: 3 }}>
        {formatDate(year, month, day)}
      </Typography>
      <Typography sx={{ color: "text.secondary", fontFamily: "sans-serif", fontSize: "0.88rem", mb: 4, maxWidth: 320 }}>
        A confirmation email has been sent to you. We look forward to speaking with you.
      </Typography>
      <Button
        variant="contained"
        onClick={onClose}
        sx={{
          backgroundColor: "primary.main", color: "white",
          fontWeight: 600, fontSize: "0.8rem", px: 4,
          "&:hover": { backgroundColor: "primary.light" },
        }}
      >
        Close
      </Button>
    </Box>
  );
}

// ─── Main Modal ──────────────────────────────────────────────────────────────

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

export default function BookingModal({ open, onClose }: BookingModalProps) {
  const [step, setStep] = useState<"date" | "time" | "form" | "done">("date");
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState<number | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [formData, setFormData] = useState<{ name: string; email: string; phone: string; reason: string; notes: string } | null>(null);

  const handleClose = () => {
    onClose();
    setTimeout(() => { setStep("date"); setDay(null); setTime(null); setFormData(null); }, 300);
  };

  const handleDateSelect = (y: number, m: number, d: number) => {
    setYear(y); setMonth(m); setDay(d);
    setStep("time");
  };

  const handleTimeSelect = (t: string) => {
    setTime(t);
    setStep("form");
  };

  const handleFormSubmit = async (data: { name: string; email: string; phone: string; reason: string; notes: string }) => {
    setFormData(data);
    const bookingObject = {
      ...data,
      date: formatDate(year, month, day!),
      time: time!,
      submittedAt: new Date().toISOString(),
    };
    try {
      await push(ref(db, "bookings"), bookingObject);
    } catch (err) {
      console.error("Firebase write failed:", err);
    }
    setStep("done");
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          overflow: "hidden",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        },
      }}
    >
      {/* Close button */}
      <IconButton
        onClick={handleClose}
        size="small"
        sx={{
          position: "absolute", top: 12, right: 12, zIndex: 10,
          backgroundColor: "rgba(255,255,255,0.9)",
          color: "primary.main",
          "&:hover": { backgroundColor: "white" },
        }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>

      {/* Left panel */}
      {step !== "done" && (
        <SidePanel
          selectedDate={step === "time" || step === "form"}
          selectedTime={step === "form" ? time : null}
          year={year} month={month} day={day}
        />
      )}

      {/* Right panel — steps */}
      <DialogContent sx={{ p: 0, display: "flex", flex: 1, overflow: "hidden" }}>
        {step === "date" && <CalendarStep onSelect={handleDateSelect} />}
        {step === "time" && day !== null && (
          <TimeStep
            year={year} month={month} day={day}
            onSelect={handleTimeSelect}
            onBack={() => setStep("date")}
          />
        )}
        {step === "form" && day !== null && time !== null && (
          <FormStep
            year={year} month={month} day={day} time={time}
            onBack={() => setStep("time")}
            onSubmit={handleFormSubmit}
          />
        )}
        {step === "done" && day !== null && time !== null && (
          <ConfirmStep year={year} month={month} day={day} time={time} onClose={handleClose} />
        )}
      </DialogContent>
    </Dialog>
  );
}
