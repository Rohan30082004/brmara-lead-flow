
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Calendar, DollarSign, Users } from "lucide-react";

const CaseStudy = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            How Skyrocket Digital Closed $30K+ in 3 Weeks
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A real success story of how our done-for-you lead generation system transformed a marketing agency's growth
          </p>
        </div>

        {/* Problem Section */}
        <div className="mb-16">
          <Card className="p-8 lg:p-12 rounded-2xl shadow-lg border-l-4 border-red-500">
            <CardContent className="p-0">
              <h2 className="text-3xl font-bold text-navy mb-6">The Problem</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Skyrocket Digital had a proven offer and happy clients, but they were struggling with a major challenge that many agencies face: 
                <strong className="text-navy"> no repeatable lead flow</strong>. They were relying on referrals and word-of-mouth, which made revenue unpredictable 
                and growth difficult to scale.
              </p>
              <div className="mt-6 p-6 bg-red-50 rounded-lg">
                <p className="text-red-700 font-medium">
                  "We had great results for our clients, but we couldn't predict where our next client would come from. It was feast or famine."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Solution Section */}
        <div className="mb-16">
          <Card className="p-8 lg:p-12 rounded-2xl shadow-lg border-l-4 border-orange">
            <CardContent className="p-0">
              <h2 className="text-3xl font-bold text-navy mb-6">The Solution</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Brmara implemented a comprehensive cold email strategy specifically designed for marketing agencies targeting eCommerce brands:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="bg-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="text-orange" size={32} />
                  </div>
                  <h3 className="font-semibold text-navy mb-2">Custom List Building</h3>
                  <p className="text-gray-600 text-sm">
                    Built a verified list of 100 eCommerce brands matching their ideal client profile
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="text-orange" size={32} />
                  </div>
                  <h3 className="font-semibold text-navy mb-2">Personalized Campaigns</h3>
                  <p className="text-gray-600 text-sm">
                    Created email sequences that spoke directly to eCommerce pain points
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="text-orange" size={32} />
                  </div>
                  <h3 className="font-semibold text-navy mb-2">Seamless Booking</h3>
                  <p className="text-gray-600 text-sm">
                    Integrated with their Calendly for automatic meeting scheduling
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results Section */}
        <div className="mb-16">
          <Card className="p-8 lg:p-12 rounded-2xl shadow-lg bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-500">
            <CardContent className="p-0">
              <h2 className="text-3xl font-bold text-navy mb-8">The Results</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar size={32} />
                  </div>
                  <div className="text-3xl font-bold text-navy mb-2">5</div>
                  <p className="text-gray-700 font-medium">Sales Calls Booked</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp size={32} />
                  </div>
                  <div className="text-3xl font-bold text-navy mb-2">3</div>
                  <p className="text-gray-700 font-medium">Deals in Pipeline</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign size={32} />
                  </div>
                  <div className="text-3xl font-bold text-navy mb-2">$30K+</div>
                  <p className="text-gray-700 font-medium">Revenue Generated</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign size={32} />
                  </div>
                  <div className="text-3xl font-bold text-navy mb-2">$3K</div>
                  <p className="text-gray-700 font-medium">Total Spend on Brmara</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-navy mb-4">ROI Breakdown</h3>
                <div className="flex justify-between items-center text-lg">
                  <span className="text-gray-700">Revenue Generated:</span>
                  <span className="font-bold text-green-600">$30,000+</span>
                </div>
                <div className="flex justify-between items-center text-lg">
                  <span className="text-gray-700">Investment in Brmara:</span>
                  <span className="font-bold text-navy">$3,000</span>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between items-center text-xl">
                  <span className="font-bold text-navy">ROI:</span>
                  <span className="font-bold text-green-600">10x Return</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial */}
        <div className="mb-16">
          <Card className="p-8 lg:p-12 rounded-2xl shadow-lg bg-navy text-white">
            <CardContent className="p-0 text-center">
              <div className="text-6xl text-orange mb-6">"</div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 leading-relaxed">
                Brmara made lead generation effortless. I just showed up to the calls and sold. 
                Having a predictable pipeline completely changed our business.
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center text-white font-bold">
                  SD
                </div>
                <div className="text-left">
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-gray-300">Founder, Skyrocket Digital</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-navy mb-6">Want Results Like This?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Stop relying on referrals and word-of-mouth. Get a predictable pipeline of qualified meetings 
            booked directly on your calendar.
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
      </div>
    </div>
  );
};

export default CaseStudy;
