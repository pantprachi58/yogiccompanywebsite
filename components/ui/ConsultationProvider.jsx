"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import dynamic from "next/dynamic";

// The modal (react-bootstrap Modal + form) is only fetched the first time
// someone asks for it, so it costs nothing on pages where it is never opened.
const ConsultationModal = dynamic(() => import("@/components/forms/ConsultationModal"), {
  ssr: false,
});

const ConsultationContext = createContext({ open: null });

export function useConsultation() {
  return useContext(ConsultationContext);
}

export default function ConsultationProvider({ children }) {
  const [requested, setRequested] = useState(false);
  const [show, setShow] = useState(false);

  const open = useCallback(() => {
    setRequested(true);
    setShow(true);
  }, []);
  const close = useCallback(() => setShow(false), []);
  const value = useMemo(() => ({ open }), [open]);

  return (
    <ConsultationContext.Provider value={value}>
      {children}
      {requested ? <ConsultationModal show={show} onHide={close} /> : null}
    </ConsultationContext.Provider>
  );
}
