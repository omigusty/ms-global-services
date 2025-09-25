import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to take your business to the next level? Contact our team of
              experts for a personalized consultation.
            </p>
          </div>

          <div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Contact Information
              </h3>

              <div className="w-full grid grid-cols-1 sm:grid-cols-4 gap-4 items-start">
                <div className="flex items-start flex-col space-y-3 h-full">
                  <div className="w-12 h-12 bg-[#D7B459]/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-[#D7B459]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Address
                    </h4>
                    <p className="text-gray-600">Dubai, UAE</p>
                    <p className="text-sm text-gray-500">
                      Meydan Grandstand, 6th Floor, Meydan Road, Nad Al Sheba
                    </p>
                  </div>
                </div>

                <div className="flex items-start flex-col space-y-3 h-full">
                  <div className="w-12 h-12 bg-[#D7B459]/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-[#D7B459]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+97152 538 3200</p>
                    <p className="text-sm text-gray-500">
                      Available during business hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start flex-col space-y-3 h-full">
                  <div className="w-12 h-12 bg-[#D7B459]/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-[#D7B459]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">
                      infoweb@msglobal-services.com
                    </p>
                    <p className="text-sm text-gray-500">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start flex-col space-y-3 h-full">
                  <div className="w-12 h-12 bg-[#D7B459]/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-[#D7B459]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Business Hours
                    </h4>
                    <p className="text-gray-600">
                      Monday- Friday : 9:00 AM - 5:00 PM{" "}
                      <span className="text-sm text-gray-500">
                        UAE Time (GMT+4)
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <Input id="company" placeholder="Your Company Name" />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D7B459] focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="company-formation">Company Formation</option>
                      <option value="audit-tax">Audit & Tax</option>
                      <option value="investment-banking">Investment Banking</option>
                      <option value="capital-markets">Capital Markets</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Tell us about your business needs..." rows={4} />
                  </div>

                  <Button className="w-full bg-[#D7B459] hover:bg-[#D7B459]/90 text-white">Send Message</Button>
                </form>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
    </section>
  );
}
