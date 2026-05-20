/* LiveInvoice — animated invoicing graphic for Accountium
 *
 * Drop-in React component. Self-contained, no external deps besides
 * React itself.
 *
 * Usage:
 *   import LiveInvoice from "./LiveInvoice";
 *   <LiveInvoice />
 *
 * Sizing: 100% width up to max-width 560px. Constrain via parent.
 */

import React, { useState, useEffect, useRef } from "react";
import "./LiveInvoice.css";


const INVOICES = [
  {
    client: "Cedar & Co.",
    initials: "CC",
    tint: "#2F6B4E",
    num: "1023",
    amount: 4280,
    issued: "Mar 14",
    due: "Mar 28",
    lines: [
      { desc: "Strategy consulting — Mar", qty: "12 hr", rate: "$360", total: "$4,320" },
      { desc: "Discovery sprint",          qty: "1",     rate: "$200", total: "$200"   },
      { desc: "Bundle discount",           qty: "1",     rate: "−$240", total: "−$240" },
    ],
    method: "card",
  },
  {
    client: "Pellet Labs",
    initials: "PL",
    tint: "#B45309",
    num: "1024",
    amount: 12400,
    issued: "Mar 15",
    due: "Mar 29",
    lines: [
      { desc: "Q1 retainer",          qty: "1",  rate: "$10,000", total: "$10,000" },
      { desc: "Equipment install",     qty: "4 hr", rate: "$300",   total: "$1,200"  },
      { desc: "Materials · sensors",   qty: "1",   rate: "$1,200", total: "$1,200"  },
    ],
    method: "ach",
  },
  {
    client: "Studio Ono",
    initials: "SO",
    tint: "#6B21A8",
    num: "1025",
    amount: 8750,
    issued: "Mar 16",
    due: "Mar 30",
    lines: [
      { desc: "Brand identity — phase 2", qty: "1",   rate: "$6,500", total: "$6,500" },
      { desc: "Photo direction",          qty: "4 hr", rate: "$450",   total: "$1,800" },
      { desc: "Asset bundle",             qty: "1",   rate: "$450",   total: "$450"   },
    ],
    method: "apple",
  },
];

// step sequence (ms per step)
const STEPS = [
  { name: "sent",    duration: 1400 },
  { name: "opened",  duration: 1500 },
  { name: "paying",  duration: 700  },
  { name: "paid",    duration: 1200 },
  { name: "booked",  duration: 1700 },
  { name: "hold",    duration: 1700 },
  { name: "fade",    duration: 500  },
];

const BASE_DAY_TOTAL = 24370;

function fmtUSD(n, dec = 0) {
  return "$" + n.toLocaleString("en-US", {
    minimumFractionDigits: dec, maximumFractionDigits: dec,
  });
}

export function LiveInvoice({ className = "", style }) {
  const [invIdx, setInvIdx] = useState(0);
  const [stepIdx, setStepIdx] = useState(0);
  const [dayTotal, setDayTotal] = useState(BASE_DAY_TOTAL);

  // advance through steps; loop back to invoice 0 after last fade
  useEffect(() => {
    const dur = STEPS[stepIdx].duration;
    const t = setTimeout(() => {
      if (stepIdx === STEPS.length - 1) {
        setInvIdx(i => (i + 1) % INVOICES.length);
        setStepIdx(0);
      } else {
        setStepIdx(s => s + 1);
      }
    }, dur);
    return () => clearTimeout(t);
  }, [stepIdx]);

  // when entering "booked", animate dayTotal from base → base + amount
  useEffect(() => {
    if (STEPS[stepIdx].name !== "booked") return;
    const inv = INVOICES[invIdx];
    const start = BASE_DAY_TOTAL;
    const end = BASE_DAY_TOTAL + inv.amount;
    const dur = 900;
    const t0 = performance.now();
    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      setDayTotal(start + (end - start) * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [stepIdx, invIdx]);

  // reset day total when a new invoice starts
  useEffect(() => {
    if (STEPS[stepIdx].name === "sent") setDayTotal(BASE_DAY_TOTAL);
  }, [stepIdx]);

  const step = STEPS[stepIdx].name;
  const inv = INVOICES[invIdx];

  // derived view state
  const statusIdx =
    step === "sent" ? 0 :
    step === "opened" ? 1 :
    step === "paying" ? 1 :
    step === "paid" ? 2 :
    step === "booked" || step === "hold" || step === "fade" ? 3 :
    0;
  const stampVisible = step === "paid" || step === "booked" || step === "hold" || step === "fade";
  const bookRowVisible = step === "booked" || step === "hold" || step === "fade";
  const payButtonState =
    step === "sent" || step === "opened" ? "idle" :
    step === "paying" ? "clicking" :
    "done";
  const isFading = step === "fade";

  return (
    <div className={`li-shell ${className} ${isFading ? "is-fading" : ""}`} style={style}>
      <div className="li-grid" aria-hidden="true"/>
      <div className="li-glow li-glow--a" aria-hidden="true"/>
      <div className="li-glow li-glow--b" aria-hidden="true"/>

      {/* chrome */}
      <div className="li-chrome">
        <div className="li-dots"><span/><span/><span/></div>
        <div className="li-title">accountium / invoicing</div>
        <div className="li-live">
          <span className="li-live-dot"/> live
        </div>
      </div>

      <div className="li-body">
        {/* Invoice card */}
        <div className="li-invoice">
          <div className="li-invoice-band" style={{ background: inv.tint }}/>
          <div className="li-invoice-head">
            <div className="li-logo" style={{ background: inv.tint }}>
              {inv.initials}
            </div>
            <div className="li-inv-meta">
              <div className="li-inv-tag">INVOICE</div>
              <div className="li-inv-num">#{inv.num} · {inv.client}</div>
            </div>
            <div className="li-inv-total">
              <div className="li-inv-total-label">Total due</div>
              <div className="li-inv-total-val">{fmtUSD(inv.amount, 2)}</div>
            </div>
          </div>

          <div className="li-lines">
            {inv.lines.map((line, i) => (
              <div key={i} className="li-line">
                <span className="li-line-desc">{line.desc}</span>
                <span className="li-line-qty">{line.qty}</span>
                <span className="li-line-rate">{line.rate}</span>
                <span className="li-line-total">{line.total}</span>
              </div>
            ))}
          </div>

          <div className="li-invoice-foot">
            <div className="li-methods">
              <span className={`li-method ${inv.method === "card" ? "is-active" : ""}`}>
                <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                  <rect x="0.5" y="0.5" width="19" height="13" rx="2" stroke="currentColor"/>
                  <rect x="0.5" y="3" width="19" height="2.5" fill="currentColor" opacity="0.8"/>
                  <rect x="3" y="8.5" width="4" height="2" fill="currentColor" opacity="0.5"/>
                </svg>
              </span>
              <span className={`li-method ${inv.method === "ach" ? "is-active" : ""}`}>
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                  <path d="M9 1 L17 5 L1 5 Z" stroke="currentColor" strokeLinejoin="round"/>
                  <rect x="3" y="6" width="2" height="6" fill="currentColor"/>
                  <rect x="8" y="6" width="2" height="6" fill="currentColor"/>
                  <rect x="13" y="6" width="2" height="6" fill="currentColor"/>
                  <rect x="1" y="12.5" width="16" height="1.5" fill="currentColor"/>
                </svg>
              </span>
              <span className={`li-method ${inv.method === "apple" ? "is-active" : ""}`}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M11 8.6c0-1.5 1.2-2.2 1.3-2.3-0.7-1-1.8-1.2-2.2-1.2-0.9-0.1-1.8 0.6-2.3 0.6-0.5 0-1.2-0.5-2-0.5-1 0-2 0.6-2.5 1.6-1.1 1.9-0.3 4.7 0.7 6.2 0.5 0.8 1.2 1.6 2 1.5 0.8 0 1.1-0.5 2.1-0.5 1 0 1.2 0.5 2.1 0.5 0.9 0 1.4-0.7 2-1.5 0.6-0.9 0.9-1.7 0.9-1.8-0.1 0-1.8-0.7-1.8-2.6zM9.7 4.2c0.4-0.5 0.7-1.2 0.6-1.9-0.6 0-1.3 0.4-1.7 0.9-0.4 0.4-0.7 1.1-0.6 1.8 0.7 0.1 1.3-0.3 1.7-0.8z"/>
                </svg>
              </span>
            </div>

            <button
              className={`li-pay-btn li-pay-btn--${payButtonState}`}
              style={{ "--btn-tint": inv.tint }}
            >
              {payButtonState === "done" ? (
                <>
                  <span className="li-pay-check">✓</span>
                  Paid · {fmtUSD(inv.amount, 0)}
                </>
              ) : (
                <>
                  Pay {fmtUSD(inv.amount, 0)}
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.6"
                      fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </>
              )}
              {payButtonState === "clicking" && <span className="li-pay-ripple"/>}
            </button>
          </div>

          {/* PAID stamp overlay */}
          <div className={`li-stamp ${stampVisible ? "is-visible" : ""}`} aria-hidden="true">
            PAID
            <span className="li-stamp-sub">{inv.issued.toUpperCase()}</span>
          </div>

          {/* Click sparkle on Pay button */}
          {payButtonState === "clicking" && (
            <div className="li-cursor" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="#1A1714">
                <path d="M3 2L17 9L10 11L7 18Z" stroke="white" strokeWidth="1.4" strokeLinejoin="round"/>
              </svg>
            </div>
          )}
        </div>

        {/* Status timeline */}
        <div className="li-timeline">
          {["Sent", "Opened", "Paid", "Booked"].map((label, i) => (
            <div key={i} className={`li-step ${i <= statusIdx ? "is-done" : ""} ${i === statusIdx ? "is-active" : ""}`}>
              <span className="li-step-dot">
                {i < statusIdx ? <span className="li-step-tick">✓</span> : null}
              </span>
              <span className="li-step-label">{label}</span>
              {i < 3 && <span className="li-step-line"/>}
            </div>
          ))}
        </div>

        {/* Books event */}
        <div className={`li-book ${bookRowVisible ? "is-in" : ""}`}>
          <span className="li-book-icon">↻</span>
          <span className="li-book-tag">A/R</span>
          <span className="li-book-text">
            {inv.client} — Inv #{inv.num} · auto-booked
          </span>
          <span className="li-book-amt">+{fmtUSD(inv.amount, 2)}</span>
        </div>
      </div>

      {/* footer revenue counter */}
      <div className="li-footer">
        <div className="li-foot-row">
          <span className="li-foot-label">Today · received</span>
          <span className="li-foot-val">{fmtUSD(dayTotal, 2)}</span>
        </div>
        <span className="li-foot-pill">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 2L8 6H2Z" fill="currentColor"/>
          </svg>
          12.4%
        </span>
      </div>
    </div>
  );
}

export default LiveInvoice;
