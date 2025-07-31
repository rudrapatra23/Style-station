import { MapPin, Instagram, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  const contactInfo = [
  {
  icon: <Instagram className="h-6 w-6 text-primary" />,
  title: "Instagram",
  details: [
    <a
      key="instagram"
      href="https://www.instagram.com/stylestation_salon_academy/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-muted-foreground hover:underline"
    >
      @stylestation_salon_academy
    </a>,
  ],
},
  {
    icon: <Phone className="h-6 w-6 text-primary" />,
    title: "Call Us",
    details: ["935409512", "Text: 935409512"],
  },
  {
    icon: <Mail className="h-6 w-6 text-primary" />,
    title: "Email Us",
    details: ["info@xyz.com", "bookings@xyz.com"],
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "Hours",
    details: [
      "Mon-Fri: 9:00 AM - 8:00 PM",
      "Sat: 8:00 AM - 6:00 PM",
      "Sun: 10:00 AM - 5:00 PM",
    ],
  },
];


  const services = [
    "Haircut & Style",
    "Hair Color",
    "Highlights/Balayage",
    "Facial Treatment",
    "Nail Services",
    "Makeup",
    "Bridal Services",
    "Special Event",
    "Other",
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-rose-gold text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto">
            Ready to book your appointment? We'd love to hear from you
          </p>
        </div>
      </section>
<div className="text-center mt-8">
  <Button
    size="lg"
    className="bg-gradient-to-r from-primary to-rose-gold text-white text-lg px-8 py-6 hover:opacity-90"
  >
    <a
      href="https://your_google_form_link_here"
      target="_blank"
      rel="noopener noreferrer"
    >
      Book an Appointment
    </a>
  </Button>
</div>

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">{info.icon}</div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p
                        key={detailIndex}
                        className="text-muted-foreground text-sm"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Find Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="rounded-lg overflow-hidden h-64">
                    <iframe
                      title="Style Station Unisex Salon Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8472117120275!2d77.32551571481637!3d28.576533590095315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce503004614cd%3A0xf749a7e546a72c1e!2sStyle%20Station%20Unisex%20Salon!5e0!3m2!1sen!2sin!4v1722415945364!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">
                          Free Parking Available
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Convenient parking directly behind our building
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">
                          Flexible Scheduling
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Extended hours on weekdays, weekend availability
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Booking Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0 space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Cancellation Policy
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Please provide 24-hour notice for cancellations to avoid
                      charges.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      First-Time Clients
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Enjoy 20% off your first visit! Mention this offer when
                      booking.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Group Bookings
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Perfect for bridal parties, birthdays, and special events.
                      Contact us for group rates.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Need Immediate Assistance?
          </h3>
          <p className="text-muted-foreground mb-6">
            For same-day appointments or urgent inquiries, call us directly
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-rose-gold hover:opacity-90"
          >
            <Phone className="mr-2 h-5 w-5" />
            <a href="tel:935409512">Call Now: 935409512</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
