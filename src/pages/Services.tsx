
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, DollarSign, Clock, Target } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">What We Do</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Brmara delivers done-for-you lead generation via cold email, designed for digital marketing agencies targeting eCommerce founders.
          </p>
        </div>

        {/* Pricing Structure */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <Card className="p-8 rounded-xl shadow-lg border-2 border-orange">
            <CardHeader className="p-0 mb-6">
              <div className="flex items-center space-x-3">
                <DollarSign className="text-orange" size={32} />
                <CardTitle className="text-2xl text-navy">Setup Fee</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="text-4xl font-bold text-navy mb-4">$1,500</div>
              <p className="text-gray-600">One-time setup including:</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-orange" size={16} />
                  <span>Lead list building</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-orange" size={16} />
                  <span>Email copy creation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-orange" size={16} />
                  <span>Domain warmup</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-orange" size={16} />
                  <span>Calendar setup</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-8 rounded-xl shadow-lg border-2 border-navy">
            <CardHeader className="p-0 mb-6">
              <div className="flex items-center space-x-3">
                <Target className="text-navy" size={32} />
                <CardTitle className="text-2xl text-navy">Per Lead</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="text-4xl font-bold text-navy mb-4">$300</div>
              <p className="text-gray-600">Per booked meeting with qualified decision-makers only</p>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-700 font-medium">
                  💡 You only pay for results - no meetings, no payment
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Deliverables */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">What You Get</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="bg-orange/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Target className="text-orange" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">100-Verified Lead List</h3>
                <p className="text-gray-600">Built with verified contact information and targeted prospects</p>
              </CardContent>
            </Card>

            <Card className="p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="bg-orange/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="text-orange" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">Cold Email Sequences</h3>
                <p className="text-gray-600">Approved by client and optimized for responses</p>
              </CardContent>
            </Card>

            <Card className="p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="bg-orange/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="text-orange" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">Email Delivery</h3>
                <p className="text-gray-600">Professional delivery through reliable email infrastructure</p>
              </CardContent>
            </Card>

            <Card className="p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="bg-orange/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="text-orange" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">Calendar Booking</h3>
                <p className="text-gray-600">Direct booking via your calendar system</p>
              </CardContent>
            </Card>

            <Card className="p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="bg-orange/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="text-orange" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">Weekly Updates</h3>
                <p className="text-gray-600">Regular reports and ongoing support</p>
              </CardContent>
            </Card>

            <Card className="p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="bg-orange/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="text-orange" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">Full Support</h3>
                <p className="text-gray-600">Dedicated support throughout the process</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">What counts as a lead?</h3>
              <p className="text-gray-600">
                A scheduled 15+ minute call with a qualified decision-maker who has the authority to make purchasing decisions for their business.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">Do I need to set anything up?</h3>
              <p className="text-gray-600">
                No, we handle everything from A to Z. You just show up to the calls we book for you and focus on closing deals.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">Do you guarantee leads?</h3>
              <p className="text-gray-600">
                Yes - you only pay for booked meetings. If we don't book meetings, you don't pay the per-lead fee. Our pay-per-result model ensures we're aligned with your success.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-navy mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help you book 5-10 qualified meetings this month.
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

export default Services;
