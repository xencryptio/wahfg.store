"use client";

import { useEffect } from "react";
import { Linkedin } from "lucide-react";

export function Authors() {
  const authors = [
    {
      name: "Srinivasarao Kotipalli",
      title: "Author",
      description:
        "Cybersecurity professional with over a decade of experience in offensive security, cybersecurity architecture, and developing enterprise-grade security solutions. He has held roles at multiple major financial institutions, where he led large scale product security initiatives. Expertise spans the full lifecycle of cybersecurity solution development, from defining security requirements and threat modeling to architecting and implementing robust security platforms. He holds OSCP and OSCE certifications, is an active trainer and speaker at Black Hat and DEF CON, and previously authored Hacking Android.",
      linkedin: "https://www.linkedin.com/in/srini0x00",
    },
  ];

  const coAuthors = [
    {
      name: "Nipun Negi",
      title: "Co-Author",
      description:
        "Cybersecurity professional with strong background in computer science and growing specialization in security research. Expertise includes web security, cryptography, software development, and cloud technologies. Practical experience spans security architecture, endpoint protection, and enterprise defense strategies. Work encompasses adversary emulation, red teaming, malware analysis, and automation. Actively contributes to the cybersecurity community through research and technical writing.",
      linkedin: "https://www.linkedin.com/in/nipunnegi",
    },
    {
      name: "Sai Kumar Kolli",
      title: "Co-Author",
      description:
        "Holds Bachelor of Technology degree in Information Technology from Velagapudi Ramakrishna Siddhartha Engineering College, Vijayawada, India. Expertise encompasses cybersecurity, network security, and remote sensing, blending analytical rigor with practical application. Contributed to projects involving multimodal remote sensing image fusion, vulnerability assessment, and automated security scanning. Committed to continuous learning and actively engages in workshops on generative AI, geospatial analysis, and emerging technologies.",
      linkedin: "https://www.linkedin.com/in/sai-kumar-kolli-aba74b218",
    },
  ];

  const reviewers = [
    {
      name: "Harshavardhan Murapakala",
      title: "Reviewer",
      description:
        "Software Engineer with over five years of specialized experience in enterprise software security and large-scale application development. Expertise lies in designing and optimizing high-performance systems with strong emphasis on security, reliability, and scalability. Extensive experience implementing security controls, endpoint protection mechanisms, and secure coding practices. Background combines deep understanding of software architecture and security engineering with practical experience in building robust, high-performance systems.",
      linkedin: "https://www.linkedin.com/in/harshamurapakala/",
    },
    {
      name: "Abhijeth Dugginapeddi",
      title: "Reviewer",
      description:
        "Cybersecurity leader with over 15 years of experience across Australia, India, and the United States. Led Offensive Security, Cloud Security, Incident Response, and Product Security programs, helping organizations strengthen their security posture through practical, scalable strategies. Identified vulnerabilities in major technology companies including Google and Meta. Frequent international speaker with hundreds of presentations in more than 10 countries including Black Hat and DEF CON. Serves as Technical Advisor for Cyber Security Startup and Course Advisor at University of New South Wales, focusing on SecurebyDesign principles and Threat Modeling.",
      linkedin: "https://www.linkedin.com/in/abhijeth",
    },
  ];

  return (
    <section className="pt-8 pb-6 md:pt-10 md:pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 via-gray-50 to-white">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
            Meet the Team
          </h2>
        </div>

        {/* Author */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Author & Editor-in-Chief</h3>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {authors.map((author) => (
              <div
                key={author.name}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 shadow-2xl hover:shadow-gray-800/50 transition-all duration-300 hover:scale-[1.01] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gray-600/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gray-500/20 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <h4 className="text-2xl font-bold mb-1 text-white">{author.name}</h4>
                  <p className="text-sm text-gray-400 mb-4 font-semibold uppercase tracking-wider">
                    {author.title}
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {author.description}
                  </p>

                  <a
                    href={author.linkedin}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-gray-300 font-semibold hover:text-white transition-colors group/link"
                  >
                    <Linkedin className="w-5 h-5 group-hover/link:text-blue-400 transition-colors" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Co-Authors */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Co-Authors</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coAuthors.map((author) => (
              <div
                key={author.name}
                className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-200/50 rounded-full blur-2xl"></div>

                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-1 text-gray-900">{author.name}</h4>
                  <p className="text-sm text-gray-500 mb-4 font-semibold uppercase tracking-wider">
                    {author.title}
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6 text-sm">{author.description}</p>

                  <a
                    href={author.linkedin}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-gray-700 font-semibold hover:text-gray-900 transition-colors group/link"
                  >
                    <Linkedin className="w-5 h-5 group-hover/link:text-blue-600 transition-colors" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviewers */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Reviewers</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviewers.map((reviewer) => (
              <div
                key={reviewer.name}
                className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-200/50 rounded-full blur-2xl"></div>

                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-1 text-gray-900">{reviewer.name}</h4>
                  <p className="text-sm text-gray-500 mb-4 font-semibold uppercase tracking-wider">
                    {reviewer.title}
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6 text-sm">{reviewer.description}</p>

                  <a
                    href={reviewer.linkedin}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-gray-700 font-semibold hover:text-gray-900 transition-colors group/link"
                  >
                    <Linkedin className="w-5 h-5 group-hover/link:text-blue-600 transition-colors" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
