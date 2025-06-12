# Thanush Kannan - AI Engineer Portfolio

A modern, responsive portfolio website showcasing AI engineering projects, achievements, and professional experience.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Interactive Gallery**: Categorized photo gallery with lightbox functionality
- **AI Chatbot**: Interactive AI assistant to answer questions about experience and projects
- **Skills Modal**: Comprehensive showcase of certificates, awards, and achievements
- **Contact Form**: Functional contact form with EmailJS integration
- **Smooth Animations**: Engaging animations and transitions throughout

## 📁 Project Structure

```
src/
├── components/
│   ├── About.tsx           # About section
│   ├── AIChatbot.tsx       # Interactive AI assistant
│   ├── BackgroundEffects.tsx # Animated background elements
│   ├── Contact.tsx         # Contact form and information
│   ├── Experience.tsx      # Professional experience timeline
│   ├── Gallery.tsx         # Photo gallery with categories
│   ├── Hero.tsx           # Hero section with profile
│   ├── Navigation.tsx      # Navigation bar
│   ├── Projects.tsx        # Project showcase
│   ├── SkillsModal.tsx     # Skills and achievements modal
│   └── TypingSection.tsx   # Animated typing text
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
└── index.css              # Global styles and animations
```

## 🖼️ Images Setup

All images are stored in the `public/images/` directory. Replace the placeholder images with your actual photos:

### Required Images:

**Profile & Experience:**
- `profile.jpg` - Main profile photo
- `gcloud-logo.jpg` - G Cloud Networks logo
- `igen-logo.jpg` - IGEN organization logo
- `iei-logo.jpg` - Institution of Engineers India logo

**Gallery Images:**
- `internship-ceremony.jpg` - Internship completion ceremony
- `internship-team.jpg` - Team photo during internship
- `green-leader-completion.jpg` - Green Leader Academy completion
- `robotz-volunteer.jpg` - ROBOTZINDIA volunteering
- `google-cloud-completion.jpg` - Google Cloud Study Jam
- `devfest-2023.jpg` - DevFest 2023 participation
- `ai-safety-presentation.jpg` - AI safety framework presentation
- `ensav-induction.jpg` - ENSAV club induction
- `sdg4mgr-campaign.jpg` - SDG4MGR campaign participation
- `energathon-winners.jpg` - ENERGATHON winners ceremony
- `g20-youth-speaker.jpg` - G20 Youth Speaker recognition
- `youth-peace-building.jpg` - Youth and Peace Building training
- `best-paper-award.jpg` - Best Paper Award ceremony
- `sustained2024-presentation.jpg` - SUSTAINED2024 presentation

**Certificates & Awards:**
- `ibm-python-cert.jpg` - IBM Python certification
- `ibm-java-cert.jpg` - IBM Java certification
- `ibm-bigdata-cert.jpg` - IBM Big Data certification
- `ibm-bi-cert.jpg` - IBM Business Intelligence certification
- `azure-cert.jpg` - Microsoft Azure certification
- `csc-diploma.jpg` - CSC Honours Diploma
- `youth-peace-cert.jpg` - Youth and Peace Building certificate
- `green-leader-cert.jpg` - Green Leader certification
- `hindi-pandit-cert.jpg` - Hindi Pandit certification
- `igen-best-volunteer.jpg` - IGEN Best Volunteer award
- `leadership-award.jpg` - Outstanding Leadership award
- `patent-award.jpg` - Patent award
- `green-volunteer-award.jpg` - Green Volunteer Award 2024
- `patent-document.jpg` - Patent document
- `ieee-publication1.jpg` - IEEE publication 1
- `ieee-publication2.jpg` - IEEE publication 2

**Internships:**
- `first-internship.jpg` - First internship certificate
- `teachnook-internship.jpg` - Teachnook internship certificate
- `gcloud-internship.jpg` - G Cloud Networks internship certificate

## 🛠️ Technologies Used

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **EmailJS** for contact form
- **Vite** for build tooling

## 📧 Contact Form Setup

To enable the contact form, you'll need to set up EmailJS:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Add your credentials to environment variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Replace placeholder images:**
   - Add your actual photos to `public/images/`
   - Ensure filenames match the ones referenced in components

3. **Set up environment variables:**
   - Create `.env` file with EmailJS credentials

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## ✨ Key Features

- **AI Chatbot**: Interactive assistant with portfolio knowledge
- **Gallery Lightbox**: Full-screen image viewing with navigation
- **Smooth Scrolling**: Seamless navigation between sections
- **Loading States**: Elegant loading animations
- **Error Handling**: Graceful fallbacks for missing images
- **Performance Optimized**: Lazy loading and optimized animations

## 📄 Resume

The resume download link points to a Google Drive file. Update the link in `src/components/Contact.tsx` with your actual resume URL.

## 🎨 Customization

- **Colors**: Modify the gradient colors in Tailwind classes
- **Animations**: Adjust animation durations in `src/index.css`
- **Content**: Update text content in respective component files
- **Layout**: Modify component layouts as needed

## 📞 Support

For any questions or issues, please refer to the contact information in the portfolio or create an issue in the repository.