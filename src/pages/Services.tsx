import { Scissors, Palette, Hand, Sparkles, Crown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import servicesHero from "@/assets/services-hero.jpg";
import { Link } from "react-router-dom";
import React from "react";

interface Service {
  name: string;
  popular: boolean;
}

interface ServiceCategory {
  icon: React.ReactNode;
  title: string;
  description: string;
  services: Service[];
}

const serviceCategories: ServiceCategory[] = [
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "Facial Services",
    description: "Skin-brightening and rejuvenating facial treatments",
    services: [
      { name: "Acne Treatment", popular: false },
      { name: "Pure Green Tea Facial", popular: false },
      { name: "Hydracure Intense Facial", popular: false },
      { name: "Sensitive Skin Soother", popular: false },
      { name: "Whitening Booster", popular: false },
      { name: "Korean Facial", popular: false },
      { name: "Hydra Facial", popular: false },
      { name: "Organic Cleanup", popular: false },
      { name: "Dtan Cleanup", popular: false },
      { name: "Lotus Facial", popular: false },
      { name: "O3+ Whitening Facial", popular: false },
    ],
  },
  {
    icon: <Hand className="h-8 w-8 text-primary" />,
    title: "Nail Services",
    description: "Complete nail care with art and enhancements",
    services: [
      { name: "Meni Cure Normal", popular: false },
      { name: "Pedicure Normal", popular: false },
      { name: "Crystal Meni Care", popular: false },
      { name: "Advance Pedicure", popular: false },
      { name: "Acrylic Nails", popular: false },
      { name: "Gel Extension", popular: false },
      { name: "Gel Nails", popular: false },
      { name: "Franch Art", popular: false },
      { name: "Glitter Art", popular: false },
      { name: "Ston Art", popular: false },
      { name: "Chrome Art", popular: false },
      { name: "Cateye Art", popular: false },
      { name: "Ombre Art", popular: false },
      { name: "Blooming Art", popular: false },
      { name: "Marble Art", popular: false },
      { name: "3rd SD Nail Art", popular: false },
      { name: "Nail Polish Cheng", popular: false },
      { name: "Remove Nails", popular: false },
      { name: "Nail Repair", popular: false },
      { name: "Microblading", popular: false },
      { name: "Eye Lashes Extension", popular: false },
      { name: "BB Glow Treatment with Hydra", popular: false },
    ],
  },
  {
    icon: <Scissors className="h-8 w-8 text-primary" />,
    title: "Hair Services",
    description: "Modern styles and treatments for healthy hair",
    services: [
      { name: "Root Touch Up", popular: false },
      { name: "Global Hair Colour", popular: false },
      { name: "Smart Bond Booster", popular: false },
      { name: "Highlights", popular: false },
      { name: "Smoothening", popular: false },
      { name: "Perming", popular: false },
      { name: "Keratin", popular: false },
      { name: "Nanoplastia", popular: false },
      { name: "Head Massage", popular: false },
      { name: "Hair Cut Blowdry", popular: false },
      { name: "Hair Set", popular: false },
      { name: "Ironing", popular: false },
      { name: "Roller Setting", popular: false },
    ],
  },
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "Makeup Services",
    description: "Professional makeup for all occasions",
    services: [
      { name: "HD Makeup", popular: false },
      { name: "Air Brush Makeup", popular: false },
      { name: "HD Engagement", popular: false },
      { name: "Party Makeup", popular: false },
    ],
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "Bleach / Dtan",
    description: "Skin brightening and body care services",
    services: [
      { name: "Face Bleach", popular: false },
      { name: "Dtan", popular: false },
      { name: "Protein Bleach", popular: false },
      { name: "Full Body Bleach", popular: false },
      { name: "Body Polishing", popular: false },
    ],
  },
  {
    icon: <Hand className="h-8 w-8 text-primary" />,
    title: "Waxing Services",
    description: "Smooth skin with professional waxing",
    services: [
      { name: "Full Arms", popular: false },
      { name: "Full Legs", popular: false },
      { name: "Full Back", popular: false },
      { name: "Face Wax", popular: false },
      { name: "B-Line", popular: false },
    ],
  },
  {
    icon: <Crown className="h-8 w-8 text-primary" />,
    title: "Threading Services",
    description: "Precise and gentle hair removal",
    services: [
      { name: "Eyebrow Threading", popular: false },
      { name: "Upper Lip Threading", popular: false },
      { name: "Forehead Threading", popular: false },
      { name: "Chin Threading", popular: false },
      { name: "Full Face Threading", popular: false },
    ],
  },
];

const Services: React.FC = () => {
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
              From everyday maintenance to special occasion glamour, we have everything you need
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="break-inside-avoid mb-6 shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    {category.icon}
                    <CardTitle className="text-xl text-foreground">
                      {category.title}
                    </CardTitle>
                  </div>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </CardHeader>
                <CardContent>
                  {/* SCROLLABLE SERVICE LIST */}
                  <div
                    className={`space-y-2 ${
                      ["Facial Services", "Hair Services"].includes(category.title)
                        ? "max-h-[22rem]"
                        : "max-h-52"
                    } overflow-y-auto pr-2`}
                  >
                    {category.services.map((service, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center border-b border-border pb-1"
                      >
                        <span className="text-sm text-foreground">{service.name}</span>
                        {service.popular && (
                          <Badge variant="secondary" className="text-[10px]">
                            Popular
                          </Badge>
                        )}
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
          <h2 className="text-4xl font-bold mb-6">Ready to Book Your Service?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Our expert team is ready to help you look and feel your absolute best
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
              <a href="tel:9354095162">Call Us: 9354095162</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
