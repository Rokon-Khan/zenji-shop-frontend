"use client";

import { useState } from "react";
import { toast } from "sonner";

export function LoginClient() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      mode === "login" ? "Signed in — welcome back" : "Account created. Wear the arc."
    );
  };

  return (
    <section className="mx-auto grid max-w-[1600px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
      <div>
        <p className="label-xs text-primary">{"Member_Access // Encrypted"}</p>
        <h1 className="display mt-3 text-4xl leading-[0.88] sm:text-6xl">
          {mode === "login" ? "Welcome_Back" : "Join_ZENJI"}
        </h1>
        <p className="mt-4 max-w-md text-sm text-muted-foreground">
          Members get drop alerts 24 hours early, order tracking, and a saved wishlist that survives
          the sellout.
        </p>
        <ul className="label-xs mt-8 space-y-3 text-muted-foreground">
          <li className="border-b border-border pb-3">— 24h early access to every drop</li>
          <li className="border-b border-border pb-3">— Order history &amp; tracking</li>
          <li className="border-b border-border pb-3">— Saved wishlist across devices</li>
        </ul>
      </div>

      <div className="border border-border bg-ink p-6 sm:p-8">
        <div className="grid grid-cols-2 border border-border">
          {(["login", "register"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`label-xs py-3 font-bold transition-colors cursor-pointer ${
                mode === m ? "bg-paper text-paper-foreground" : "hover:text-primary"
              }`}
            >
              {m === "login" ? "Sign_In" : "Register"}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          {mode === "register" && (
            <div>
              <label htmlFor="name" className="label-xs text-muted-foreground">
                Name
              </label>
              <input
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full border-b border-border bg-transparent py-3 text-sm outline-none focus:border-primary"
              />
            </div>
          )}
          <div>
            <label htmlFor="email" className="label-xs text-muted-foreground">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full border-b border-border bg-transparent py-3 text-sm outline-none focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="password" className="label-xs text-muted-foreground">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full border-b border-border bg-transparent py-3 text-sm outline-none focus:border-primary"
            />
          </div>
          <button
            type="submit"
            className="display w-full bg-primary py-4 text-sm tracking-widest text-primary-foreground hover:opacity-90 transition-opacity cursor-pointer"
          >
            {mode === "login" ? "Sign in →" : "Create account →"}
          </button>
          <p className="label-xs text-center text-muted-foreground">
            {mode === "login" ? "No account yet?" : "Already a member?"}{" "}
            <button
              type="button"
              onClick={() => setMode(mode === "login" ? "register" : "login")}
              className="text-primary underline underline-offset-4 cursor-pointer"
            >
              {mode === "login" ? "Register" : "Sign in"}
            </button>
          </p>
        </form>
      </div>
    </section>
  );
}
