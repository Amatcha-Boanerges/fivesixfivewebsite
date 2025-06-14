'use client';

import { useState } from 'react';

type FormData = {
  name: string;
  email: string;
  message: string;
  wantsDiscoveryCall: boolean;
};

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    wantsDiscoveryCall: false,
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        message: '',
        wantsDiscoveryCall: false,
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
    }
  };

  const inputClasses = `
    mt-1 block w-full rounded-md border-gray-300 
    shadow-sm transition-all duration-200
    focus:border-primary focus:ring-2 focus:ring-primary/50 focus:ring-offset-2
    placeholder:text-gray-400
    disabled:bg-gray-50 disabled:text-gray-500
  `;

  const labelClasses = `
    block text-sm font-medium text-primary
    mb-1
  `;

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-neutral-light p-6 rounded-lg shadow-sm">
      {status === 'success' && (
        <div className="p-4 rounded-md bg-green-50 text-green-700">
          Thank you for your message! We&apos;ll get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 rounded-md bg-red-50 text-red-700">
          {errorMessage}
        </div>
      )}

      <div>
        <label htmlFor="name" className={labelClasses}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          className={inputClasses}
          disabled={status === 'submitting'}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your.email@example.com"
          className={inputClasses}
          disabled={status === 'submitting'}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          placeholder="How can we help you?"
          className={`${inputClasses} resize-none`}
          disabled={status === 'submitting'}
        />
      </div>

      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          id="wantsDiscoveryCall"
          name="wantsDiscoveryCall"
          checked={formData.wantsDiscoveryCall}
          onChange={handleChange}
          className="h-4 w-4 rounded border-gray-300 text-teal-600 
            focus:ring-2 focus:ring-teal-500/20 focus:ring-offset-2
            transition-all duration-200"
          disabled={status === 'submitting'}
        />
        <label htmlFor="wantsDiscoveryCall" className="text-sm text-primary">
          I'd like a discovery call
        </label>
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-primary px-6 py-3 text-white font-medium
          hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2
          transition-all duration-200 transform hover:-translate-y-0.5
          disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
} 