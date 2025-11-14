// components/Hero.js
export default function Hero() {
  const platforms = [
    {
      name: "Meesho",
      src: "https://customer-assets.emergentagent.com/job_franchise-hub-6/artifacts/z0imhwk6_image.png",
    },
    {
      name: "Flipkart",
      src: "https://customer-assets.emergentagent.com/job_franchise-hub-6/artifacts/34ijv496_Untitled_design__6_-removebg-preview.png",
    },
    {
      name: "Amazon",
      src: "https://customer-assets.emergentagent.com/job_franchise-hub-6/artifacts/46ww4skt_Amazon_icon-removebg-preview.png",
    },
    {
      name: "Shopify",
      src: "https://customer-assets.emergentagent.com/job_franchise-hub-6/artifacts/etce5v1j_unnamed-removebg-preview.png",
    },
    {
      name: "Instagram",
      src: "https://customer-assets.emergentagent.com/job_franchise-hub-6/artifacts/uo17or37_Instagram_logo_2022.svg-removebg-preview.png",
    },
  ];

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="hero-gradient"></div>
      <div className="hero-pattern"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-4 sm:mb-6 px-4 sm:px-6 py-2 text-xs sm:text-sm animate-fade-in-up">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-award w-3 h-3 sm:w-4 sm:h-4 mr-2"
              aria-hidden="true"
            >
              <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
              <circle cx="12" cy="8" r="6"></circle>
            </svg>
            FOR 1 YEAR PARTNERSHIP
          </div>

          <h1
            className="hero-title mb-4 sm:mb-6 animate-fade-in-up text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            style={{ animationDelay: "0.1s" }}
          >
            BECOME THE FRANCHISE PARTNER OF
            <span className="block mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              MEET KI DUKAAN DROPSHIPPING SERVICE
            </span>
          </h1>

          <p
            className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto animate-fade-in-up px-4"
            style={{ animationDelay: "0.2s" }}
          >
            Uttar Pradesh mein humne 250+ clients onboard kiye, lekin ab har
            state mein 1000+ entrepreneurs khade karna hamara next mission hai —
            MEET KI DUKAAN India ko nationwide movement banana hai!
          </p>

          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-primary/90 h-10 rounded-md bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 sm:px-12 py-4 sm:py-6 text-sm sm:text-base md:text-lg font-semibold animate-fade-in-up shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105"
            style={{ animationDelay: "0.3s" }}
          >
            BOOK YOUR ZOOM MEET NOW !!
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-rocket ml-2 w-4 h-4 sm:w-5 sm:h-5"
              aria-hidden="true"
            >
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
            </svg>
          </button>

          <div
            className="mt-12 sm:mt-16 animate-fade-in-up px-2"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8 uppercase tracking-wider">
              Integrated With Leading Platforms
            </p>
            <div className="flex justify-center items-center gap-2 sm:gap-6 md:gap-8 lg:gap-10">
              {platforms.map((platform, index) => (
                <div
                  key={platform.name}
                  className="marketplace-logo-container group flex-shrink-0"
                >
                  <img
                    alt={platform.name}
                    className="h-11 w-11 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain transition-transform duration-300 group-hover:scale-110"
                    src={platform.src}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
