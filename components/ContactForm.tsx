"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/Button";
import { contactSubmissionSchema, serviceOptions } from "@/lib/contact-schema";
import { withBasePath } from "@/lib/site";

type FormStatus = "idle" | "success" | "error";

type FormValues = {
  name: string;
  company: string;
  phone: string;
  email: string;
  serviceInterestedIn: string;
  message: string;
  website: string;
};

const initialValues: FormValues = {
  name: "",
  company: "",
  phone: "",
  email: "",
  serviceInterestedIn: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(field: keyof FormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    setStatusMessage("");

    const parsed = contactSubmissionSchema.safeParse(values);
    if (!parsed.success) {
      const flattened = parsed.error.flatten().fieldErrors;
      setErrors({
        name: flattened.name?.[0],
        company: flattened.company?.[0],
        phone: flattened.phone?.[0],
        email: flattened.email?.[0],
        serviceInterestedIn: flattened.serviceInterestedIn?.[0],
        message: flattened.message?.[0],
      });
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch(withBasePath("/api/contact"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !data.success) {
        setStatus("error");
        setStatusMessage(data.message || "Unable to send your message right now.");
        return;
      }

      setStatus("success");
      setStatusMessage(data.message || "Thank you. We have received your message.");
      setValues(initialValues);
    } catch {
      setStatus("error");
      setStatusMessage("A network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="space-y-5 rounded-md border border-slate-700 bg-brand-600 p-6 shadow-sm" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Name"
          id="name"
          value={values.name}
          onChange={(value) => handleChange("name", value)}
          error={errors.name}
          required
        />
        <Field
          label="Company"
          id="company"
          value={values.company}
          onChange={(value) => handleChange("company", value)}
          error={errors.company}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Phone"
          id="phone"
          value={values.phone}
          onChange={(value) => handleChange("phone", value)}
          error={errors.phone}
          required
        />
        <Field
          label="Email"
          id="email"
          type="email"
          value={values.email}
          onChange={(value) => handleChange("email", value)}
          error={errors.email}
          required
        />
      </div>

      <div>
        <label htmlFor="serviceInterestedIn" className="block text-sm font-medium text-slate-100">
          Service Interested In
        </label>
        <select
          id="serviceInterestedIn"
          value={values.serviceInterestedIn}
          onChange={(event) => handleChange("serviceInterestedIn", event.target.value)}
          className="mt-1 block w-full rounded-md border border-slate-500 bg-slate-100 px-3 py-2 text-sm text-slate-900"
          required
        >
          <option value="">Select a service</option>
          {serviceOptions.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        {errors.serviceInterestedIn ? <p className="mt-1 text-xs text-red-700">{errors.serviceInterestedIn}</p> : null}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-100">
          Message
        </label>
        <textarea
          id="message"
          value={values.message}
          onChange={(event) => handleChange("message", event.target.value)}
          rows={5}
          className="mt-1 block w-full rounded-md border border-slate-500 bg-slate-100 px-3 py-2 text-sm text-slate-900"
          required
        />
        {errors.message ? <p className="mt-1 text-xs text-red-700">{errors.message}</p> : null}
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          value={values.website}
          onChange={(event) => handleChange("website", event.target.value)}
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      <div className="flex flex-col gap-3">
        <Button type="submit" className="w-full sm:w-auto">
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
        {status !== "idle" ? (
          <p className={`text-sm ${status === "success" ? "text-green-700" : "text-red-700"}`}>{statusMessage}</p>
        ) : null}
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  type?: "text" | "email" | "tel";
};

function Field({ label, id, value, onChange, error, required = false, type = "text" }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-100">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        className="mt-1 block w-full rounded-md border border-slate-500 bg-slate-100 px-3 py-2 text-sm text-slate-900"
      />
      {error ? <p className="mt-1 text-xs text-red-700">{error}</p> : null}
    </div>
  );
}
