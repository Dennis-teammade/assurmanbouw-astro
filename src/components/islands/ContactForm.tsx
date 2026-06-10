import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

interface Props {
  webhookUrl: string;
  bron: string;
  submitLabel?: string;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

interface FormState {
  naam: string;
  bedrijf: string;
  email: string;
  telefoon: string;
  bericht: string;
  website: string; // honeypot
}

interface FieldErrors {
  email?: string;
  telefoon?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_FILL_MS = 2000;

export default function ContactForm({ webhookUrl, bron, submitLabel = 'Verstuur' }: Props) {
  const [form, setForm] = useState<FormState>({
    naam: '',
    bedrijf: '',
    email: '',
    telefoon: '',
    bericht: '',
    website: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<FieldErrors>({});
  const mountTimeRef = useRef<number>(0);

  useEffect(() => {
    mountTimeRef.current = Date.now();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === 'email' || name === 'telefoon') {
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    }
  };

  const validate = (): FieldErrors => {
    const fe: FieldErrors = {};
    const email = form.email.trim();
    const tel = form.telefoon.trim();
    if (!email) fe.email = 'Vul je e-mailadres in.';
    else if (!EMAIL_RE.test(email)) fe.email = 'Geef een geldig e-mailadres in.';
    if (!tel) fe.telefoon = 'Vul je telefoonnummer in.';
    return fe;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot: bot vult dit verborgen veld in. Doe alsof het lukt, stuur niets.
    if (form.website.trim() !== '') {
      setStatus('success');
      return;
    }

    // Time-trap: te snel ingevuld = bot. Silent success.
    if (Date.now() - mountTimeRef.current < MIN_FILL_MS) {
      setStatus('success');
      return;
    }

    const fe = validate();
    if (Object.keys(fe).length > 0) {
      setErrors(fe);
      return;
    }

    setStatus('submitting');
    setErrors({});

    try {
      const payload = {
        naam: form.naam.trim(),
        bedrijf: form.bedrijf.trim(),
        email: form.email.trim(),
        telefoon: form.telefoon.trim(),
        bericht: form.bericht.trim(),
        bron,
        entry_url: typeof window !== 'undefined' ? window.location.href : '',
        submitted_at: new Date().toISOString(),
      };

      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  // ---------------- styles ----------------
  const cardStyle: CSSProperties = {
    background: '#FFFFFF',
    border: '1px solid #E5E8ED',
    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
  };

  const labelStyle: CSSProperties = {
    fontFamily: "'Outfit',sans-serif",
    fontSize: '13px',
    fontWeight: 600,
    color: '#3F5767',
    marginBottom: '6px',
    display: 'block',
  };

  const inputBase: CSSProperties = {
    fontFamily: "'Open Sans',sans-serif",
    fontSize: '15px',
    color: '#001F3F',
    background: '#FFFFFF',
    border: '1px solid #E5E8ED',
    borderRadius: '8px',
    padding: '12px 14px',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.15s, box-shadow 0.15s',
  };

  const inputError: CSSProperties = { borderColor: '#B91C1C' };

  const errorTextStyle: CSSProperties = {
    fontFamily: "'Open Sans',sans-serif",
    fontSize: '13px',
    color: '#B91C1C',
    marginTop: '6px',
  };

  const reqStarStyle: CSSProperties = { color: '#E5A524', marginLeft: '2px' };

  const honeypotWrap: CSSProperties = {
    position: 'absolute',
    left: '-9999px',
    top: 'auto',
    width: '1px',
    height: '1px',
    overflow: 'hidden',
    opacity: 0,
  };

  // ---------------- success state ----------------
  if (status === 'success') {
    return (
      <div className="rounded-xl p-8 text-center" style={cardStyle}>
        <div
          className="mx-auto mb-4 flex items-center justify-center"
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'rgba(229,165,36,0.12)',
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#E5A524"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3
          style={{
            fontFamily: "'Outfit',sans-serif",
            fontWeight: 800,
            fontSize: '22px',
            color: '#001F3F',
            margin: '0 0 8px',
          }}
        >
          Bedankt!
        </h3>
        <p
          style={{
            fontFamily: "'Open Sans',sans-serif",
            fontSize: '16px',
            lineHeight: 1.6,
            color: '#3F5767',
            margin: 0,
          }}
        >
          We hebben je bericht ontvangen en nemen snel contact met je op.
        </p>
      </div>
    );
  }

  // ---------------- form state ----------------
  const isSubmitting = status === 'submitting';

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl p-6 md:p-8"
      style={cardStyle}
    >
      {/* Honeypot — onzichtbaar voor mensen, zichtbaar voor bots */}
      <div style={honeypotWrap} aria-hidden="true">
        <label>
          Laat dit veld leeg
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-naam" style={labelStyle}>
            Volledige naam
          </label>
          <input
            id="cf-naam"
            type="text"
            name="naam"
            value={form.naam}
            onChange={handleChange}
            autoComplete="name"
            disabled={isSubmitting}
            style={inputBase}
            placeholder="Jouw naam"
          />
        </div>
        <div>
          <label htmlFor="cf-bedrijf" style={labelStyle}>
            Bedrijf
          </label>
          <input
            id="cf-bedrijf"
            type="text"
            name="bedrijf"
            value={form.bedrijf}
            onChange={handleChange}
            autoComplete="organization"
            disabled={isSubmitting}
            style={inputBase}
            placeholder="Jouw bedrijfsnaam"
          />
        </div>
        <div>
          <label htmlFor="cf-email" style={labelStyle}>
            E-mail<span style={reqStarStyle} aria-hidden="true">*</span>
          </label>
          <input
            id="cf-email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            required
            aria-required="true"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'cf-email-err' : undefined}
            disabled={isSubmitting}
            style={{ ...inputBase, ...(errors.email ? inputError : {}) }}
            placeholder="naam@bedrijf.be"
          />
          {errors.email && (
            <div id="cf-email-err" style={errorTextStyle}>
              {errors.email}
            </div>
          )}
        </div>
        <div>
          <label htmlFor="cf-telefoon" style={labelStyle}>
            Telefoon<span style={reqStarStyle} aria-hidden="true">*</span>
          </label>
          <input
            id="cf-telefoon"
            type="tel"
            name="telefoon"
            value={form.telefoon}
            onChange={handleChange}
            autoComplete="tel"
            required
            aria-required="true"
            aria-invalid={errors.telefoon ? 'true' : 'false'}
            aria-describedby={errors.telefoon ? 'cf-telefoon-err' : undefined}
            disabled={isSubmitting}
            style={{ ...inputBase, ...(errors.telefoon ? inputError : {}) }}
            placeholder="0470 12 34 56"
          />
          {errors.telefoon && (
            <div id="cf-telefoon-err" style={errorTextStyle}>
              {errors.telefoon}
            </div>
          )}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="cf-bericht" style={labelStyle}>
          Bericht
        </label>
        <textarea
          id="cf-bericht"
          name="bericht"
          value={form.bericht}
          onChange={handleChange}
          rows={5}
          disabled={isSubmitting}
          style={{ ...inputBase, resize: 'vertical', minHeight: '120px' }}
          placeholder="Waarover wil je het hebben? Laat het ons hier weten."
        />
      </div>

      {status === 'error' && (
        <div
          role="alert"
          className="mt-4 rounded-lg p-4"
          style={{
            background: 'rgba(185,28,28,0.06)',
            border: '1px solid rgba(185,28,28,0.2)',
            fontFamily: "'Open Sans',sans-serif",
            fontSize: '14px',
            color: '#7F1D1D',
            lineHeight: 1.5,
          }}
        >
          Sorry, er ging iets mis bij het versturen. Probeer het opnieuw of stuur ons
          gerust een mailtje op{' '}
          <a
            href="mailto:info@assurman.be"
            style={{ color: '#001F3F', fontWeight: 700, textDecoration: 'underline' }}
          >
            info@assurman.be
          </a>
          .
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full md:w-auto"
        style={{
          fontFamily: "'Open Sans',sans-serif",
          fontWeight: 700,
          fontSize: '16px',
          background: isSubmitting ? '#E9C466' : '#E5A524',
          color: '#001F3F',
          border: 'none',
          borderRadius: '8px',
          padding: '14px 32px',
          cursor: isSubmitting ? 'wait' : 'pointer',
          transition: 'background 0.2s',
          opacity: isSubmitting ? 0.85 : 1,
        }}
        onMouseEnter={(e) => {
          if (!isSubmitting) (e.currentTarget as HTMLButtonElement).style.background = '#E9C466';
        }}
        onMouseLeave={(e) => {
          if (!isSubmitting) (e.currentTarget as HTMLButtonElement).style.background = '#E5A524';
        }}
      >
        {isSubmitting ? 'Versturen...' : submitLabel}
      </button>
    </form>
  );
}
