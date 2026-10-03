import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeDollarSign,
  BarChart3,
  Check,
  CreditCard,
  EyeOff,
  Landmark,
  LockKeyhole,
  Menu,
  Play,
  Plus,
  Send,
  ShieldCheck,
  Sparkles,
  WalletCards,
  Wifi,
} from "lucide-react";
import financeHand from "@/assets/fintech-hand.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arina — Smarter Financial Decisions" },
      {
        name: "description",
        content: "Manage your money, investments, and financial goals in one secure platform.",
      },
      { property: "og:title", content: "Arina — Smarter Financial Decisions" },
      {
        property: "og:description",
        content: "Manage your money, investments, and financial goals in one secure platform.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = ["Features", "How It Works", "Pricing", "About", "Testimonials", "Contact"];

function Logo() {
  return <a href="#top" className="logo" aria-label="Arina home">ARINA</a>;
}

function BankCard({ dark = false }: { dark?: boolean }) {
  return (
    <div className={dark ? "bank-card bank-card--dark" : "bank-card bank-card--lime"}>
      <div className="bank-card__top"><span>{dark ? "VISA" : "Credit card number"}</span><Wifi size={24} /></div>
      {!dark && <strong>5337&nbsp; 8682&nbsp; 4901&nbsp; 3294</strong>}
      {dark && <strong>5337&nbsp; 8682&nbsp; 4901&nbsp; 3294</strong>}
      <div className="bank-card__bottom"><span>{dark ? "Mason Smith" : "Bianca Taylor"}</span><span>{dark ? "10/31" : "03/24"}</span></div>
    </div>
  );
}

function Index() {
  useEffect(() => {
    const selector = ".bank-card, .stats-card, .income-chip, .wallet-dot, .feature-grid article, .balance-panel";
    const onMove = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest?.(selector) as HTMLElement | null;
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return (
    <main id="top">
      <header className="site-header shell">
        <Logo />
        <nav aria-label="Main navigation">
          {nav.map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`}>{item}</a>)}
        </nav>
        <div className="header-actions"><a href="#login">Log In</a><a className="outline-pill" href="#pricing">Get Started</a></div>
        <button className="menu-button" aria-label="Open menu"><Menu /></button>
      </header>

      <section className="hero shell">
        <div className="hero-copy">
          <h1>Your Partner in<br />Smarter <span>Financial<br />Decisions</span></h1>
          <p>Take control of your money with tools designed to help you save more, invest wisely, and plan ahead — effortlessly.</p>
          <div className="hero-actions"><a className="primary-pill" href="#contact">Talk to an Expert</a><a className="watch-link" href="#how-it-works"><i><Play size={15} fill="currentColor" /></i> Watch Video</a></div>
          <div className="topic-rule" />
          <div className="topic-pills">{["Market Insights", "Invest", "Grow", "Plan", "Budget", "Expert Tips"].map((x) => <span key={x}>{x}</span>)}</div>
        </div>

        <div className="hero-visual" aria-label="Arina banking cards">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="stats-card"><span>Statistics</span><div className="bars">{[35,55,80,48,90,66].map((h, i) => <b key={i} style={{ height: `${h}%` }} />)}</div><small>Income &nbsp;&nbsp; $4,216</small></div>
          <BankCard />
          <BankCard dark />
          <div className="income-chip"><BarChart3 size={18} /> Income</div>
          <div className="wallet-dot"><WalletCards size={23} /></div>
        </div>
      </section>

      <section className="partners shell" aria-label="Partner companies">
        <p>Partner Companies</p>
        <div><strong className="visa">VISA</strong><strong className="mastercard"><i /><i /></strong><strong>▧ PLAID</strong><strong className="serif-logo">Forbes</strong><strong>Deloitte.</strong></div>
      </section>

      <section className="features shell" id="features">
        <div className="section-kicker"><span>Features</span><small>Everything you need, nothing you don't.</small></div>
        <h2>Achieve <em>financial clarity</em> and take control of<br className="desktop" /> your future with tools designed to simplify,<br className="desktop" /> streamline, and personalize your <b>money<br className="desktop" /> management</b> — all in one secure platform.</h2>
        <div className="feature-grid">
          <article className="feature-image"><img src={financeHand} alt="Hand holding a phone and wallet" width={768} height={1024} /></article>
          <article className="feature-card green"><h3>Automated Budgeting &amp;<br />Alerts</h3><div className="feature-symbol">$</div><p>Create custom budgets and get real-time alerts to stay on track every month.</p></article>
          <article className="feature-card lime"><h3>Unified Account Dashboard</h3><div className="feature-symbol"><Landmark /></div><p>View all your bank accounts, cards, and transactions in one intuitive interface.</p></article>
          <article className="feature-card light-lime"><h3>Personalized Financial<br />Insights</h3><div className="feature-symbol">$</div><p>Get smart, actionable advice based on your spending habits and savings goals.</p></article>
        </div>
      </section>

      <section className="steps" id="how-it-works">
        <div className="shell steps-inner">
          <div className="balance-panel">
            <div className="balance-top"><span>🇺🇸 &nbsp; US Dollar</span><EyeOff size={20} /></div>
            <small>Available Total Balance</small><strong>$ 47,586.32</strong>
            <div className="balance-actions"><span><CreditCard size={18} /></span><span><BadgeDollarSign size={17} /> Request</span><span><Send size={17} /> Transfer</span><span className="balance-plus"><Plus /></span></div>
          </div>
          <div className="steps-copy">
            <h2>Start Managing Your<br />Money in 3 Easy Steps</h2>
            <ol>
              <li><i><WalletCards /></i><span><b>Sign Up and Connect Accounts.</b> Link your bank, credit cards, and wallets with bank-level encryption.</span></li>
              <li><i><Sparkles /></i><span><b>Smart Investment Insights.</b> AI-backed recommendations tailored to your risk profile.</span></li>
              <li><i><ShieldCheck /></i><span><b>Secure Multi-Account Sync.</b> All your accounts in one place — encrypted and always up-to-date.</span></li>
            </ol>
          </div>
        </div>
      </section>

      <section className="pricing shell" id="pricing">
        <div className="section-kicker"><span>Pricing</span><small>Try it free. Upgrade anytime.</small></div>
        <div className="pricing-content"><div><h2>One simple plan for<br />smarter money.</h2><p>Everything you need to track, save, and invest — without hidden fees.</p></div><a className="primary-pill" href="#contact">Choose your plan <ArrowRight size={16} /></a></div>
      </section>

      <footer id="contact"><div className="shell"><Logo /><p>Clear money. Confident decisions.</p><span>© 2026 Arina Finance</span></div></footer>
    </main>
  );
}