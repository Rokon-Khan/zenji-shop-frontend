"use client";

import { useCart } from "@/lib/cart";
import { money } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SHIPPING_COST = 9.99;
const FREE_SHIPPING_THRESHOLD = 150;

const AUS_STATES = ["ACT", "NSW", "NT", "QLD", "SA", "TAS", "VIC", "WA"];

export default function CheckoutPage() {
  const { lines, total } = useCart();
  const isFreeShipping = total >= FREE_SHIPPING_THRESHOLD;
  const shipping = isFreeShipping ? 0 : SHIPPING_COST;
  const grandTotal = total + shipping;

  const [discountCode, setDiscountCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribe, setSubscribe] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const [state, setState] = useState("VIC");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<
    "card" | "afterpay" | "klarna" | "zip" | "paypal"
  >("card");
  const [billingSame, setBillingSame] = useState(true);
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  function handleApplyDiscount() {
    if (discountCode.trim()) setDiscountApplied(true);
  }

  return (
    <div
      className="min-h-screen"
      style={{ background: "#f9f9f9", color: "#111" }}
    >
      {/* Top bar */}
      <div
        className="label-xs flex items-center justify-between px-4 py-3 text-xs"
        style={{ background: "#c0392b", color: "#fff" }}
      >
        <span className="tracking-widest">
          COLLECTION LIVE · FREE SHIPPING AUSTRALIA-WIDE ON ORDERS OVER A$150
        </span>
        <span className="tracking-widest hidden md:block">
          · THE_ORIGIN_DROP COLLECTION LIVE ·
        </span>
      </div>

      {/* Header */}
      <header
        className="flex items-center justify-between px-6 py-4 border-b"
        style={{ borderColor: "#e0e0e0", background: "#fff" }}
      >
        <Link href="/">
          <Image src="/ZENJI-logo.png" alt="ZENJI" className="h-8" />
        </Link>
        <div className="hidden md:flex gap-8">
          {["DROP", "COLLECTION", "LOOKBOOK", "OUR STORY"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className="label-xs text-xs tracking-widest text-gray-600 hover:text-black transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-[1fr_380px]">
          {/* ── LEFT COLUMN ── */}
          <div className="space-y-6">
            {/* Page title */}
            <div className="border-b pb-5" style={{ borderColor: "#e0e0e0" }}>
              <h1
                className="display text-4xl sm:text-5xl"
                style={{ fontFamily: "var(--font-display)", color: "#111" }}
              >
                CHECKOUT
              </h1>
              <p className="label-xs mt-1 text-xs tracking-widest text-gray-500">
                SECURE PAYMENT · AUSTRALIA-WIDE
              </p>
            </div>

            {/* Express Checkout */}
            <div
              className="rounded-sm border p-5 space-y-3"
              style={{ borderColor: "#e0e0e0", background: "#fff" }}
            >
              <p className="label-xs text-center text-xs tracking-widest text-gray-500">
                EXPRESS CHECKOUT
              </p>
              <div className="grid grid-cols-3 gap-2">
                <button
                  id="express-gpay"
                  type="button"
                  className="flex h-11 items-center justify-center rounded-sm font-bold text-white transition-opacity hover:opacity-90 cursor-pointer"
                  style={{ background: "#111" }}
                >
                  <svg
                    className="h-5"
                    viewBox="0 0 50 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <text
                      x="0"
                      y="15"
                      fill="white"
                      fontSize="12"
                      fontFamily="sans-serif"
                    >
                      G Pay
                    </text>
                  </svg>
                </button>
                <button
                  id="express-paypal"
                  type="button"
                  className="flex h-11 items-center justify-center rounded-sm font-bold transition-opacity hover:opacity-90 cursor-pointer"
                  style={{ background: "#ffc439", color: "#003087" }}
                >
                  <span className="text-sm font-bold">PayPal</span>
                </button>
                <button
                  id="express-shop-pay"
                  type="button"
                  className="flex h-11 items-center justify-center rounded-sm font-bold text-white transition-opacity hover:opacity-90 cursor-pointer"
                  style={{ background: "#5433eb" }}
                >
                  <span className="text-xs font-bold tracking-wide">
                    Shop Pay
                  </span>
                </button>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="h-px flex-1"
                  style={{ background: "#e0e0e0" }}
                />
                <span className="label-xs text-xs text-gray-400">OR</span>
                <div
                  className="h-px flex-1"
                  style={{ background: "#e0e0e0" }}
                />
              </div>
            </div>

            {/* 01 — Delivery Address */}
            <div
              className="rounded-sm border p-5 space-y-4"
              style={{ borderColor: "#e0e0e0", background: "#fff" }}
            >
              <h2
                className="display flex items-center gap-2 text-sm tracking-widest"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span
                  className="flex h-6 w-6 items-center justify-center text-xs font-bold text-white"
                  style={{ background: "#c0392b" }}
                >
                  01
                </span>
                DELIVERY ADDRESS
              </h2>

              <div>
                <label
                  className="label-xs mb-1 block text-xs tracking-widest text-gray-500"
                  htmlFor="email"
                >
                  EMAIL
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="w-full border px-3 py-2.5 text-sm outline-none focus:border-black transition-colors"
                  style={{ borderColor: "#d0d0d0", background: "#fafafa" }}
                />
              </div>

              <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-600">
                <input
                  type="checkbox"
                  checked={subscribe}
                  onChange={(e) => setSubscribe(e.target.checked)}
                  className="accent-red-600"
                />
                Subscribe to ZENJI drops. Limited runs, no restocks — you hear
                first.
              </label>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    className="label-xs mb-1 block text-xs tracking-widest text-gray-500"
                    htmlFor="first-name"
                  >
                    FIRST NAME
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full border px-3 py-2.5 text-sm outline-none focus:border-black transition-colors"
                    style={{ borderColor: "#d0d0d0", background: "#fafafa" }}
                  />
                </div>
                <div>
                  <label
                    className="label-xs mb-1 block text-xs tracking-widest text-gray-500"
                    htmlFor="last-name"
                  >
                    LAST NAME
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full border px-3 py-2.5 text-sm outline-none focus:border-black transition-colors"
                    style={{ borderColor: "#d0d0d0", background: "#fafafa" }}
                  />
                </div>
              </div>

              <div>
                <label
                  className="label-xs mb-1 block text-xs tracking-widest text-gray-500"
                  htmlFor="address"
                >
                  ADDRESS (LINE 1)
                </label>
                <input
                  id="address"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Street / Address"
                  className="w-full border px-3 py-2.5 text-sm outline-none focus:border-black transition-colors"
                  style={{ borderColor: "#d0d0d0", background: "#fafafa" }}
                />
              </div>

              <div>
                <label
                  className="label-xs mb-1 block text-xs tracking-widest text-gray-500"
                  htmlFor="address2"
                >
                  ADDRESS LINE 2 (OPTIONAL)
                </label>
                <input
                  id="address2"
                  type="text"
                  value={address2}
                  onChange={(e) => setAddress2(e.target.value)}
                  placeholder="Apt / Unit / Floor"
                  className="w-full border px-3 py-2.5 text-sm outline-none focus:border-black transition-colors"
                  style={{ borderColor: "#d0d0d0", background: "#fafafa" }}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    className="label-xs mb-1 block text-xs tracking-widest text-gray-500"
                    htmlFor="city"
                  >
                    CITY / SUBURB
                  </label>
                  <input
                    id="city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full border px-3 py-2.5 text-sm outline-none focus:border-black transition-colors"
                    style={{ borderColor: "#d0d0d0", background: "#fafafa" }}
                  />
                </div>
                <div>
                  <label
                    className="label-xs mb-1 block text-xs tracking-widest text-gray-500"
                    htmlFor="postcode"
                  >
                    POSTCODE
                  </label>
                  <input
                    id="postcode"
                    type="text"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    placeholder="2000"
                    className="w-full border px-3 py-2.5 text-sm outline-none focus:border-black transition-colors"
                    style={{ borderColor: "#d0d0d0", background: "#fafafa" }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    className="label-xs mb-1 block text-xs tracking-widest text-gray-500"
                    htmlFor="state"
                  >
                    STATE
                  </label>
                  <select
                    id="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full border px-3 py-2.5 text-sm outline-none focus:border-black transition-colors cursor-pointer appearance-none"
                    style={{ borderColor: "#d0d0d0", background: "#fafafa" }}
                  >
                    {AUS_STATES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    className="label-xs mb-1 block text-xs tracking-widest text-gray-500"
                    htmlFor="country"
                  >
                    COUNTRY
                  </label>
                  <input
                    id="country"
                    type="text"
                    value="AUSTRALIA"
                    readOnly
                    className="w-full border px-3 py-2.5 text-sm outline-none"
                    style={{
                      borderColor: "#d0d0d0",
                      background: "#f0f0f0",
                      color: "#999",
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  className="label-xs mb-1 block text-xs tracking-widest text-gray-500"
                  htmlFor="phone"
                >
                  PHONE (OPTIONAL)
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="For delivery updates (optional)"
                  className="w-full border px-3 py-2.5 text-sm outline-none focus:border-black transition-colors"
                  style={{ borderColor: "#d0d0d0", background: "#fafafa" }}
                />
              </div>
            </div>

            {/* 02 — Shipping Method */}
            <div
              className="rounded-sm border p-5 space-y-3"
              style={{ borderColor: "#e0e0e0", background: "#fff" }}
            >
              <h2
                className="display flex items-center gap-2 text-sm tracking-widest"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span
                  className="flex h-6 w-6 items-center justify-center text-xs font-bold text-white"
                  style={{ background: "#c0392b" }}
                >
                  02
                </span>
                SHIPPING METHOD
              </h2>

              <label
                className="flex cursor-pointer items-center justify-between rounded-sm border p-3 transition-colors"
                style={{ borderColor: "#c0392b", background: "#fff8f8" }}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="shipping"
                    defaultChecked
                    className="accent-red-600"
                  />
                  <div>
                    <p className="text-sm font-medium">STANDARD SHIPPING</p>
                    <p className="label-xs text-xs text-gray-500 tracking-widest">
                      3–6 Business Days · Australia-wide
                    </p>
                  </div>
                </div>
                <span className="text-sm font-bold">
                  {isFreeShipping ? "FREE" : money(SHIPPING_COST)}
                </span>
              </label>

              <p className="label-xs text-xs text-gray-400 tracking-widest">
                FREE SHIPPING FOR ORDERS OVER {money(FREE_SHIPPING_THRESHOLD)}
              </p>
            </div>

            {/* 03 — Payment */}
            <div
              className="rounded-sm border p-5 space-y-4"
              style={{ borderColor: "#e0e0e0", background: "#fff" }}
            >
              <h2
                className="display flex items-center gap-2 text-sm tracking-widest"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span
                  className="flex h-6 w-6 items-center justify-center text-xs font-bold text-white"
                  style={{ background: "#c0392b" }}
                >
                  03
                </span>
                PAYMENT
              </h2>

              {/* Payment method options */}
              <div className="space-y-2">
                {/* Credit / Debit Card */}
                <label
                  className={`flex cursor-pointer items-start gap-3 rounded-sm border p-3 transition-colors ${paymentMethod === "card" ? "border-black" : "border-gray-200"}`}
                  onClick={() => setPaymentMethod("card")}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="accent-red-600 mt-0.5"
                  />
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        Credit / Debit Card
                      </span>
                      <div className="flex items-center gap-1">
                        {["VISA", "MC", "AMEX"].map((c) => (
                          <span
                            key={c}
                            className="label-xs rounded px-1.5 py-0.5 text-[9px] font-bold"
                            style={{ background: "#111", color: "#fff" }}
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                    {paymentMethod === "card" && (
                      <div className="space-y-3">
                        <div>
                          <label
                            className="label-xs mb-1 block text-xs tracking-widest text-gray-500"
                            htmlFor="card-number"
                          >
                            CARD NUMBER
                          </label>
                          <input
                            id="card-number"
                            type="text"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            placeholder="1234 5678 9012 3456"
                            className="w-full border px-3 py-2.5 text-sm outline-none focus:border-black transition-colors"
                            style={{
                              borderColor: "#d0d0d0",
                              background: "#fafafa",
                            }}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label
                              className="label-xs mb-1 block text-xs tracking-widest text-gray-500"
                              htmlFor="expiry"
                            >
                              EXPIRATION DATE
                            </label>
                            <input
                              id="expiry"
                              type="text"
                              value={expiry}
                              onChange={(e) => setExpiry(e.target.value)}
                              placeholder="MM / YY"
                              className="w-full border px-3 py-2.5 text-sm outline-none focus:border-black transition-colors"
                              style={{
                                borderColor: "#d0d0d0",
                                background: "#fafafa",
                              }}
                            />
                          </div>
                          <div>
                            <label
                              className="label-xs mb-1 block text-xs tracking-widest text-gray-500"
                              htmlFor="cvc"
                            >
                              SECURITY CODE
                            </label>
                            <input
                              id="cvc"
                              type="text"
                              value={cvc}
                              onChange={(e) => setCvc(e.target.value)}
                              placeholder="CVC"
                              className="w-full border px-3 py-2.5 text-sm outline-none focus:border-black transition-colors"
                              style={{
                                borderColor: "#d0d0d0",
                                background: "#fafafa",
                              }}
                            />
                          </div>
                        </div>

                        {/* Stripe Klarna inputs */}
                        <div>
                          <label
                            className="label-xs mb-1 block text-xs tracking-widest text-gray-500"
                            htmlFor="card-country"
                          >
                            COUNTRY
                          </label>
                          <select
                            id="card-country"
                            className="w-full border px-3 py-2.5 text-sm outline-none focus:border-black transition-colors cursor-pointer appearance-none"
                            style={{
                              borderColor: "#d0d0d0",
                              background: "#fafafa",
                            }}
                          >
                            <option>Australia</option>
                          </select>
                        </div>

                        <div>
                          <label
                            className="label-xs mb-1 block text-xs tracking-widest text-gray-500"
                            htmlFor="stripe-email"
                          >
                            EMAIL
                          </label>
                          <input
                            id="stripe-email"
                            type="email"
                            placeholder="you@sample.com"
                            className="w-full border px-3 py-2.5 text-sm outline-none focus:border-black transition-colors"
                            style={{
                              borderColor: "#d0d0d0",
                              background: "#fafafa",
                            }}
                          />
                        </div>

                        <div>
                          <label
                            className="label-xs mb-1 block text-xs tracking-widest text-gray-500"
                            htmlFor="stripe-phone"
                          >
                            MOBILE NUMBER
                          </label>
                          <input
                            id="stripe-phone"
                            type="tel"
                            placeholder="+61 0412 345 678"
                            className="w-full border px-3 py-2.5 text-sm outline-none focus:border-black transition-colors"
                            style={{
                              borderColor: "#d0d0d0",
                              background: "#fafafa",
                            }}
                          />
                        </div>

                        <div>
                          <label
                            className="label-xs mb-1 block text-xs tracking-widest text-gray-500"
                            htmlFor="stripe-name"
                          >
                            FULL NAME
                          </label>
                          <input
                            id="stripe-name"
                            type="text"
                            placeholder="First and last name"
                            className="w-full border px-3 py-2.5 text-sm outline-none focus:border-black transition-colors"
                            style={{
                              borderColor: "#d0d0d0",
                              background: "#fafafa",
                            }}
                          />
                        </div>

                        <p className="text-xs text-gray-400">
                          By providing your payment details, you agree to our{" "}
                          <a
                            href="/terms"
                            className="underline hover:text-black"
                          >
                            Terms
                          </a>{" "}
                          and{" "}
                          <a
                            href="/privacy"
                            className="underline hover:text-black"
                          >
                            Privacy Policy
                          </a>
                          .
                        </p>
                      </div>
                    )}
                  </div>
                </label>

                {/* Afterpay */}
                <label
                  className={`flex cursor-pointer items-center gap-3 rounded-sm border p-3 transition-colors ${paymentMethod === "afterpay" ? "border-black" : "border-gray-200"}`}
                  onClick={() => setPaymentMethod("afterpay")}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "afterpay"}
                    onChange={() => setPaymentMethod("afterpay")}
                    className="accent-red-600"
                  />
                  <span className="text-sm font-medium">Afterpay</span>
                </label>

                {/* Klarna */}
                <label
                  className={`flex cursor-pointer items-center gap-3 rounded-sm border p-3 transition-colors ${paymentMethod === "klarna" ? "border-black" : "border-gray-200"}`}
                  onClick={() => setPaymentMethod("klarna")}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "klarna"}
                    onChange={() => setPaymentMethod("klarna")}
                    className="accent-red-600"
                  />
                  <span className="text-sm font-medium">Klarna</span>
                </label>

                {/* Zip */}
                <label
                  className={`flex cursor-pointer items-center gap-3 rounded-sm border p-3 transition-colors ${paymentMethod === "zip" ? "border-black" : "border-gray-200"}`}
                  onClick={() => setPaymentMethod("zip")}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "zip"}
                    onChange={() => setPaymentMethod("zip")}
                    className="accent-red-600"
                  />
                  <span className="text-sm font-medium">
                    Zip — Flexible payments
                  </span>
                </label>

                {/* PayPal */}
                <label
                  className={`flex cursor-pointer items-center gap-3 rounded-sm border p-3 transition-colors ${paymentMethod === "paypal" ? "border-black" : "border-gray-200"}`}
                  onClick={() => setPaymentMethod("paypal")}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "paypal"}
                    onChange={() => setPaymentMethod("paypal")}
                    className="accent-red-600"
                  />
                  <span className="text-sm font-medium">PayPal</span>
                </label>
              </div>

              <p className="label-xs text-xs text-gray-400 tracking-widest">
                Powered by Stripe · Card details never touch our servers. · PCI
                DSS · AUTHORISED · SAFE
              </p>
            </div>

            {/* 04 — Billing Address */}
            <div
              className="rounded-sm border p-5 space-y-3"
              style={{ borderColor: "#e0e0e0", background: "#fff" }}
            >
              <h2
                className="display flex items-center gap-2 text-sm tracking-widest"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span
                  className="flex h-6 w-6 items-center justify-center text-xs font-bold text-white"
                  style={{ background: "#c0392b" }}
                >
                  04
                </span>
                BILLING ADDRESS
              </h2>

              <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-600">
                <input
                  type="checkbox"
                  checked={billingSame}
                  onChange={(e) => setBillingSame(e.target.checked)}
                  className="accent-red-600"
                />
                Same as shipping address
              </label>
            </div>

            {/* Place Order CTA */}
            <button
              id="place-order-btn"
              type="button"
              className="display w-full py-4 text-base font-bold tracking-widest text-white transition-opacity hover:opacity-90 cursor-pointer"
              style={{
                background: "#c0392b",
                fontFamily: "var(--font-display)",
              }}
            >
              ▶ PLACE ORDER — {money(grandTotal)}
            </button>

            <p className="text-center text-xs text-gray-400">
              By placing this order you accept our{" "}
              <a href="/terms" className="underline hover:text-black">
                Terms
              </a>{" "}
              and{" "}
              <a href="/privacy" className="underline hover:text-black">
                Privacy Policy
              </a>
              .
            </p>
          </div>

          {/* ── RIGHT COLUMN — Order Summary ── */}
          <div className="space-y-4">
            <div
              className="sticky top-6 rounded-sm border p-5 space-y-4"
              style={{ borderColor: "#e0e0e0", background: "#fff" }}
            >
              <h2
                className="display text-sm tracking-widest"
                style={{ fontFamily: "var(--font-display)" }}
              >
                ORDER SUMMARY
              </h2>

              {/* Line items */}
              <ul className="divide-y" style={{ borderColor: "#f0f0f0" }}>
                {lines.length === 0 ? (
                  <li className="py-3 text-xs text-gray-400">
                    Your cart is empty.
                  </li>
                ) : (
                  lines.map((l) => (
                    <li key={`${l.slug}-${l.size}`} className="flex gap-3 py-3">
                      <div
                        className="relative shrink-0 overflow-hidden rounded-sm border"
                        style={{
                          width: 56,
                          height: 56,
                          borderColor: "#e0e0e0",
                        }}
                      >
                        <Image
                          src={l.image}
                          alt={l.name}
                          className="h-full w-full object-cover"
                        />
                        {/* Qty badge */}
                        <span
                          className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-bold text-white"
                          style={{ background: "#c0392b" }}
                        >
                          {l.qty}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold uppercase truncate">
                          {l.name}
                        </p>
                        <p className="label-xs text-[10px] text-gray-400 tracking-widest">
                          Size {l.size}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        {l.compareAt && (
                          <p className="text-[10px] line-through text-gray-400">
                            {money(l.compareAt * l.qty)}
                          </p>
                        )}
                        <p className="text-xs font-bold">
                          {money(l.price * l.qty)}
                        </p>
                      </div>
                    </li>
                  ))
                )}
              </ul>

              {/* Discount code */}
              <div className="flex gap-2">
                <input
                  id="discount-code"
                  type="text"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  placeholder="ENTER CODE"
                  className="flex-1 border px-3 py-2 text-xs uppercase tracking-widest outline-none focus:border-black transition-colors"
                  style={{ borderColor: "#d0d0d0", background: "#fafafa" }}
                />
                <button
                  id="apply-discount-btn"
                  type="button"
                  onClick={handleApplyDiscount}
                  className="label-xs px-4 py-2 text-xs font-bold tracking-widest text-white transition-opacity hover:opacity-80 cursor-pointer"
                  style={{ background: "#111" }}
                >
                  {discountApplied ? "✓" : "APPLY"}
                </button>
              </div>

              {/* Totals */}
              <div
                className="space-y-2 border-t pt-4"
                style={{ borderColor: "#e0e0e0" }}
              >
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-medium">{money(total)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Shipping</span>
                  <span className="font-medium">
                    {isFreeShipping ? "FREE" : money(SHIPPING_COST)}
                  </span>
                </div>
              </div>

              <div
                className="flex justify-between border-t pt-4"
                style={{ borderColor: "#e0e0e0" }}
              >
                <span
                  className="display text-sm tracking-widest"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  TOTAL
                </span>
                <span
                  className="display text-xl font-bold"
                  style={{
                    color: "#c0392b",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {money(grandTotal)}
                </span>
              </div>

              <p className="label-xs text-center text-[10px] text-gray-400 tracking-widest">
                GST INCLUDED · ALL DROPS ARE FINAL
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
