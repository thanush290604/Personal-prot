import React, { useState } from 'react';
import { X, Trophy, Award, FileText, Lightbulb, Briefcase } from 'lucide-react';

interface SkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SkillsModal: React.FC<SkillsModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('certificates');

  const tabs = [
    { id: 'certificates', label: 'Certificates', icon: Trophy },
    { id: 'awards', label: 'Awards', icon: Award },
    { id: 'internships', label: 'Internships', icon: Briefcase },
    { id: 'patents', label: 'Patents', icon: Lightbulb },
    { id: 'publications', label: 'Publications', icon: FileText }
  ];

  const content = {
    certificates: [
      {
        title: "IBM Certified Professional - Python",
        description: "Certified in Python programming through IBM SkillsBuild platform",
        image: "https://drive.google.com/uc?export=view&id=1YLO0oQxuIDOwSJGl1ZcQIEtvZTePP18m"
      },
      {
        title: "IBM Certified Professional - Java",
        description: "Certified in Java programming through IBM SkillsBuild platform",
        image: "https://drive.google.com/uc?export=view&id=1zpTT6FveGVPnIwqWv83XzE-mMXSu2Z8e"
      },
      {
        title: "IBM Certified Professional - Big Data",
        description: "Certified in Big Data technologies through IBM SkillsBuild platform",
        image: "https://drive.google.com/uc?export=view&id=1wXnQs9i0tc2QI5PVWywBgeTtzxUqLf2c"
      },
      {
        title: "IBM Certified Professional - Business Intelligence",
        description: "Certified in Business Intelligence through IBM SkillsBuild platform",
        image: "https://drive.google.com/uc?export=view&id=1-IYwki8d8pEO0S7LmDWJDci_BxWIMvya"
      },
      {
        title: "Microsoft Azure Fundamentals",
        description: "Microsoft Certified: Azure Fundamentals (2023) - Cloud computing and Azure services",
        image: "https://drive.google.com/uc?export=view&id=1VGDVyHxUFUrt3BCKL1Y1kaiV3PmwfiA3"
      },
      {
        title: "CSC Honours Diploma",
        description: "Computer Application Diploma completed from Aug 2018 to Aug 2019",
        image: "https://drive.google.com/uc?export=view&id=1jO6K3zFtyOgWxuFxR6RWcuTmRTUWAcG2"
      },
      {
        title: "Youth and Peace Building Certification",
        description: "Completed training for Community Leaders by URI South India (Kerala, 2024)",
        image: "https://drive.google.com/uc?export=view&id=1wpnWjRUCCXrL3SzkS1699qhbl-LBvdeh"
      },
      {
        title: "Green Leader Certification",
        description: "Certified Green Leader - Completed 10 Billion Green Leader Academy Course",
        image: "https://drive.google.com/uc?export=view&id=12uC-ytwkhDr7XIpY0iEK932hxBBT93Mx"
      },
      {
        title: "Hindi Proficiency - Pandit Level",
        description: "Certified Pandit in Hindi - Passed all 9 levels of Hindi proficiency exams",
        image: "https://drive.google.com/uc?export=view&id=1JUYM0CUSAmBakLQLa8sScOqUQq09xA5n"
      }
    ],
    awards: [
      {
        title: "IGEN Best Volunteer & Achievement Certificate",
        description: "MGR IGEN ENSAVCLUB - Recognized for exceptional volunteer work and achievements",
        image: "https://drive.google.com/uc?export=view&id=1x0LH8F0nBqGXZUTI38AuTzzsYRhshMzp"
      },
      {
        title: "Outstanding Leadership Award",
        description: "IGEN Annual Day 2023 - Acknowledged for exceptional leadership in sustainability projects",
        image: "https://drive.google.com/uc?export=view&id=1Q-C5FLs0kK98t9GBPCzWVKbEi5pNUYGo"
      },
      {
        title: "Patent Award",
        description: "Granted for 'AI Integrated Community Safety Gadgets' by Dr. MGR Educational and Research Institute",
        image: "https://drive.google.com/uc?export=view&id=1nLTj_Ik6luBsmscA_b8ffm17E5bbtU1v"
      },
      {
        title: "Best Event Organized Award",
        description: "Awarded by Dr. MGR Educational and Research Institute for exceptional event organization",
        image: "https://drive.google.com/uc?export=view&id=1M1qmVU17EUm6SwSYlNT6cU3OBFwim7xu"
      },
      {
        title: "Green Volunteer Award 2024",
        description: "Presented by TN Environment Minister at IGEN event for environmental contributions",
        image: "https://drive.google.com/uc?export=view&id=1SGTz_R17zL7hA1id0UTdNR8NGtZkFvi7"
      },
      {
        title: "G20 Youth Speaker Recognition",
        description: "IGEN COP YOUTH 2030 - Recognized as youth speaker for climate action initiatives",
        image: "https://drive.google.com/uc?export=view&id=1uCYk1MePwQr4I1Snznf20AZCS8osnqHg"
      },
      {
        title: "NPC Student Appreciation Award",
        description: "Awarded for academic excellence and innovation in AI and technology projects",
        image: "https://drive.google.com/uc?export=view&id=1YbNOgXRc41kjEwUXsqSYOz2Fj6p0zYdL"
      }
    ],
    internships: [
      {
        title: "First Internship at College MGR Office",
        description: "Joint Secretary of MGR IGEN ENSAV CLUB (August 2022) - Office Barriers internship",
        image: "https://drive.google.com/uc?export=view&id=1YzFrcdgF_PCj-Q9ge1nXlD-DkoqYEhj1"
      },
      {
        title: "Teachnook Internship Completion",
        description: "AI Project Completed - Internship completion certificate from Teachnook",
        image: "https://drive.google.com/uc?export=view&id=1ToRoCIqoTdKPg3xCdH1Rpa-KAT49ODHR"
      },
      {
        title: "G Cloud Networks Internship",
        description: "Intern at G Cloud Networks - Contributed to video editing, poster design, and website development",
        image: "https://drive.google.com/uc?export=view&id=18R5gRQ69xhZClba0-ZP5OZ51Hies2yE0"
      }
    ],
    patents: [
      {
        title: "AI Integrated Community Safety Gadgets",
        description: "Patent Granted (Application No: 202441007573) by Dr. MGR Educational and Research Institute. Final product development completed for AI-driven community safety system with IoT integration.",
        image: "https://drive.google.com/uc?export=view&id=1rWborv-obPfR757KgCqgJhv5w3zjWZhM"
      }
    ],
    publications: [
      {
        title: "AI-Integrated Community Safety Solutions for Smart Cities",
        description: "K. Thanush, R. Santhosh, et al. 'A Study Towards SDG 11', IEEE, presented and published at SUSTAINED2024. Paper ID: 435, eCF Paper ID: 838746.",
        image: "https://drive.google.com/uc?export=view&id=19WT3hkOXGHxBuNHhe2F6f3zYAobh03-j"
      },
      {
        title: "AI-Driven Smart Safety Framework for Community Protection",
        description: "K. Thanush, R. Santhosh, A. Pious Niranjan, et al. 'AI-Driven Smart Safety Framework for Community Protection', IEEE, Best Paper Award at ICDSBS 2025, SRM Institute. Paper ID: 2490.",
        image: "https://drive.google.com/uc?export=view&id=1daKtrGDQNUoL1WwtgsktmZpyrmb_LPrG"
      }
    ]
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-7xl max-h-[90vh] bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl border border-cyan-400/30 rounded-2xl overflow-hidden animate-fade-in-up">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Achievements
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
          >
            <X size={24} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 p-6 border-b border-white/10">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <IconComponent size={20} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-96">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content[activeTab as keyof typeof content].map((item, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMUExQTFBIi8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjEwMCIgcj0iMzAiIGZpbGw9IiMwNkI2RDQiLz4KPHRleHQgeD0iMTUwIiB5PSIxNDAiIGZpbGw9IiMwNkI2RDQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiPkltYWdlIFBsYWNlaG9sZGVyPC90ZXh0Pgo8L3N2Zz4K';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsModal;