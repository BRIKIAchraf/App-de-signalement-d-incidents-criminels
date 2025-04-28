"use client";

import { useState } from "react";
import { ReportForm } from "./ReportForm";
import { ReportSubmitted } from "./ReportFormCompleted";

export function ReportWizard() {
  const [currentSetp, setCurrentStep] = useState(1);
  const [reportData, setReportData] = useState<any>(null);
  const handleStepComplete = async (data: any) => {
    setReportData({ ...reportData, ...data });
    if (currentSetp === 4) {
      return;
    }
  };
  return (
    <div className="rounded-2xl bg-zinc-900 p-8">
      {currentSetp === 1 && <ReportForm onComplete={handleStepComplete} />}
      {currentSetp === 2 && (
        <ReportSubmitted data={reportData} onComplete={handleStepComplete} />
      )}
    </div>
  );
}
