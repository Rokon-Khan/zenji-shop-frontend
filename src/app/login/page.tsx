import type { Metadata } from "next";
import { LoginClient } from "./LoginClient";

export const metadata: Metadata = {
  title: "Login — ZENJI Member Access",
  description:
    "Sign in to your ZENJI account for early drop access, order tracking and saved wishlists.",
  openGraph: {
    title: "Login — ZENJI",
    description: "Member access. Early drops. Order tracking.",
  },
};

export default function LoginPage() {
  return <LoginClient />;
}
