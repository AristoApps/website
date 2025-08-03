import { useState, useEffect, useRef } from "react";
import "./App.css";
import Galaxy from "./ReactBits/Galaxy/Galaxy";
import { initSmoothScrolling } from "./components/smoothScroll";
import BlurText from "./ReactBits/BlurText/BlurText";
import AnimatedContent from "./ReactBits/AnimatedContent/AnimatedContent";
// import useDelayedRender from "./hooks/delay.ts";
import ShinyText from "./ReactBits/ShinyText/ShinyText.tsx";
import Crosshair from "./ReactBits/Crosshair/Crosshair.tsx";
import GradientText from "./ReactBits/GradientText/GradientText.tsx";
import LightRays from "./ReactBits/LightRays/LightRays.tsx";
import PixelCard from "./ReactBits/PixelCard/PixelCard.tsx";
import TiltedCard from "./ReactBits/TiltedCard/TiltedCard.tsx";
import DotGrid from "./ReactBits/DotGrid/DotGrid.tsx";
import Silk from "./ReactBits/Silk/Silk.tsx";
import Beams from "./ReactBits/Beams/Beams.tsx";
import TextType from "./ReactBits/TextType/TextType.tsx";
import FadeContent from "./ReactBits/FadeContent/FadeContent.tsx";
import { useForm, ValidationError } from "@formspree/react";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

function ContactForm() {
  const [state, handleSubmit] = useForm("xpwljlqo");
  if (state.succeeded) {
    return (
      <p className="about-section-p" style={{ marginTop: "1rem" }}>
        <ShinyText
          text="Thanks. I will contact you shortly!"
          disabled={false}
          speed={3}
          className=""
        />
      </p>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="fieldContainer">
        <input
          id="name"
          type="text"
          name="text"
          placeholder="Name"
          className="input"
        />

        <ValidationError prefix="Text" field="text" errors={state.errors} />
      </div>

      <div className="fieldContainer">
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email Address"
          className="input"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="fieldContainer">
        <textarea
          id="message"
          name="message"
          placeholder="Message (optional)"
          className="input"
          style={{ height: "120px", resize: "vertical" }}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <button type="submit" disabled={state.submitting} className="button">
        <ShinyText text="Send" disabled={false} speed={3} />
      </button>
    </form>
  );
}

const DESKTOP_BREAKPOINT = 1024; // Or 1024, depending on what you used in CSS for desktop
function App() {
  const [copied, setCopied] = useState(false);
  const email = "aristoappsdev@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  // const showSubtext = useDelayedRender(2000); // 2000ms = 2 seconds delay
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth >= DESKTOP_BREAKPOINT
  ); // <--- NEW STATE
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // Handle changes to the input fields.
  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  // Handle form submission. This is a placeholder function.
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", formData);
  //   // You would typically send the data to an API here.
  //   alert("Form Submitted! Check the console for the data.");
  //   setFormData({ name: "", email: "", message: "" });
  // };
  useEffect(() => {
    // Initialize smooth scrolling
    initSmoothScrolling();

    // Handle scroll events if needed
    const handleScroll = () => {
      // Any scroll-based logic can go here
    };

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize); // <--- NEW: Clean up resize listener
    };
  }, []);

  return (
    <div className="app-container">
      {/* Glass Header */}
      <header className="glass-header">
        <div className="logo"></div>
        <nav className="nav-links">
          <a href="#home">
            <ShinyText
              text="Home"
              disabled={false}
              speed={3}
              className="nav-font"
            />
          </a>
          <a href="#about">
            <ShinyText
              text="About"
              disabled={false}
              speed={3}
              className="nav-font"
            />
          </a>
          <a href="#services">
            <ShinyText
              text="Services"
              disabled={false}
              speed={3}
              className="nav-font"
            />
          </a>
          <a href="#contact">
            <ShinyText
              text="Get in touch"
              disabled={false}
              speed={3}
              className="nav-font"
            />
          </a>
        </nav>
      </header>

      <section className="hero-section" id="home">
        <div className="galaxy-wrapper">
          <Galaxy
            mouseRepulsion={true}
            mouseInteraction={true}
            density={1.5}
            glowIntensity={0.3}
            saturation={0}
            hueShift={240}
          />
        </div>

        <div className="hero-content">
          <div className="image-with-gradient"></div>
          <div className="encrypted-text-container">
            <AnimatedContent
              distance={200}
              direction="vertical"
              reverse={false}
              duration={1.2}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={3.1}
              threshold={0.2}
              delay={0.3}
            >
              {/* <div className="encrypted-text">Aristo Apps</div> */}
              <ShinyText
                text="Aristo Apps"
                disabled={false}
                speed={3}
                className="encrypted-text"
              />
            </AnimatedContent>

            <div
              style={{
                display: "flex",
                gap: "clamp(4px, 5.3vw, 4rem)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AnimatedContent
                distance={200}
                direction="vertical"
                reverse={false}
                duration={1.2}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={3.1}
                threshold={0.2}
                delay={0.3}
              >
                <img
                  src="/website/reactshine.png" // Path starts from the root (public folder)
                  alt="A description of my awesome photo" // IMPORTANT for accessibility and SEO
                  className="shiny-icons"
                />
              </AnimatedContent>
              <AnimatedContent
                distance={200}
                direction="vertical"
                reverse={false}
                duration={1.2}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={3.1}
                threshold={0.2}
                delay={0.3}
              >
                <div
                  style={{
                    width: "2px",
                    height: "clamp(4px, 2.3vw, 3rem)",
                    // Replace backgroundColor with background for the gradient
                    background:
                      "linear-gradient(to top right,rgb(50, 50, 50),rgb(147, 147, 147))",
                    borderRadius: "9999px",
                    marginTop: "3px",
                  }}
                />
              </AnimatedContent>
              <AnimatedContent
                distance={200}
                direction="vertical"
                reverse={false}
                duration={1.2}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={3.1}
                threshold={0.2}
                delay={0.3}
              >
                <img
                  src="/website/supashine.png" // Path starts from the root (public folder)
                  alt="A description of my awesome photo" // IMPORTANT for accessibility and SEO
                  className="shiny-icons"
                />
              </AnimatedContent>
              <AnimatedContent
                distance={200}
                direction="vertical"
                reverse={false}
                duration={1.2}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={3.1}
                threshold={0.2}
                delay={0.3}
              >
                <div
                  style={{
                    width: "2px",
                    height: "clamp(4px, 2.3vw, 3rem)",
                    // Replace backgroundColor with background for the gradient
                    background:
                      "linear-gradient(to top right,rgb(50, 50, 50),rgb(147, 147, 147))",
                    borderRadius: "9999px",
                    marginTop: "3px",
                  }}
                />
              </AnimatedContent>
              <AnimatedContent
                distance={200}
                direction="vertical"
                reverse={false}
                duration={1.2}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={3.1}
                threshold={0.2}
                delay={0.3}
              >
                <img
                  src="/website/figmashine.png" // Path starts from the root (public folder)
                  alt="A description of my awesome photo" // IMPORTANT for accessibility and SEO
                  className="shiny-icons"
                />
              </AnimatedContent>
              <AnimatedContent
                distance={200}
                direction="vertical"
                reverse={false}
                duration={1.2}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={3.1}
                threshold={0.2}
                delay={0.3}
              >
                <div
                  style={{
                    width: "2px",
                    height: "clamp(4px, 2.3vw, 3rem)",
                    // Replace backgroundColor with background for the gradient
                    background:
                      "linear-gradient(to top right,rgb(50, 50, 50),rgb(147, 147, 147))",
                    borderRadius: "9999px",
                    marginTop: "3px",
                  }}
                />
              </AnimatedContent>
              <AnimatedContent
                distance={200}
                direction="vertical"
                reverse={false}
                duration={1.2}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={3.1}
                threshold={0.2}
                delay={0.3}
              >
                <img
                  src="/website/postshine.png" // Path starts from the root (public folder)
                  alt="A description of my awesome photo" // IMPORTANT for accessibility and SEO
                  className="shiny-icons"
                />
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section
        style={{ backgroundColor: "#101010" }}
        ref={aboutSectionRef} // <--- Attach the ref here
      >
        <div style={{ position: "relative", height: "900px" }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <DotGrid
              dotSize={2}
              gap={15}
              baseColor="#252525"
              activeColor="#ff5757"
              proximity={120}
              shockRadius={300}
              shockStrength={5}
              resistance={750}
              returnDuration={1.5}
            />
          </div>

          {isDesktop && ( // <--- NEW: Render Crosshair only if isDesktop is true
            <Crosshair containerRef={aboutSectionRef} color="#ffffff" />
          )}

          <div
            className="encrypted-subtext"
            style={{
              position: "absolute",
              top: "55%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
              width: "100%",
              textAlign: "center",
            }}
          >
            <BlurText
              text="Precision."
              delay={20}
              animateBy="letters"
              direction="bottom"
              onAnimationComplete={handleAnimationComplete}
              // className="text-2xl mb-10"
              className="precision-text"
            />
          </div>
        </div>
      </section>
      <div className="divider"></div>
      <section>
        <div style={{ position: "relative", height: "1000px" }}>
          {/* The Silk component is positioned absolutely to fill the container */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <Silk
              speed={6.6}
              scale={0.5}
              color="#404040"
              noiseIntensity={1.5}
              rotation={0}
            />
          </div>

          <div
            className="encrypted-subtext"
            style={{
              position: "absolute",
              top: "55%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
              width: "100%",
              textAlign: "center",
            }}
          >
            <BlurText
              text="Passion."
              delay={20}
              animateBy="letters"
              direction="bottom"
              onAnimationComplete={handleAnimationComplete}
              className="encrypted-subtext"
            />
          </div>
        </div>
      </section>
      <div className="divider"></div>
      <section>
        <div style={{ width: "100%", height: "1000px", position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <Beams
              beamWidth={4.3}
              beamHeight={25}
              beamNumber={20}
              lightColor="#ffffff"
              speed={2}
              noiseIntensity={1.75}
              scale={0.2}
              rotation={30}
            />
          </div>
          {/* <div style={{ height: "400px" }}></div> */}
          <div
            className="encrypted-subtext"
            style={{
              position: "absolute",
              top: "55%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
              width: "100%",
              textAlign: "center",
            }}
          >
            <BlurText
              text="Perfection."
              delay={20}
              animateBy="letters"
              direction="bottom"
              onAnimationComplete={handleAnimationComplete}
              // className="text-2xl mb-10"
              className="encrypted-subtext"
            />
          </div>
        </div>
        {/* <div style={{ height: "300px" }}></div> */}
      </section>
      <div className="divider"></div>
      {/* HeroScroll Section */}
      <section className="" id="intro">
        <div style={{ height: "300px" }}></div>
        {/* <HeroScrollDemo /> */}

        <div className="intro-section">
          <h1 className="intro-section-h1">
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={2.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity={true}
              scale={1}
              threshold={0.1}
              delay={0}
            >
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={9}
                showBorder={false}
                className="gradient-text"
              >
                Hi, I design and develop beautiful, scalable mobile apps &
                websites.
              </GradientText>
            </AnimatedContent>
          </h1>

          <p>
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={1.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity={true}
              scale={1}
              threshold={0.1}
              delay={0}
            >
              <ShinyText
                text="Specialising in premium UI/UX design, fullstack app/web
              development, and cross-platform delivery. I transform ideas into
              elegant, functional applications that deliver exceptional user
              experiences."
                disabled={false}
                speed={3}
                className="about-section-p"
              />
            </AnimatedContent>
          </p>
        </div>
      </section>
      <div style={{ height: "300px" }}></div>
      <section id="about">
        <h1 className="about-section">
          <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={false}
            duration={2.8}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity={true}
            scale={1}
            threshold={0.1}
            delay={0}
          >
            <GradientText
              colors={["#FF4400", "#FF9E5A", "#FF4400", "#FF9E5A", "#FF4400"]}
              animationSpeed={9}
              showBorder={false}
              className="gradient-text"
            >
              About
            </GradientText>
          </AnimatedContent>
        </h1>
        <h2 className="about-section-p">
          <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={false}
            duration={2.8}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity={true}
            scale={1}
            threshold={0.1}
            delay={0}
          >
            <ShinyText
              text="Building bold ideas with thoughtful design and scalable code."
              disabled={false}
              speed={3}
              className="about-section-p"
            />
            {/* Building <b>bold</b> ideas with thoughtful design and scalable code. */}
          </AnimatedContent>
        </h2>

        <AnimatedContent
          distance={70}
          direction="vertical"
          reverse={false}
          duration={2.8}
          ease="elastic.out(1,0.6)"
          initialOpacity={0}
          animateOpacity={true}
          scale={1}
          threshold={0.1}
          delay={0}
        >
          <div className="pixel-card-container">
            <PixelCard variant="pink" isAlwaysOn={true}>
              <h1
                style={{
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontWeight: "300",
                }}
              >
                <GradientText
                  colors={[
                    "#e11d48",
                    "#fda4af",
                    "#e11d48",
                    "#fda4af",
                    "#e11d48",
                  ]}
                  animationSpeed={9}
                  showBorder={false}
                  className=""
                >
                  Modern UI
                </GradientText>
              </h1>
            </PixelCard>
            <PixelCard variant="green" isAlwaysOn={true}>
              <h1
                style={{
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontWeight: "300",
                }}
              >
                <GradientText
                  colors={[
                    "#41E11D",
                    "#AAFDA4",
                    "#41E11D",
                    "#AAFDA4",
                    "#41E11D",
                  ]}
                  animationSpeed={9}
                  showBorder={false}
                  className=""
                >
                  Solid Backend
                </GradientText>
              </h1>
            </PixelCard>
            <PixelCard variant="blue" isAlwaysOn={true}>
              <h1
                style={{
                  position: "absolute",
                  fontFamily: "Montserrat",
                  fontWeight: "300",
                }}
              >
                <GradientText
                  colors={[
                    "#0ea5e9",
                    "#7dd3fc",
                    "#0ea5e9",
                    "#7dd3fc",
                    "#0ea5e9",
                  ]}
                  animationSpeed={9}
                  showBorder={false}
                  className=""
                >
                  Great UX
                </GradientText>
              </h1>
            </PixelCard>
          </div>
        </AnimatedContent>
      </section>
      <div style={{ height: "300px" }}></div>
      <section className="content-section" id="services">
        <div style={{ height: "600px", position: "relative" }}>
          <h1 className="about-section">
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={2.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity={true}
              scale={1}
              threshold={0.1}
              delay={0}
            >
              <GradientText
                colors={["#683815", "#df9d62", "#683815", "#df9d62", "#683815"]}
                animationSpeed={9}
                showBorder={false}
                className="gradient-text"
              >
                Services
              </GradientText>
            </AnimatedContent>
          </h1>

          <p className="about-section-p">
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={2.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity={true}
              scale={1}
              threshold={0.1}
              delay={0}
            >
              <ShinyText
                text="Comprehensive app/web development solutions tailored to your
              specific requirements"
                disabled={false}
                speed={3}
                className="about-section-p"
              />
            </AnimatedContent>
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="responsive-card-container"
          >
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={2.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity={true}
              scale={1}
              threshold={0.1}
              delay={0}
            >
              <TiltedCard
                imageSrc="https://images.unsplash.com/photo-1692317785929-c6f288cfd2e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                altText="Kendrick Lamar - GNX Album Cover"
                captionText="Kendrick Lamar - GNX"
                containerHeight="400px"
                containerWidth="300px"
                imageHeight="400px"
                imageWidth="300px"
                rotateAmplitude={20}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={
                  // This container will now use Flexbox for perfect centering
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center", // Centers horizontally
                        alignItems: "center", // Centers vertically
                        width: "100%", // Ensures it spans the full width of the overlay
                        height: "100%", // Ensures it spans the full height of the overlay
                        padding: "0.6rem 0rem",
                        marginTop: "40px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                          padding: "0rem 1rem",
                          borderRadius: "180px",
                          backdropFilter: "blur(5px)",
                          textAlign: "center",
                        }}
                      >
                        <p
                          className="tilted-card-demo-text"
                          style={{ fontFamily: "Montserrat", fontWeight: 200 }}
                        >
                          UI/UX Design
                        </p>
                      </div>
                    </div>
                    <p
                      style={{
                        display: "flex",
                        justifyContent: "center", // Centers horizontally
                        alignItems: "center", // Centers vertically
                        width: "80%", // Ensures it spans the full width of the overlay
                        height: "100%", // Ensures it spans the full height of the overlay
                        padding: "0rem 2.4rem",
                        fontFamily: "Montserrat",
                        fontWeight: 200,
                        fontSize: "20px",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 1.5)",
                      }}
                    >
                      Crafting visually stunning interfaces with intuitive user
                      experiences that engage and delight. Every design element
                      is meticulously considered to enhance usability and
                      aesthetic appeal.
                    </p>
                  </div>
                }
              />
            </AnimatedContent>

            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={2.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity={true}
              scale={1}
              threshold={0.1}
              delay={0}
            >
              <TiltedCard
                imageSrc="https://images.unsplash.com/photo-1726025711127-fcef95bce67f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                altText="Kendrick Lamar - GNX Album Cover"
                captionText="Kendrick Lamar - GNX"
                containerHeight="400px"
                containerWidth="300px"
                imageHeight="400px"
                imageWidth="300px"
                rotateAmplitude={20}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={
                  // This container will now use Flexbox for perfect centering
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center", // Centers horizontally
                        alignItems: "center", // Centers vertically
                        width: "100%", // Ensures it spans the full width of the overlay
                        height: "100%", // Ensures it spans the full height of the overlay
                        padding: "0.5rem 0rem",
                        marginTop: "40px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                          padding: "0rem 1rem",
                          borderRadius: "180px",
                          backdropFilter: "blur(5px)",
                          textAlign: "center",
                        }}
                      >
                        <p
                          className="tilted-card-demo-text"
                          style={{ fontFamily: "Montserrat", fontWeight: 200 }}
                        >
                          Web Development
                        </p>
                      </div>
                    </div>
                    <p
                      style={{
                        display: "flex",
                        justifyContent: "center", // Centers horizontally
                        alignItems: "center", // Centers vertically
                        width: "80%", // Ensures it spans the full width of the overlay
                        height: "100%", // Ensures it spans the full height of the overlay
                        padding: "0rem 2.4rem",
                        fontFamily: "Montserrat",
                        fontWeight: 200,
                        fontSize: "20px",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 1.5)",
                      }}
                    >
                      Engineering fast, robust and responsive websites that
                      serve as a powerful foundation for your digital presence.
                      I build scalable solutions designed for performance and
                      business growth.
                    </p>
                  </div>
                }
              />
            </AnimatedContent>

            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={2.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity={true}
              scale={1}
              threshold={0.1}
              delay={0}
            >
              <TiltedCard
                imageSrc="https://images.unsplash.com/photo-1709075066010-df76f0554254?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                altText="Kendrick Lamar - GNX Album Cover"
                captionText="Kendrick Lamar - GNX"
                containerHeight="400px"
                containerWidth="300px"
                imageHeight="400px"
                imageWidth="300px"
                rotateAmplitude={20}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={
                  // This container will now use Flexbox for perfect centering
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center", // Centers horizontally
                        alignItems: "center", // Centers vertically
                        width: "100%", // Ensures it spans the full width of the overlay
                        height: "100%", // Ensures it spans the full height of the overlay
                        padding: "0.9rem 0rem",
                        marginTop: "40px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                          padding: "0rem 1rem",
                          borderRadius: "180px",
                          backdropFilter: "blur(5px)",
                          textAlign: "center",
                        }}
                      >
                        <p
                          className="tilted-card-demo-text"
                          style={{ fontFamily: "Montserrat", fontWeight: 200 }}
                        >
                          App Development
                        </p>
                      </div>
                    </div>
                    <p
                      style={{
                        display: "flex",
                        justifyContent: "center", // Centers horizontally
                        alignItems: "center", // Centers vertically
                        width: "80%", // Ensures it spans the full width of the overlay
                        height: "100%", // Ensures it spans the full height of the overlay
                        padding: "0rem 2.4rem",
                        fontFamily: "Montserrat",
                        fontWeight: 200,
                        fontSize: "20px",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 1.5)",
                      }}
                    >
                      Building intuitive and high-performing mobile applications
                      for iOS and Android. I translate your vision into a
                      seamless digital experience that connects with your
                      audience on the go.
                    </p>
                  </div>
                }
              />
            </AnimatedContent>
          </div>
        </div>
      </section>
      <div style={{ height: "750px" }}></div>
      {!isDesktop && <div style={{ height: "750px" }}></div>}
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <p className="about-section-p">
          <TextType
            text={["Apps are the future.", "Let's build your's beautifully."]}
            typingSpeed={45}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="_"
            className="about-section-p"
          />
        </p>
      </div>
      <div style={{ height: "600px" }}></div>
      <section className="" id="contact">
        <div style={{ width: "100%", height: "1000px", position: "relative" }}>
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <div
              style={{
                width: "100%",
                height: "1000px",
                position: "relative",
                // margin: "-10px",
              }}
            >
              <LightRays
                raysOrigin="bottom-center"
                raysColor="#ffffff"
                raysSpeed={1.7}
                lightSpread={2}
                rayLength={2}
                followMouse={true}
                mouseInfluence={0.1}
                noiseAmount={0.1}
                distortion={0.0}
                saturation={0.1}
                className="custom-rays"
                fadeDistance={2}
              />

              {/* </div> */}
            </div>
          </FadeContent>

          <div
            // className="about-section"
            style={{
              position: "absolute",
              top: "55%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
              width: "100%",
              textAlign: "center",
            }}
          >
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={1.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity={true}
              scale={1}
              threshold={0.1}
              delay={0}
            >
              <GradientText
                colors={["#1f543d", "#98b28e", "#1f543d", "#98b28e", "#1f543d"]}
                animationSpeed={9}
                showBorder={false}
                className="gradient-text"
              >
                <h1 className="getintouch-section">Get in touch</h1>
              </GradientText>
            </AnimatedContent>
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={1.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity={true}
              scale={1}
              threshold={0.1}
              delay={0}
            >
              <p
                className="about-section-p"
                style={{
                  fontSize: "15px",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  top: "clamp(-20px, 10vw, -1.5rem)",
                }}
              >
                <div
                  onClick={handleCopy}
                  onTouchStart={handleCopy}
                  style={{
                    cursor: "pointer",
                    color: copied ? "lightgreen" : "white",
                    fontFamily: "Montserrat",
                    fontSize: "1rem",
                    userSelect: "none",
                  }}
                >
                  <ShinyText
                    text="aristoappsdev@gmail.com"
                    disabled={false}
                    speed={3}
                    className=""
                  />
                </div>
              </p>
            </AnimatedContent>
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={1.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity={true}
              scale={1}
              threshold={0.1}
              delay={0}
            >
              <ContactForm />
            </AnimatedContent>

            <p
              className="about-section-p"
              style={{
                fontSize: "15px",
                alignItems: "end",
                justifyContent: "end",
                position: "relative",
                top: "8rem",
              }}
            >
              <ShinyText
                text="© 2025 Aristo Apps. All rights reserved."
                disabled={false}
                speed={3}
                className=""
              />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
