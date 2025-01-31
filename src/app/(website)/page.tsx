"use client";
import Image from "next/image";

export default function Home() {
  const features = [
    {
      icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
      title: "Real-Time Recording",
      description:
        "Record and stream videos in real-time without any third-party dependencies",
    },
    {
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      title: "Desktop App",
      description:
        "Native desktop application for enhanced recording capabilities",
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Instant Sharing",
      description: "Share videos instantly with your team and prospects",
    },
    {
      icon: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4",
      title: "AI Features",
      description:
        "AI-powered transcriptions, summaries, and content generation",
    },
  ];

  const aiFeatures = [
    "Video Transcription",
    "Content Summaries",
    "Smart Titles & Descriptions",
    "One-Time Trial for All Users",
  ];

  function getFeatureDescription(feature: string) {
    const descriptions: { [key: string]: string } = {
      "Video Transcription": "Convert speech to text with high accuracy",
      "Content Summaries": "Get AI-generated summaries of your videos",
      "Smart Titles & Descriptions":
        "Generate engaging titles and descriptions",
      "One-Time Trial for All Users":
        "Try all AI features with your first video",
    };
    return descriptions[feature] || "";
  }

  return (
    <div className="relative pt-8 flex flex-col gap-20 overflow-hidden bg-[#0F0F13]">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#5e17eb]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-[#8c52ff]/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      {/* Hero Section */}
      <section className="relative container flex flex-col-reverse md:flex-row items-center justify-between gap-10 mt-10 px-4 sm:px-6 lg:px-8">
        <div className="flex-1 space-y-8 animate-fade-in text-center md:text-left">
          <div className="space-y-4">
            <div className="inline-block rounded-full px-4 py-1.5 bg-gradient-to-r from-[#5e17eb]/10 to-[#8c52ff]/10 border border-[#5e17eb]/20 backdrop-blur-sm">
              <span className="bg-gradient-to-r from-[#5e17eb] to-[#8c52ff] bg-clip-text text-transparent text-sm sm:text-base">
                ✨ Professional Video Platform
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-[#5e17eb] to-[#8c52ff] bg-clip-text text-transparent">
                Record, Share &
              </span>
              <br />
              <span className="text-white">Analyze Videos</span>
            </h1>
          </div>
          <p className="text-base sm:text-lg text-gray-400/80 max-w-xl mx-auto md:mx-0">
            Professional-grade video recording platform with AI-powered
            insights, real-time streaming, and team collaboration features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/auth/sign-up"
              className="group px-8 py-4 bg-gradient-to-r from-[#5e17eb] to-[#8c52ff] rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(94,23,235,0.3)] text-white font-medium text-center"
            >
              Start Recording
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#features"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#8c52ff]/50 rounded-2xl transition-all duration-300 text-white font-medium text-center backdrop-blur-sm"
            >
              See Features
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              720p/1080p
            </div>
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Screen & Webcam
            </div>
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              AI-Powered
            </div>
          </div>
        </div>
        <div className="flex-1 w-full md:w-auto">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-[#5e17eb]/20 backdrop-blur-sm">
            <Image
              src="/dashboard-preview.png"
              alt="Dashboard Preview"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#5e17eb]/10 to-transparent" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="relative container px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#5e17eb] to-[#8c52ff] bg-clip-text text-transparent">
              Everything You Need
            </span>
          </h2>
          <p className="text-gray-400/80 text-lg">
            Powerful features for modern video creators
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm p-6 rounded-2xl space-y-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:shadow-[#5e17eb]/20 border border-white/10 hover:border-[#8c52ff]/50"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#5e17eb]/10 to-[#8c52ff]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-[#8c52ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={feature.icon}
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Features Section */}
      <section className="relative px-4 container sm:px-6 lg:px-8">
        <div className="backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 border border-white/10 bg-gradient-to-br from-[#0F0F13] to-[#1A1A1A] relative overflow-hidden">
          {/* Glow Effects */}
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-[#5e17eb]/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-[#8c52ff]/20 rounded-full blur-[120px] animate-pulse delay-700" />

          <div className="flex flex-col md:flex-row gap-12 relative">
            <div className="flex-1 space-y-6">
              <div className="space-y-2">
                <div className="inline-block rounded-full px-4 py-1.5 bg-gradient-to-r from-[#5e17eb]/10 to-[#8c52ff]/10 border border-[#5e17eb]/20">
                  <span className="bg-gradient-to-r from-[#5e17eb] to-[#8c52ff] bg-clip-text text-transparent font-medium">
                    AI-Powered Features
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-center md:text-left">
                  Powered by
                  <span className="bg-gradient-to-r from-[#5e17eb] to-[#8c52ff] bg-clip-text text-transparent">
                    {" "}
                    Advanced AI
                  </span>
                </h2>
              </div>
              <p className="text-gray-400 text-lg">
                Experience the power of AI with our advanced features that help
                you create better content faster.
              </p>
              <ul className="space-y-4">
                {aiFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 group">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#5e17eb]/20 to-[#8c52ff]/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <svg
                        className="w-4 h-4 text-[#8c52ff]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-white/90 group-hover:text-white transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 relative min-h-[400px] md:min-h-[300px]">
              {aiFeatures.map((feature, index) => (
                <div
                  key={feature}
                  className={`absolute bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl w-[85%] sm:w-auto md:left-${
                    index % 2 === 0 ? "0" : "40%"
                  } hover:border-[#8c52ff]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#5e17eb]/20`}
                  style={{
                    top: `${index * 27}%`,
                    left: index % 2 === 0 ? "0" : "15%",
                    transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)`,
                    zIndex: aiFeatures.length - index,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5e17eb]/20 to-[#8c52ff]/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-300">
                      <svg
                        className="w-5 h-5 text-[#8c52ff]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">{feature}</h4>
                      <p className="text-sm text-gray-400/90">
                        {getFeatureDescription(feature)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section
        id="how-it-works"
        className="relative container px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#5e17eb] to-[#8c52ff] bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-gray-400/80 text-lg">
            Start recording and sharing in minutes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#8c52ff]/50 transition-all duration-300">
            <div className="absolute -top-6 left-6 w-12 h-12 bg-gradient-to-br from-[#5e17eb] to-[#8c52ff] rounded-xl flex items-center justify-center text-xl font-bold text-white">
              1
            </div>
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold text-white">
                Install & Setup
              </h3>
              <p className="text-gray-400">
                Download our app and sign up for an account in less than 2
                minutes.
              </p>
            </div>
          </div>

          <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#8c52ff]/50 transition-all duration-300">
            <div className="absolute -top-6 left-6 w-12 h-12 bg-gradient-to-br from-[#5e17eb] to-[#8c52ff] rounded-xl flex items-center justify-center text-xl font-bold text-white">
              2
            </div>
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold text-white">
                Record Content
              </h3>
              <p className="text-gray-400">
                Choose your recording options and start creating with one click.
              </p>
            </div>
          </div>

          <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#8c52ff]/50 transition-all duration-300">
            <div className="absolute -top-6 left-6 w-12 h-12 bg-gradient-to-br from-[#5e17eb] to-[#8c52ff] rounded-xl flex items-center justify-center text-xl font-bold text-white">
              3
            </div>
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold text-white">
                Share & Analyze
              </h3>
              <p className="text-gray-400">
                Share instantly and get AI-powered insights about your content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="relative container px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#5e17eb] to-[#8c52ff] bg-clip-text text-transparent">
              What Our Users Say
            </span>
          </h2>
          <p className="text-gray-400/80 text-lg">
            Join thousands of satisfied creators and teams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#8c52ff]/50 transition-all duration-300 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5e17eb] to-[#8c52ff] flex items-center justify-center text-lg font-bold text-white">
                SK
              </div>
              <div>
                <h4 className="font-semibold text-white">Sarah K.</h4>
                <p className="text-sm text-gray-400">Content Creator</p>
              </div>
            </div>
            <p className="text-gray-400">
              "The AI features have completely transformed how I create content.
              The transcription accuracy is impressive, and the automated
              summaries save me hours of work."
            </p>
            <div className="flex gap-1 text-[#8c52ff]">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#8c52ff]/50 transition-all duration-300 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5e17eb] to-[#8c52ff] flex items-center justify-center text-lg font-bold text-white">
                MR
              </div>
              <div>
                <h4 className="font-semibold text-white">Mike R.</h4>
                <p className="text-sm text-gray-400">Product Manager</p>
              </div>
            </div>
            <p className="text-gray-400">
              "Our team's communication has improved significantly since we
              started using this platform. The instant sharing and collaboration
              features are game-changers."
            </p>
            <div className="flex gap-1 text-[#8c52ff]">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#8c52ff]/50 transition-all duration-300 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5e17eb] to-[#8c52ff] flex items-center justify-center text-lg font-bold text-white">
                AL
              </div>
              <div>
                <h4 className="font-semibold text-white">Alex L.</h4>
                <p className="text-sm text-gray-400">Sales Director</p>
              </div>
            </div>
            <p className="text-gray-400">
              "The desktop app is incredibly reliable and easy to use. We've
              seen a 40% increase in response rates since we started sending
              personalized video messages."
            </p>
            <div className="flex gap-1 text-[#8c52ff]">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        className="flex flex-col container items-center gap-12 px-4 sm:px-6 lg:px-8"
        id="pricing"
      >
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-[#5e17eb] to-[#8c52ff] bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </span>
          </h2>
          <p className="text-gray-400/80 text-lg">
            Choose the plan that works best for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
          {/* Free Plan */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl space-y-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:shadow-[#5e17eb]/20 border border-white/10 hover:border-[#8c52ff]/50">
            <h3 className="text-2xl font-semibold">Free</h3>
            <p className="text-4xl font-bold">
              $0<span className="text-lg text-gray-400">/month</span>
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Up to 5 minute video length
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Maximum 25 total videos
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Basic video management
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                One-time AI feature trial
              </li>
            </ul>
            <a
              href="/auth/sign-up"
              className="block text-center px-6 py-3 border border-gray-700 hover:border-[#8c52ff]/50 rounded-lg transition-all duration-300 hover:bg-[#5e17eb]/10"
            >
              Get Started
            </a>
          </div>

          {/* Pro Plan */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl space-y-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:shadow-[#5e17eb]/20 border border-white/10 hover:border-[#8c52ff]/50 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-gradient-to-r from-[#5e17eb] to-[#8c52ff] px-4 py-1.5 rounded-full text-sm font-medium text-white">
              Popular
            </div>
            <h3 className="text-2xl font-semibold">Pro</h3>
            <p className="text-4xl font-bold">
              $99<span className="text-lg text-gray-400">/month</span>
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Unlimited video length
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Unlimited video storage
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Advanced AI features
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Custom thumbnails
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Team workspaces
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Priority support
              </li>
            </ul>
            <a
              href="/auth/sign-up"
              className="block text-center px-6 py-3 bg-gradient-to-r from-[#5e17eb] to-[#8c52ff] rounded-lg transition-all duration-300 hover:scale-105"
            >
              Upgrade to Pro
            </a>
          </div>
        </div>
      </section>

      {/* Desktop App Section */}
      <section className="flex container flex-col md:flex-row items-center justify-between gap-16 mt-20 px-4 sm:px-6 lg:px-8">
        <div className="flex-1 space-y-8 text-center md:text-left">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-[#5e17eb] to-[#8c52ff] bg-clip-text text-transparent">
              Professional Desktop App
            </span>
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#5e17eb]/10 to-[#8c52ff]/10 rounded-xl flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 text-[#8c52ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Enhanced Security
                </h3>
                <p className="text-gray-400">
                  Enterprise-grade encryption and secure data handling for your
                  recordings.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#5e17eb]/10 to-[#8c52ff]/10 rounded-xl flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 text-[#8c52ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Instant Sharing</h3>
                <p className="text-gray-400">
                  Share your recordings instantly with a single click.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#"
              className="group px-6 py-3 bg-gradient-to-r from-[#5e17eb] to-[#8c52ff] rounded-xl transition-all duration-300 hover:scale-105 text-white font-medium flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.928 5.617a1 1 0 0 0-.928-.617H3a1 1 0 0 0-.928.617l9.428 8.383zm.072 1.826L12.573 15.83a1 1 0 0 1-1.146 0L2 7.443V19a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1z" />
              </svg>
              Download for Windows
              <span className="text-sm text-white/80">(64-bit)</span>
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#8c52ff]/50 rounded-xl transition-all duration-300 text-white font-medium flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download for Mac
            </a>
          </div>
        </div>
        <div className="flex-1 relative w-full">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-[#5e17eb]/20">
            <Image
              src="/desktop-app-preview.png"
              alt="Desktop App Preview"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#5e17eb]/10 to-transparent" />
          </div>
          <div className="absolute -z-10 -top-10 -right-10 w-72 h-72 bg-[#6D28D9] opacity-20 blur-3xl rounded-full" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="container px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-[#5e17eb] to-[#8c52ff] bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-gray-400/80 text-lg">
            Have questions? We're here to help you get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#5e17eb]/10 to-[#8c52ff]/10 rounded-xl flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 text-[#8c52ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-400">
                  Our support team is ready to help you with any questions.
                </p>
                <a
                  href="mailto:support@example.com"
                  className="text-[#8c52ff] hover:text-[#5e17eb] mt-2 inline-block"
                >
                  support@example.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#5e17eb]/10 to-[#8c52ff]/10 rounded-xl flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 text-[#8c52ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                <p className="text-gray-400">
                  Chat with our team in real-time during business hours.
                </p>
                <button className="text-[#8c52ff] hover:text-[#5e17eb] mt-2 inline-block">
                  Start Chat →
                </button>
              </div>
            </div>
          </div>

          <form className="space-y-6 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#8c52ff]/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#8c52ff]/50"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#8c52ff]/50"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-[#5e17eb] to-[#8c52ff] rounded-lg transition-all duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 sm:mt-32 border-t border-white/10">
        <div className="container px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 sm:col-span-1 space-y-6">
              <Image src="/logo.svg" alt="Logo" width={120} height={40} />
              <p className="text-sm text-gray-400">
                Professional video platform for modern creators and teams.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Desktop App
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Chrome Extension
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 sm:mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
            <p>© 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Simplified Animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
