import React, { useState, useEffect } from 'react';
import './styles/App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState('light');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // 模拟内容加载
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  // 添加这个 effect 来处理主题切换
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  if (isLoading) {
    return (
      <div className="loading">
        <div className="loader"></div>
      </div>
    );
  }

  const introduction = {
    title: "Introduction",
    description: `Welcome to my portfolio showcasing innovative AI-powered applications that enhance daily interactions and productivity. My work focuses on combining artificial intelligence with user-centered design to create meaningful experiences.

Featured projects include mobile applications for social exploration and real-world engagement, alongside a web-based platform for intelligent note-taking and learning enhancement. Each project demonstrates my commitment to leveraging cutting-edge technologies like OpenAI, real-time processing, and cloud services to solve practical challenges.

Through these projects, I've developed expertise in both mobile (Flutter) and web (Next.js) development, with a strong focus on AI integration and scalable cloud architecture.`
  };

  const projects = [
    {
      id: 1,
      title: "AI Exploration Companion",
      video: "/videos/app1-demo.mp4",
      description: `Our app enhances real-world exploration through AI-driven features and gamification.

Key Features:
• Personalized User Experience
- Daily Goal Setting
- Character Customization
- Notification System

• Interactive Exploration
- Real-World Map Integration
- AI Animal Encounters
- Photo Album & Collections

• Progress & Social
- Step Tracking
- Weekly Activity Reports
- Social Challenges

• Technical Implementation
- Flutter for cross-platform development
- Firebase for backend services
- Kotlin for Android-specific features

Tech Stack: Flutter, Firebase, Kotlin, AI`,
      type: 'mobile',
      techStack: ['Flutter', 'Firebase', 'Kotlin', 'AI']
    },
    {
      id: 2,
      title: "AI Social Explorer",
      video: "/videos/app2-demo.mp4",
      description: `An AI-powered social exploration app that encourages users to discover new places and engage in meaningful interactions.

Key Features:
• AI-Driven Exploration
- Personalized Travel Planning
- Smart Location Discovery
- AI Character Interactions
- Real-time Location Tracking

• Social Integration
- Interactive Social Tasks
- Meeting Records
- Journey Documentation
- Daily Activity Logs

• Technical Implementation
- OpenAI API Integration
- Google Places API
- Mapbox Navigation
- Real-time Location Services

Tech Stack: Flutter, OpenAI, Google Cloud, Mapbox`,
      type: 'mobile',
      techStack: ['Flutter', 'OpenAI', 'Google Cloud', 'Mapbox', 'Firebase']
    },
    {
      id: 3,
      title: "AI Meeting & Class Notes Assistant",
      video: "/videos/web-demo.mp4",
      description: `A powerful AI-driven note-taking platform that transforms meetings and lectures into structured notes through real-time transcription and intelligent processing.

Key Features:
• Real-time Transcription
- Live Speech-to-Text
- Auto Note Generation
- Manual Editing Options

• Smart Learning Tools
- Flashcard Generation
- Practice Questions
- Mind Map Creation

• Content Import Options
- Live Recording
- File Upload (PDF, Audio)
- YouTube Integration

• Technical Implementation
- Next.js & Redux for frontend
- Node.js & Express for backend
- PostgreSQL & MongoDB for storage
- AWS services for infrastructure

Tech Stack: Next.js, Node.js, PostgreSQL, OpenAI, AWS`,
      type: 'desktop',
      techStack: [
        'Next.js', 
        'Redux', 
        'Node.js', 
        'PostgreSQL', 
        'MongoDB',
        'OpenAI', 
        'AWS', 
        'WebRTC',
        'Tailwind CSS'
      ]
    }
  ];

  const projectDetails = {
    1: `App Introduction
Our app is designed to enhance real-world exploration through AI-driven features, interactive challenges, and engaging social experiences. By integrating gamified elements with real-world activities, users are encouraged to step outside, discover new places, and interact with virtual companions while tracking their progress.

Key Features

1. Personalized User Experience
• Daily Goal Setting: Users can set personalized daily goals to stay motivated and develop healthy habits
• Notification Reminders: Customizable alerts help users stay on track with their goals
• Character Customization: Users can create and personalize their avatars with various options

2. Interactive Exploration & Gamification
• Real-World Exploration: Unlock new areas on the in-app map through walking
• Map Drawing & Navigation: Manually draw maps to chart personal exploration paths
• Animal Encounters: Meet AI-generated animals and collect them
• Photo Album: Capture and collect memories from the journey

3. Progress Tracking & Social Features
• Step Tracking: Weekly activity reports to encourage consistency
• Sticker Collection: Collect animal stickers as digital souvenirs
• Social Challenges: Interactive tasks to engage with the environment

4. Rewards System
• In-App Currency (Lightning): Earn through exploration
• Virtual Shop: Purchase character customization items
• Special Effects: Unlock visual effects like fireworks

Technical Implementation
• Flutter for cross-platform development
• Firebase for backend services
• Kotlin for Android-specific features
• Custom AI models for animal generation`,

    2: `App Introduction
Our AI Social Explorer represents an innovative approach to social interaction and exploration, leveraging cutting-edge AI technologies to create meaningful connections and experiences. This application combines social networking with AI-driven discovery to encourage users to explore their surroundings and engage with their community in new ways.

Key Features

1. AI-Powered Discovery
• Smart Location Recommendations: Uses AI to suggest interesting nearby places
• Personalized Travel Planning: AI-generated itineraries based on user preferences
• Real-time Location Services: Accurate positioning and navigation

2. Social Integration
• Interactive Tasks: Location-based social challenges
• Meeting Documentation: Record and track social interactions
• Community Building: Connect with others through shared experiences

3. AI Companion System
• AI Character Interactions: Chat with AI-generated characters
• Emotional Support: AI companions provide encouragement and motivation
• Dynamic Conversations: Context-aware dialogue system

4. Progress Tracking
• Journey Documentation: Record visited places and completed activities
• Growth System: Virtual sapling that grows with user engagement
• Achievement System: Track and reward social interactions

Technical Implementation
• Flutter for cross-platform compatibility
• OpenAI API for intelligent interactions
• Google Places API for location services
• Mapbox for mapping and navigation
• Firebase for real-time updates`,

    3: `AI Meeting & Class Notes Assistant
A comprehensive AI-powered note-taking platform that transforms real-time speech into structured notes, enhancing learning and meeting efficiency through intelligent processing and interactive features.

Core Features

1. Real-time Speech Processing & Note Generation
• Intelligent Transcription
- Deepgram API for real-time speech recognition
- Multi-language support with high accuracy
- Automatic punctuation and formatting

• AI-Powered Note Structure
- OpenAI-driven content organization
- Key points extraction and highlighting
- Automatic summary generation
- Manual editing capabilities

2. Smart Learning Enhancement
• Interactive Study Tools
- AI-generated flashcards for quick review
- Custom practice questions (MCQ)
- Visual mind mapping
- Context-aware Q&A system

3. Versatile Content Import
• Multiple Input Methods
- Real-time microphone recording
- PDF document processing
- Audio file transcription
- YouTube video analysis

4. Note Management
• Organization Features
- Custom categorization system
- Smart tagging and search
- Auto-save functionality
- Export in multiple formats

5. Technical Architecture
• Frontend Development
- Next.js for server-side rendering
- Redux state management
- Tailwind CSS for responsive design
- WebRTC for audio streaming

• Backend Infrastructure
- Node.js/Express.js API
- PostgreSQL for user data
- MongoDB for note storage
- AWS S3 for media files

• AI Integration
- OpenAI GPT-4 for processing
- LangChain for AI workflows
- Custom prompt engineering
- Real-time processing pipeline

6. Security & Performance
• Data Protection
- End-to-end encryption
- Secure authentication (Auth0)
- Regular backups
- GDPR compliance

• Performance Optimization
- CDN distribution
- Caching strategies
- Rate limiting
- Load balancing`
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="content">
      <nav className="nav-bar">
        <div className="nav-links">
          <button onClick={() => scrollToSection('intro')}>Introduction</button>
          <button onClick={() => scrollToSection('mobile-apps')}>Mobile Apps</button>
          <button onClick={() => scrollToSection('web-projects')}>Web Projects</button>
        </div>
        <button 
          className="theme-toggle" 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? '☀️' : '🌙'}
        </button>
      </nav>
      
      <div className="introduction" id="intro">
        <h1>{introduction.title}</h1>
        <div className="personal-info">
            <div>Name: Yitian Wu</div>
            <div>Email: ywu13@scu.edu</div>
        </div>
        <p>{introduction.description}</p>
      </div>

      <div className="section" id="mobile-apps">
        <h2>Mobile Applications</h2>
        <div className="projects-container">
          <div className="project-item" style={{"--index": 0}}>
            <div className="video-container mobile">
              <video controls>
                <source src="/videos/app1-demo.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="project-description">
              <h2>AI Exploration Companion</h2>
              <div className="description-wrapper">
                <pre className="description-text">{projects[0].description}</pre>
              </div>
              <div className="tech-stack">
                {projects[0].techStack.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <button 
                className="detail-btn"
                onClick={() => setSelectedProject(1)}
              >
                View Details
              </button>
            </div>
          </div>

          <div className="project-item" style={{"--index": 1}}>
            <div className="video-container mobile">
              <video controls>
                <source src="/videos/app2-demo.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="project-description">
              <h2>AI Social Explorer</h2>
              <div className="description-wrapper">
                <pre className="description-text">{projects[1].description}</pre>
              </div>
              <div className="tech-stack">
                {projects[1].techStack.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <button 
                className="detail-btn"
                onClick={() => setSelectedProject(2)}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="section" id="web-projects">
        <h2>Web Projects</h2>
        <div className="projects-container">
          {projects.slice(2).map((project, index) => (
            <div 
              key={project.id} 
              className="project-item"
              style={{"--index": index + 2}}
            >
              <div className={`video-container ${project.type}`}>
                <video controls>
                  <source src={project.video} type="video/mp4" />
                </video>
              </div>
              <div className="project-description">
                <h2>{project.title}</h2>
                <pre className="description-text">{project.description}</pre>
                <div className="tech-stack">
                  {project.techStack?.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                {projectDetails[project.id] && (
                  <button 
                    className="detail-btn"
                    onClick={() => setSelectedProject(project.id)}
                  >
                    View Details
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>
            <pre className="modal-text">
              {projectDetails[selectedProject]}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;