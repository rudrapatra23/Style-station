import { useState, useEffect } from "react";
import { ArrowRight, Star, Users, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useLocation, useNavigate } from "react-router-dom";
import salonHero from "@/assets/salon-hero.jpg";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const features = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Expert Stylists",
      description:
        "Our certified professionals have years of experience in cutting-edge styling techniques.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Premium Products",
      description:
        "We use only the finest professional-grade products for exceptional results.",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Flexible Hours",
      description:
        "Open 7 days a week with extended hours to fit your busy schedule.",
    },
  ];

  const testimonials = [
    {
      name: "Neha Thakur",
      text: "The best salon experience I've ever had! My stylist understood exactly what I wanted.",
      rating: 5,
    },
    {
      name: "Saloni Padda",
      text: "Professional, clean, and absolutely beautiful results every time I visit.",
      rating: 5,
    },
    {
      name: "Shubham Bhunia",
      text: "The atmosphere is so relaxing and the staff is incredibly talented.",
      rating: 5,
    },
  ];

  // Scroll to contact section if URL contains #contact-section
  useEffect(() => {
    if (location.hash === "#contact-section") {
      const el = document.getElementById("contact-section");
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const handleScrollToContact = () => {
    if (location.pathname !== "/contact") {
      navigate("/contact#contact-section");
    } else {
      const el = document.getElementById("contact-section");
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${salonHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-rose-gold/70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Beauty & Style
            <br />
            <span className="text-rose-gold-foreground">Redefined</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Transform your look with our expert stylists and premium services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 flex items-center"
              onClick={handleScrollToContact}
            >
              Book Appointment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 flex items-center justify-center"
              asChild
            >
              <Link to="/services">
                View Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Why Choose Style Station Salon?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our commitment to excellence and personalized service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it – hear from our satisfied clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-foreground">
                    – {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-rose-gold text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Your Transformation?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Book your appointment today and let our expert team help you look and feel your best
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 flex items-center justify-center"
            onClick={handleScrollToContact}
          >
            Schedule Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
