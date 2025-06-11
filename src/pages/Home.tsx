
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Mail, Calendar } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy/90 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              We Book Sales Meetings <br />
              <span className="text-orange">for Marketing Agencies</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              5–10 qualified sales calls/month with your dream clients — no ads, no hiring, just results.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-orange hover:bg-orange/90 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:shadow-lg"
            >
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Book a Free Strategy Call →
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, effective, and results-driven process to get you more qualified meetings
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="bg-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="text-orange" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4">1. Build Verified Lead List</h3>
                <p className="text-gray-600">
                  We build a verified lead list based on your target audience using Apollo.io
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="bg-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="text-orange" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4">2. Send Custom Campaigns</h3>
                <p className="text-gray-600">
                  We write and send custom cold email campaigns that get responses
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="bg-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="text-orange" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4">3. Meetings on Your Calendar</h3>
                <p className="text-gray-600">
                  You get meetings booked directly on your calendar, ready to close
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Brmara */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">Why Choose Brmara</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-orange mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-2">Pay-per-result pricing model</h3>
                    <p className="text-gray-600">Only pay for booked meetings with qualified decision-makers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-orange mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-2">Zero learning curve</h3>
                    <p className="text-gray-600">We handle everything while you focus on closing deals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-orange mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-2">Done-for-you outbound system</h3>
                    <p className="text-gray-600">Complete lead generation solution from start to finish</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-orange mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-2">Focused 100% on marketing agencies</h3>
                    <p className="text-gray-600">We understand your business and target the right prospects</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-navy to-navy/90 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Scale Your Agency?</h3>
              <p className="text-gray-200 mb-6">
                Join marketing agencies who are already booking 5-10 qualified meetings per month
              </p>
              <Button 
                asChild
                className="bg-orange hover:bg-orange/90 text-white px-6 py-3 rounded-lg font-medium w-full"
              >
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  Get Started Today
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let us handle the outreach so you can close more deals
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Stop wasting time on cold calls and LinkedIn spam. Get qualified meetings booked on autopilot.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-orange hover:bg-orange/90 text-white px-8 py-4 text-lg font-semibold rounded-lg"
          >
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              Book a Free Strategy Call
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
