import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const speak = (text) => {
      const synth = window.speechSynthesis;
      const utter = new SpeechSynthesisUtterance(text);
      utter.rate = 1.05;
      utter.pitch = 1.2;
      utter.volume = 1;
      const voices = synth.getVoices();
      const maleVoice = voices.find(
        (v) =>
          (v.name.toLowerCase().includes("male") ||
            v.name.toLowerCase().includes("english")) &&
          v.lang.startsWith("en")
      );
      if (maleVoice) utter.voice = maleVoice;
      synth.speak(utter);
    };

    setTimeout(() => speak("Hello, I am VIORA, Vaibhav's AI Assistant."), 1500);
  }, []);

  return (
    <div className="App">
      {/* --- Header Section --- */}
      <div className="top-section">
        <div className="left">
          <img src="/robot.png" alt="VIORA" className="robot" />
          <h1>
            Hello, I’m <span className="highlight">VIORA</span> 🤖
          </h1>
          <p className="subtitle">
            Vaibhav’s AI Assistant — ready to assist you!
          </p>
        </div>

        <div className="right">
          <div>
            <img src="/profile.jpeg" alt="Vaibhav P V" className="profile-image" />
            <div className="profile-info">
              <b>VAIBHAV P V</b><br />
              AGE 21<br />
              AI Enthusiast | Web Developer<br />
              Kasaragod, Kerala, 671314
            </div>
          </div>
        </div>
      </div>

      {/* --- Who Am I Section --- */}
      <div className="whoami-section">
        <h2>Who Am I?</h2>
        <div className="whoami-box">
          <p>
            I am <b>Vaibhav P V</b> from <b>Kerala</b>, currently pursuing a{" "}
            <b>Bachelor of Engineering in Computer Science</b>, specializing in{" "}
            <b>Artificial Intelligence and Machine Learning</b> at{" "}
            <b>Sahyadri College of Engineering and Management, Mangalore</b>.
          </p>

          <p>
            I completed my <b>10th and 12th education in Kerala</b>, securing{" "}
            <b>95% and 91%</b> respectively, which built a strong academic
            foundation for my engineering journey.
          </p>

          <p>
            I am passionate about <b>Artificial Intelligence</b> and its
            integration into real-world applications across various domains. I
            have explored AI tools such as <b>ChatGPT, Gemini, Claude,
            Perplexity,</b> and <b>Grok AI</b>. I have also developed deep interest in{" "}
            <b>Prompt Engineering</b> and continuously learning new{" "}
            <b>technologies and tools</b>.
          </p>

          <p>
            I also have a strong interest in <b>Web Technologies</b>, aiming to
            combine <b>AI</b> and <b>Web Development</b> to create impactful,
            human-centered digital solutions.
          </p>

          <p>
            Coming to my personal background, we are four in my family —{" "}
            <b>my parents, my sister, and me</b>. My father, a teacher, has
            always been my <b>role model</b>, inspiring me to value knowledge,
            humility, and consistency. Being the <b>eldest among the children</b>,
            I naturally developed <b>leadership qualities</b>, a{" "}
            <b>sense of responsibility</b>, and <b>adaptability</b>.
          </p>
        </div>
      </div>

      {/* --- Skills Section --- */}
      <div className="skills-section">
        <h2>My Neural Network</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Languages</h3>
            <p>Python, JavaScript, R-Programming</p>
          </div>
          <div className="skill-card">
            <h3>Developer Tools</h3>
            <p>GitHub, Jupyter Notebook, VS Code, Power BI</p>
          </div>
          <div className="skill-card">
            <h3>Technologies / Frameworks</h3>
            <p>Computer Vision, NLP, TensorFlow, Web Development</p>
          </div>
          <div className="skill-card">
            <h3>Soft Skills</h3>
            <p>Leadership, Communication, Adaptability, Teamwork</p>
          </div>
        </div>
      </div>

      {/* --- Projects Section --- */}
      <div className="projects-section">
        <h2>My Creations</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Blindness Detection using Retinal Fundus Images</h3>
            <ul>
              <li>Developed CNN models (ResNet, EfficientNet) to detect Diabetic Retinopathy and Glaucoma.</li>
              <li>Used Grad-CAM for visual interpretability of affected regions.</li>
            </ul>
          </div>

          <div className="project-card">
            <h3>MY-DictionaryBot</h3>
            <ul>
              <li>Created a Next.js dictionary web app with voice & REST API integration.</li>
              <li>Provided real-time pronunciation, meanings, and antonyms.</li>
            </ul>
          </div>

          <div className="project-card">
            <h3>Churn Rate Analysis</h3>
            <ul>
              <li>Built Power BI dashboards for churn prediction and retention metrics.</li>
              <li>Integrated DAX and Excel for actionable insights.</li>
            </ul>
          </div>

          <div className="project-card">
            <h3>Truck Blind Spot Sensor View Assistant</h3>
            <ul>
              <li>Developed a truck blind spot monitoring system using YOLO, MySQL, and Python.</li>
              <li>Enhanced safety through real-time detection and backend analytics.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* --- Internship Section --- */}
      <div className="internship-section">
        <h2>My Internship Experience</h2>
        <div className="internship-box">
          <h3>AI Operator Intern — XTransmatrix, Mangalore</h3>
          <p><b>Oct 2025 – Present</b></p>
          <ul>
            <li>Developed AI-based automation workflows and supported model testing for real-time systems.</li>
            <li>Gained hands-on experience with prompt-based automation, text analysis, and production tools.</li>
          </ul>
        </div>
      </div>

      {/* --- Contact Section --- */}
      <div className="contact-section">
        <h2>Reach My Core</h2>
        <p><b>📞</b> +91-9567901570</p>
        <p><b>📧</b> vpv7255@gmail.com</p>
        <p><b>🌐</b> github.com/ybhav0059</p>
        <p><b>📍</b> Kasaragod, Kerala, India</p>
      </div>
    </div>
  );
}

export default App;
