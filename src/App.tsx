import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "../src/assets/logo.png";

function App() {
  return (
    <div className="min-h-screen pb-4 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white flex flex-col">
      <div className="container flex-1 mx-auto px-4 pt-16 flex flex-col items-center">
        <div className="flex items-center gap-4 mb-12">
          <img
            src={logo}
            alt="Alok Fabrications Logo"
            className="sm:w-28 w-24 h-24 sm:h-28 rounded-xl object-contain"
          />
          <div className="flex items-center gap-4">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br outline-text tracking-wide">
              ALOK FABRICATIONS
            </h1>
          </div>
        </div>

        <div className="flex-grow text-center max-w-3xl flex items-center flex-col mb-12 justify-center">
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

          <div className="flex flex-row flex-wrap justify-between items-center gap-8 text-left">
            <div className="flex mx-auto w-[100%] sm:w-[30%] items-start gap-3">
              <MapPin className="text-blue-400 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-gray-300 ">
                  W-124, S Block, MIDC, Bhosari, Pune 411026
                </p>
              </div>
            </div>
            <div className="flex w-[100%] sm:w-[30%]  items-start gap-3">
              <Phone className="text-blue-400 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <a
                  href="tel:+919822048785"
                  className="text-gray-300 hover:text-blue-400">
                  +91 9822048785
                </a>
              </div>
            </div>
            <div className="flex w-[100%] sm:w-[30%]  items-start gap-3">
              <Mail className="text-blue-400 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a
                  href="mailto:bb@alokfab.in"
                  className="text-gray-300  hover:text-blue-400">
                  bb@alokfab.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-auto text-center text-gray-400">
        <p>&copy; 2024 Alok Fabrications. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
