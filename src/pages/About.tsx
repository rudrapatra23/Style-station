import { Heart, Users, Award, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import teamHero from "@/assets/team-hero.jpg";

const About = () => {
  const stats = [
    { icon: <Users className="h-8 w-8 text-primary" />, number: "15+", label: "Expert Stylists" },
    { icon: <Calendar className="h-8 w-8 text-primary" />, number: "10+", label: "Years Experience" },
    { icon: <Heart className="h-8 w-8 text-primary" />, number: "5000+", label: "Happy Clients" },
    { icon: <Award className="h-8 w-8 text-primary" />, number: "25+", label: "Awards Won" },
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for perfection in every service we provide, ensuring each client leaves feeling beautiful and confident."
    },
    {
      title: "Innovation",
      description: "We stay ahead of trends and continuously update our techniques with the latest industry developments."
    },
    {
      title: "Personalization",
      description: "Every client is unique, and we tailor our services to match your individual style and preferences."
    },
    {
      title: "Sustainability",
      description: "We're committed to using eco-friendly products and practices that are good for you and the environment."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${teamHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-rose-gold/60"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Belle Salon</h1>
          <p className="text-xl md:text-2xl text-gray-100">
            Where passion meets expertise
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 2013, Belle Salon began as a dream to create a space where beauty and artistry 
                could flourish. What started as a small neighborhood salon has grown into a premier 
                destination for hair, beauty, and wellness services.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our founder, Isabella Martinez, envisioned a salon that would not just provide services, 
                but create experiences. A place where every client would feel pampered, valued, and 
                transformed. Today, that vision continues to guide everything we do.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that beauty is not just about how you look, but how you feel. Our mission 
                is to help every client discover their unique beauty and express it with confidence.
              </p>
            </div>
            <div className="lg:pl-12">
              <img 
                src={teamHero} 
                alt="Our team" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-secondary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">By the Numbers</h2>
            <p className="text-xl text-muted-foreground">
              Our commitment to excellence speaks for itself
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide every interaction and service we provide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              Passionate professionals dedicated to making you look and feel amazing
            </p>
          </div>
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Our team consists of highly trained stylists, colorists, and beauty professionals who 
              are passionate about their craft. Each team member brings unique skills and creativity, 
              ensuring that we can cater to all your beauty needs with expertise and artistry.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We regularly attend workshops, training sessions, and industry events to stay current 
              with the latest trends and techniques. This commitment to continuous learning ensures 
              that our clients always receive the most current and effective treatments available.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;