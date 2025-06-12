import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Award, Calendar, MapPin } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'presentation', label: 'Presentation Photos' },
    { id: 'igen', label: 'IGEN' },
    { id: 'iei', label: 'IEI' },
    { id: 'mgr', label: 'Dr. M.G.R. Educational And Research Institute' }
  ];

  const galleryItems = [
    // Dr. M.G.R. Educational And Research Institute
    {
      id: 1,
      src: "https://drive.google.com/uc?export=view&id=1mwCPm_QPxqNoz-CX4YbxqWhqxQghum3V",
      title: "Internship Completion Certificate Ceremony",
      category: "mgr",
      date: "2024",
      location: "Dr. M.G.R. Educational And Research Institute",
      description: "Internship completion certificate received by college president A.C.S. Arun Kumar sir to me and my teammates."
    },
    {
      id: 2,
      src: "https://drive.google.com/uc?export=view&id=1w6cTco-yyMfHO9C8Qb4ZigQnDs6no1Kj",
      title: "Internship Team Group Photo",
      category: "mgr",
      date: "2024",
      location: "Dr. M.G.R. Educational And Research Institute",
      description: "Group photo with teammates during internship completion ceremony."
    },
    {
      id: 3,
      src: "https://drive.google.com/uc?export=view&id=1IG-y8ZyBhV9RGHlYUdQvUdYzDY_Jqc2v",
      title: "10 Billion Green Leader Academy Course Completion",
      category: "mgr",
      date: "2024",
      location: "Dr. M.G.R. Educational And Research Institute",
      description: "Completing the 10 Billion Green Leader Academy Course, alongside our esteemed President and DS&AI HODs."
    },
    {
      id: 4,
      src: "https://drive.google.com/uc?export=view&id=1TID-l-ajZFOD3kWxbQhI_wbck-DU9hVp",
      title: "Green Leader Academy - Group Photo 1",
      category: "mgr",
      date: "2024",
      location: "Dr. M.G.R. Educational And Research Institute",
      description: "Group photo during Green Leader Academy course completion ceremony."
    },
    {
      id: 5,
      src: "https://drive.google.com/uc?export=view&id=1uJp-REFXG3kvA5WymL4DiyGMA6ktqy2I",
      title: "Green Leader Academy - Group Photo 2",
      category: "mgr",
      date: "2024",
      location: "Dr. M.G.R. Educational And Research Institute",
      description: "Another group photo from the Green Leader Academy course completion."
    },
    {
      id: 6,
      src: "https://drive.google.com/uc?export=view&id=1flDYE0KiQxrzjpIM1Niu4Q648JraZMEc",
      title: "ROBOTZINDIA.in V9.0 Volunteer",
      category: "mgr",
      date: "2024",
      location: "Anna University Chennai",
      description: "Volunteered at ROBOTZINDIA.in V9.0 - a NATIONAL LEVEL ROBOTICS EVENT organized by Robotics and Artificial Intelligence Foundation."
    },
    {
      id: 7,
      src: "https://drive.google.com/uc?export=view&id=1urB5wSBOxTYWtMBWq_s7iqrP4DBOq3b9",
      title: "ROBOTZINDIA.in V9.0 - Team Photo",
      category: "mgr",
      date: "2024",
      location: "Anna University Chennai",
      description: "Team photo during ROBOTZINDIA.in V9.0 robotics event volunteering."
    },
    {
      id: 8,
      src: "https://drive.google.com/uc?export=view&id=1tLFIc0Sc_vA2AsaFN4lDXeLHEPcthPHd",
      title: "Google Cloud Study Jam Completion",
      category: "mgr",
      date: "2024",
      location: "Google Developer Student Clubs (DRMGRERI)",
      description: "Completed the Google Cloud Study Jam and received Swag and Skill Badges from Google as a GDSC member."
    },
    {
      id: 9,
      src: "https://drive.google.com/uc?export=view&id=1293MlkpZks907muPOjCx3UUA5mQ6SZ3O",
      title: "Google Cloud Study Jam - Certificate",
      category: "mgr",
      date: "2024",
      location: "Google Developer Student Clubs (DRMGRERI)",
      description: "Certificate and swag received from Google Cloud Study Jam completion."
    },
    {
      id: 10,
      src: "https://drive.google.com/uc?export=view&id=15knVrp28L1ckYwLj80KXiFOzKWOAIVlV",
      title: "DevFest 2023 at IIT Madras",
      category: "mgr",
      date: "2023",
      location: "IIT Madras Research Park",
      description: "Attended DevFest 2023 organized by Google Developer Groups Chennai and earned a participation certificate."
    },
    {
      id: 11,
      src: "https://drive.google.com/uc?export=view&id=1CfXe81HC6qPyM9_jPfEW8ytIOXRXQRwq",
      title: "AI-Driven Smart Safety Framework Presentation",
      category: "mgr",
      date: "2024",
      location: "Dr. M.G.R. Educational And Research Institute",
      description: "AI-Driven Smart Safety Framework for Community Protection prototype presentation with college president."
    },
    {
      id: 12,
      src: "https://drive.google.com/uc?export=view&id=1XI01mzsQFBZdGY8LiIlQaRcVZw8dxiUv",
      title: "AI Safety Framework - Group Photo",
      category: "mgr",
      date: "2024",
      location: "Dr. M.G.R. Educational And Research Institute",
      description: "Group photo during AI-Driven Smart Safety Framework prototype presentation."
    },

    // IGEN Category
    {
      id: 13,
      src: "https://drive.google.com/uc?export=view&id=1XEIc_DFR2ZW3NJphp2Wjq9LES0YNGTTD",
      title: "ENSAV CLUB Induction Program",
      category: "igen",
      date: "2022",
      location: "Dr. M.G.R. Educational And Research Institute",
      description: "MGR IGEN ENSAV CLUB induction program with keynote speaker Er.Yuvaraj Moorthy from GreeNext (Schneider Electric)."
    },
    {
      id: 14,
      src: "https://drive.google.com/uc?export=view&id=11kSffLmHGo79g0CFXX50oPfvR9eJcRqI",
      title: "ENSAV CLUB Induction - Group Photo",
      category: "igen",
      date: "2022",
      location: "Dr. M.G.R. Educational And Research Institute",
      description: "Group photo from the ENSAV CLUB induction program and swearing-in ceremony."
    },
    {
      id: 15,
      src: "https://drive.google.com/uc?export=view&id=16baRCJpvy7iYCu4RAdHkOpP5bbcTpKxu",
      title: "SDG4MGR Campaign Participation",
      category: "igen",
      date: "2023",
      location: "Dr. M.G.R. Educational And Research Institute",
      description: "Honored to be part of the SDG4MGR campaign, raising SDGs awareness among 25k students in MGR ERI campuses."
    },
    {
      id: 16,
      src: "https://drive.google.com/uc?export=view&id=1-FTZjqyyjM3PQ304oapChdE9W_vk0m0v",
      title: "SDG4MGR Campaign - Individual Photo",
      category: "igen",
      date: "2023",
      location: "Dr. M.G.R. Educational And Research Institute",
      description: "Individual photo from SDG4MGR campaign participation, pledging to act for SDGs."
    },
    {
      id: 17,
      src: "https://drive.google.com/uc?export=view&id=1Vs8Cc9HsVwNA3fMQsaacne6tlKNPZQ7j",
      title: "SDG4MGR Campaign - Group Photo",
      category: "igen",
      date: "2023",
      location: "Dr. M.G.R. Educational And Research Institute",
      description: "Group photo from SDG4MGR campaign, motivating fellow friends to begin SDG-aligned projects."
    },
    {
      id: 18,
      src: "https://drive.google.com/uc?export=view&id=1-4OC95cAs0Jc_RhBSZRZFxZC_5m10WvW",
      title: "IGEN ENERGATHON 2023 Winners Valedictory",
      category: "igen",
      date: "2023",
      location: "Dr. M.G.R. Educational And Research Institute",
      description: "Celebrated Winners Valedictory of IGEN ENERGATHON 2023 conducted in seminar hall."
    },
    {
      id: 19,
      src: "https://drive.google.com/uc?export=view&id=1O1sEbXI0zJaDLzAN3A4v3rRlgPus_jm0",
      title: "G20 Youth Speaker Recognition",
      category: "igen",
      date: "2023",
      location: "IGEN COP YOUTH 2030",
      description: "G20 Youth Speaker Recognition at IGEN COP YOUTH 2030 for climate action initiatives."
    },
    {
      id: 20,
      src: "https://drive.google.com/uc?export=view&id=1BHRWf-psDQEnJm3ZSTDvKAcWZLdjt5b-",
      title: "G20 Youth Speaker - Group Photo",
      category: "igen",
      date: "2023",
      location: "IGEN COP YOUTH 2030",
      description: "Group photo from G20 Youth Speaker Recognition ceremony."
    },
    {
      id: 21,
      src: "https://drive.google.com/uc?export=view&id=1_f1U3vM7ruUWsfIKVoMbxSimfyLMShm2",
      title: "Youth and Peace Building Training",
      category: "igen",
      date: "2024",
      location: "Mar Thoma Youth Centre, Adoor, Kerala",
      description: "Training on Youth and Peace Building for Community Leaders hosted by URI South India Region."
    },

    // Presentation Photos
    {
      id: 22,
      src: "https://drive.google.com/uc?export=view&id=1S_M0g2Yl51N3ldJyHsE_5FldETtjaeHg",
      title: "Best Paper Award - ICDSBS 2025",
      category: "presentation",
      date: "2025",
      location: "SRM Institute",
      description: "AI-Driven Smart Safety Framework for Community Protection - Best Paper Award at ICDSBS 2025."
    },
    {
      id: 23,
      src: "https://drive.google.com/uc?export=view&id=1JO8AxBn3AzfTZzDn6sW85jEI0uVme2-h",
      title: "SUSTAINED2024 Conference Presentation",
      category: "presentation",
      date: "2024",
      location: "SUSTAINED2024 Conference",
      description: "AI-Integrated Community Safety Solutions for Smart Cities presentation at SUSTAINED2024."
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = selectedImage;
    const maxIndex = filteredItems.length - 1;
    
    if (direction === 'prev') {
      setSelectedImage(currentIndex > 0 ? currentIndex - 1 : maxIndex);
    } else {
      setSelectedImage(currentIndex < maxIndex ? currentIndex + 1 : 0);
    }
  };

  return (
    <section id="gallery" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full animate-grid-move"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-6xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A visual journey through my achievements, events, and memorable moments in AI and technology
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animation-delay-200">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10 hover:border-cyan-400/30'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in-up animation-delay-400">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/30 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDMwMCAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjU2IiBmaWxsPSIjMUExQTFBIi8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjEyOCIgcj0iNDAiIGZpbGw9IiMwNkI2RDQiLz4KPHRleHQgeD0iMTUwIiB5PSIxODAiIGZpbGw9IiMwNkI2RDQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiPkdhbGxlcnkgSW1hZ2U8L3RleHQ+Cjwvc3ZnPgo=';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-cyan-400/20 backdrop-blur-sm text-cyan-400 rounded-full text-xs font-medium border border-cyan-400/30">
                  {categories.find(cat => cat.id === item.category)?.label}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <Award className="text-white" size={24} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                  {item.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span className="truncate">{item.location}</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative max-w-6xl max-h-[90vh] w-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 backdrop-blur-sm text-white rounded-full hover:bg-black/70 transition-colors duration-200"
              >
                <X size={24} />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 backdrop-blur-sm text-white rounded-full hover:bg-black/70 transition-colors duration-200"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 backdrop-blur-sm text-white rounded-full hover:bg-black/70 transition-colors duration-200"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image */}
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden">
                <img
                  src={filteredItems[selectedImage].src}
                  alt={filteredItems[selectedImage].title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                
                {/* Image Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {filteredItems[selectedImage].title}
                  </h3>
                  <div className="flex items-center gap-6 text-gray-300 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{filteredItems[selectedImage].date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{filteredItems[selectedImage].location}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {filteredItems[selectedImage].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/6 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
      </div>
    </section>
  );
};

export default Gallery;