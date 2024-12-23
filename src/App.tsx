import React from "react";
import { Gauge, Mail, MapPin, Phone } from "lucide-react";
import logo from "../src/assets/logo.jpg";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center min-h-screen">
        <div className="flex items-center gap-4 mb-12">
          <img
            src={logo}
            alt="Alok Fabrications Logo"
            className="w-12 h-12 rounded-xl object-contain"
          />
          <div className="flex items-center gap-4">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br outline-text tracking-wide">
              ALOK FABRICATIONS
            </h1>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold mb-6">
            We’re Upgrading to Serve You Better!
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            At Alok Fabrications, we’re always evolving—and so is our website!
            We’re designing a sleek new look and a smoother experience, all
            aimed at bringing you closer to our 45+ years of innovation and
            trust. <br />
            Stay tuned!
          </p>

          {/* <div className="mb-16 flex justify-center">
            <NewsletterForm />
          </div> */}

          <div className="grid md:grid-cols-3 mx-auto gap-8 text-left">
            <div className="flex items-start gap-3">
              <MapPin className="text-blue-400 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-gray-300">
                  W-124, S Block, MIDC, Bhosari, Pune 411026
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="text-blue-400 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <a
                  href="tel:+919822048785"
                  className="text-gray-300 hover:text-blue-400"
                >
                  +91 9822048785
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="text-blue-400 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a
                  href="mailto:bb@alokfab.in"
                  className="text-gray-300 hover:text-blue-400"
                >
                  bb@alokfab.in
                </a>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-auto text-center text-gray-400">
          <p>&copy; 2024 Alok Fabrications. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
