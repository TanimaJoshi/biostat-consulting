import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dr. Milan Mangeshkar
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
            Expert Biostatistics Consulting
          </h2>
          <div className="mb-8">
            <Image
              src="/biostat-consulting/profile.jpg"
              alt="Dr. Milan Mangeshkar"
              width={200}
              height={200}
              className="rounded-full mx-auto"
            />
          </div>
          <p className="text-xl text-gray-600 mb-8">
            Specializing in clinical trials, data analysis, and regulatory submissions
            with over 20 years of experience.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Clinical Trial Design</h3>
              <p className="text-gray-600">
                Expert guidance in study design, sample size calculation, and protocol development.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Statistical Analysis</h3>
              <p className="text-gray-600">
                Comprehensive data analysis using advanced statistical methods and tools.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">FDA Submissions</h3>
              <p className="text-gray-600">
                Support for regulatory submissions with statistical documentation and analysis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Consulting Services</h3>
              <p className="text-gray-600">
                Professional guidance on biostatistics, research methodology, and data interpretation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ready to discuss your project? Contact me for expert biostatistics consulting.
          </p>
          <a
            href="mailto:contact@example.com"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Now
          </a>
        </div>
      </section>
    </main>
  );
} 