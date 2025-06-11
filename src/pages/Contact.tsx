
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">Let's Talk Growth</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Want 5–10 extra sales calls this month? Let's discuss how Brmara can make it happen.
          </p>
        </div>

        {/* Main CTA Card */}
        <div className="mb-12">
          <Card className="p-8 lg:p-12 rounded-2xl shadow-lg bg-gradient-to-br from-navy to-navy/90 text-white text-center">
            <CardContent className="p-0">
              <Calendar className="text-orange mx-auto mb-6" size={48} />
              <h2 className="text-2xl font-bold mb-4">Book Your Free Strategy Call</h2>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                In this 30-minute call, we'll analyze your current lead generation challenges and show you 
                exactly how our system can help you book 5-10 qualified meetings per month.
              </p>
              
              {/* Calendly Embed Placeholder */}
              <div className="bg-white rounded-lg p-8 mb-6">
                <div className="text-center text-gray-600">
                  <Calendar size={64} className="mx-auto mb-4 text-gray-400" />
                  <h3 className="text-xl font-semibold text-navy mb-2">Schedule Your Call</h3>
                  <p className="mb-4">Click below to access our Calendly booking system</p>
                  <Button 
                    asChild
                    size="lg"
                    className="bg-orange hover:bg-orange/90 text-white px-8 py-3 text-lg font-semibold rounded-lg"
                  >
                    <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                      Open Calendly →
                    </a>
                  </Button>
                </div>
              </div>
              
              <p className="text-sm text-gray-300">
                ⏰ Available Monday-Friday, 9 AM - 5 PM EST
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Alternative Contact Methods */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-0 text-center">
              <div className="bg-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-orange" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Email Us</h3>
              <p className="text-gray-600 mb-4">
                Have questions? Send us an email and we'll get back to you within 24 hours.
              </p>
              <Button asChild variant="outline" className="border-orange text-orange hover:bg-orange hover:text-white">
                <a href="mailto:info@brmara.com">info@brmara.com</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-0 text-center">
              <div className="bg-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-orange" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">WhatsApp</h3>
              <p className="text-gray-600 mb-4">
                Prefer instant messaging? Reach out to us on WhatsApp for quick questions.
              </p>
              <Button asChild variant="outline" className="border-orange text-orange hover:bg-orange hover:text-white">
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                  Click to Chat
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* What to Expect */}
        <Card className="p-8 rounded-2xl shadow-lg bg-gray-50">
          <CardContent className="p-0">
            <h2 className="text-2xl font-bold text-navy text-center mb-8">What to Expect on Our Call</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-orange text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  1
                </div>
                <h3 className="font-semibold text-navy mb-2">Analyze Your Current Situation</h3>
                <p className="text-gray-600 text-sm">
                  We'll review your current lead generation efforts and identify gaps
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  2
                </div>
                <h3 className="font-semibold text-navy mb-2">Create a Custom Strategy</h3>
                <p className="text-gray-600 text-sm">
                  We'll design a specific approach for your target market and ideal clients
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  3
                </div>
                <h3 className="font-semibold text-navy mb-2">Discuss Next Steps</h3>
                <p className="text-gray-600 text-sm">
                  If it's a good fit, we'll outline how to get started immediately
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Don't let another month go by with unpredictable lead flow. 
            <br />
            <strong className="text-navy">Book your call today and start getting meetings on autopilot.</strong>
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-orange hover:bg-orange/90 text-white px-8 py-4 text-lg font-semibold rounded-lg"
          >
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              Schedule Your Free Strategy Call
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
