import Image from 'next/image';
import { FaGraduationCap } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Dr. Milan Mangeshkar</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="relative w-64 h-64 mx-auto md:mx-0">
                <Image
                  src="/biostat-consulting/profile.jpg"
                  alt="Dr. Milan Mangeshkar"
                  width={300}
                  height={300}
                  className="rounded-full shadow-lg"
                  priority
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                  <FaGraduationCap className="w-8 h-8" />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <FaGraduationCap className="w-5 h-5 mr-2 text-blue-600" />
                  Education
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaGraduationCap className="w-5 h-5 mr-2 mt-1 text-blue-600" />
                    <span>Ph.D. in Statistics in Time Series Analysis, Virginia Tech, Blacksburg, VA, February 1995.</span>
                  </li>
                  <li className="flex items-start">
                    <FaGraduationCap className="w-5 h-5 mr-2 mt-1 text-blue-600" />
                    <span>M.S. in Statistics, University of Bombay, India, May 1986.</span>
                  </li>
                  <li className="flex items-start">
                    <FaGraduationCap className="w-5 h-5 mr-2 mt-1 text-blue-600" />
                    <span>B.S. in Statistics, University of Bombay, India, May 1984.</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-600">
                With over 20 years of experience in biostatistics, I specialize in clinical trials, data analysis, and regulatory submissions. My expertise helps researchers and organizations make data-driven decisions and achieve successful outcomes in their clinical studies.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Areas of Expertise</h3>
                <ul className="grid grid-cols-2 gap-4">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Clinical Trials</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Statistical Analysis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Data Management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>FDA Submissions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 