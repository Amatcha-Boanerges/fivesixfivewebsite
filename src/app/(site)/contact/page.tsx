import ContactForm from '@/components/forms/ContactForm';

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
          <ContactForm />
        </div>

        {/* Google Calendar Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Book a Consultation</h2>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <iframe 
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0NTLmVGzcdaf2Gl6UbM5WVJ9Yi7B-ZAThU0ufrc945KGNm-7JzRZXr4RfiFVEsxmpmDb3qBq1o?gv=true" 
              style={{ border: 0 }} 
              width="100%" 
              height="600" 
              frameBorder="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 