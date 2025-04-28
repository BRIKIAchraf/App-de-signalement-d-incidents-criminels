"use client";

import { useState, useCallback } from "react";

const REPORT_TYPES = [
  "Theft",
  "Fire Outbreak",
  "Medical Emergency",
  "Natural Disaster",
  "Violence",
  "Other",
] as const;

type ReportType = "EMERGENCY | NON-EMERGENCY";

interface ReportFormProps {
  onComplete: (data: any) => void;
}

export function ReportForm({onComplete: })
