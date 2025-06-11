
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, CheckCircle, Zap, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">Who We Are</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Brmara is a performance-based lead generation service by Rohan Mishra, 
            dedicated to helping marketing agencies scale through systematic cold email outreach.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <Card className="p-8 lg:p-12 rounded-2xl shadow-lg bg-gradient-to-br from-navy to-navy/90 text-white">
            <CardContent className="p-0 text-center">
              <Target className="text-orange mx-auto mb-6" size={48} />
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl leading-relaxed max-w-3xl mx-auto">
                Help marketing agencies scale by replacing cold calls and LinkedIn spam with a simple, 
                automated cold email system that actually works.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <CardContent className="p-0">
                <div className="bg-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-orange" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-3">Results over vanity metrics</h3>
                <p className="text-gray-600 text-sm">
                  We focus on booked meetings and closed deals, not opens and clicks
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <CardContent className="p-0">
                <div className="bg-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-orange" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-3">Simplicity in systems</h3>
                <p className="text-gray-600 text-sm">
                  Clean, efficient processes that work without complexity
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <CardContent className="p-0">
                <div className="bg-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-orange" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-3">Integrity in outreach</h3>
                <p className="text-gray-600 text-sm">
                  Honest, value-driven emails that respect prospects' time
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <CardContent className="p-0">
                <div className="bg-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-orange" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-3">Built lean, without fluff</h3>
                <p className="text-gray-600 text-sm">
                  No unnecessary features or processes - just what works
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Founder Section */}
        <div className="mb-16">
          <Card className="p-8 lg:p-12 rounded-2xl shadow-lg">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-navy mb-6">Meet the Founder</h2>
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    <strong>Rohan Mishra</strong> built Brmara after seeing too many talented marketing agencies 
                    struggle with inconsistent lead flow. Having worked with dozens of agencies, he noticed a 
                    pattern: great service delivery, but unpredictable client acquisition.
                  </p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Rather than building another complex platform, Rohan focused on creating a simple, 
                    results-driven system that removes the guesswork from lead generation.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-orange flex-shrink-0" size={20} />
                      <span className="text-gray-700">5+ years in B2B lead generation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-orange flex-shrink-0" size={20} />
                      <span className="text-gray-700">Helped 50+ agencies scale their outreach</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-orange flex-shrink-0" size={20} />
                      <span className="text-gray-700">Generated 1000+ qualified meetings</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 text-center">
                  <div className="w-32 h-32 bg-navy rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-4">
                    RM
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Rohan Mishra</h3>
                  <p className="text-gray-600">Founder & Lead Generation Specialist</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-navy mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your marketing agency get a predictable flow of qualified meetings.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-orange hover:bg-orange/90 text-white px-8 py-4 text-lg font-semibold rounded-lg"
          >
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              Schedule a Strategy Call
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
