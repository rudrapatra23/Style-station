import { Scissors, Palette, Hand, Sparkles, Crown, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import servicesHero from "@/assets/services-hero.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  const serviceCategories = [
    {
      icon: <Scissors className="h-8 w-8 text-primary" />,
      title: "Hair Services",
      description: "Complete hair care from cuts to styling",
      services: [
        { name: "Haircut & Style", price: "From $65", popular: true },
        { name: "Hair Color", price: "From $95", popular: true },
        { name: "Highlights", price: "From $120", popular: false },
        { name: "Balayage", price: "From $150", popular: true },
        { name: "Hair Extensions", price: "From $200", popular: false },
        { name: "Deep Conditioning", price: "From $45", popular: false },
      ],
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "Facial Services",
      description: "Rejuvenating treatments for glowing skin",
      services: [
        { name: "Classic Facial", price: "From $85", popular: true },
        { name: "Anti-Aging Facial", price: "From $120", popular: true },
        { name: "Hydrating Facial", price: "From $95", popular: false },
        { name: "Acne Treatment", price: "From $100", popular: false },
        { name: "Chemical Peel", price: "From $140", popular: false },
        { name: "Microdermabrasion", price: "From $110", popular: false },
      ],
    },
    {
      icon: <Hand className="h-8 w-8 text-primary" />,
      title: "Nail Services",
      description: "Beautiful nails that make a statement",
      services: [
        { name: "Classic Manicure", price: "From $35", popular: true },
        { name: "Gel Manicure", price: "From $50", popular: true },
        { name: "Classic Pedicure", price: "From $45", popular: false },
        { name: "Gel Pedicure", price: "From $65", popular: true },
        { name: "Nail Art", price: "From $15", popular: false },
        { name: "French Manicure", price: "From $40", popular: false },
      ],
    },
    {
      icon: <Crown className="h-8 w-8 text-primary" />,
      title: "Special Occasions",
      description: "Look stunning for your special moments",
      services: [
        { name: "Bridal Hair & Makeup", price: "From $250", popular: true },
        { name: "Special Event Styling", price: "From $150", popular: false },
        { name: "Group Bookings", price: "Custom", popular: true },
        { name: "Photo Shoot Ready", price: "From $180", popular: false },
        { name: "Prom Styling", price: "From $120", popular: false },
        { name: "Consultation", price: "Free", popular: false },
      ],
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Makeup Services",
      description: "Professional makeup for any occasion",
      services: [
        { name: "Everyday Makeup", price: "From $65", popular: true },
        { name: "Evening Makeup", price: "From $85", popular: false },
        { name: "Bridal Makeup", price: "From $150", popular: true },
        { name: "Makeup Lesson", price: "From $95", popular: false },
        { name: "Lash Extensions", price: "From $120", popular: true },
        { name: "Brow Shaping", price: "From $35", popular: false },
      ],
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Wellness & Spa",
      description: "Relax and rejuvenate your body and mind",
      services: [
        { name: "Relaxation Massage", price: "From $90", popular: true },
        { name: "Hot Stone Massage", price: "From $130", popular: false },
        { name: "Aromatherapy", price: "From $110", popular: false },
        { name: "Body Wrap", price: "From $140", popular: false },
        { name: "Scalp Treatment", price: "From $65", popular: true },
        { name: "Stress Relief Package", price: "From $180", popular: false },
      ],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${servicesHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-rose-gold/60"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl md:text-2xl text-gray-100">
            Comprehensive beauty and wellness treatments
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Complete Beauty Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From everyday maintenance to special occasion glamour, we have
              everything you need
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    {category.icon}
                    <CardTitle className="text-2xl text-foreground">
                      {category.title}
                    </CardTitle>
                  </div>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="flex justify-between items-center py-2 border-b border-border last:border-b-0"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-foreground">
                            {service.name}
                          </span>
                          {service.popular && (
                            <Badge variant="secondary" className="text-xs">
                              Popular
                            </Badge>
                          )}
                        </div>
                        <span className="text-primary font-semibold">
                          {service.price}
                        </span>
                      </div>
                    ))}
                  </div>
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
            Ready to Book Your Service?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Our expert team is ready to help you look and feel your absolute
            best
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6"
            >
              Book Online
            </Button>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 flex items-center justify-center"
              asChild
            >
              <a href="tel:935409512">Call Us: 935409512</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
