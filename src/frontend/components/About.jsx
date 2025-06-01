const AboutSection = () => {
    return (
      <section className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 py-24 px-6 overflow-hidden">
        {/* Animated floating petals */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute sakura-petal"
              style={{
                backgroundImage: "url('https://www.transparentpng.com/thumb/cherry-blossom/cherry-blossom-transparent-background-5.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                width: `${Math.random() * 30 + 20}px`,
                height: `${Math.random() * 30 + 20}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.4 + 0.1,
                animation: `float ${Math.random() * 15 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            />
          ))}
        </div>
  
        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Image with decorative frame */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-rose-200 to-amber-100 rounded-3xl opacity-70 group-hover:opacity-100 blur-md group-hover:blur-lg transition-all duration-500"></div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition duration-700">
              <img
                src="https://i.pinimg.com/736x/19/da/79/19da796d18293454089f865b7f81752f.jpg"
                alt="SakuraGlow"
                className="object-cover w-full h-full transition duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-rose-100">
              <span className="text-xs font-medium text-rose-600">Since 2025</span>
            </div>
          </div>
  
          {/* Text and Features */}
          <div className="space-y-8">
            <div>
              <span className="inline-block mb-3 text-sm font-medium text-rose-500 bg-rose-50 px-3 py-1 rounded-full">
                Japanese Beauty Philosophy
              </span>
              <h2 className="text-5xl font-bold text-gray-800 mb-4 leading-tight">
                The Art of <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500">SakuraGlow</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                At SakuraGlow, we believe skincare is more than routine—it's a mindful ceremony. Drawing from centuries-old Japanese botanicals and modern science, each product is a love letter to your skin's natural radiance.
              </p>
            </div>
  
            <div className="grid grid-cols-2 gap-5">
              {[
                {
                  icon: "🌸",
                  title: "Sakura Infusion",
                  desc: "Antioxidant-rich cherry blossom extracts"
                },
                {
                  icon: "🌱",
                  title: "Plant-Powered",
                  desc: "97% naturally derived ingredients"
                },
                {
                  icon: "🧴",
                  title: "pH Balanced",
                  desc: "Respects your skin's microbiome"
                },
                {
                  icon: "✨",
                  title: "Glow Complex",
                  desc: "Our signature brightening blend"
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/90 backdrop-blur-md rounded-xl p-5 border border-rose-50 hover:border-rose-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                >
                  <div className="text-2xl mb-3 text-rose-400 group-hover:text-rose-500 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-gray-800 font-semibold mb-1.5">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
  
        
          </div>
        </div>
  
        {/* CSS for floating animation */}
        <style jsx>{`
          @keyframes float {
            0% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-50px) rotate(180deg);
            }
            100% {
              transform: translateY(-100px) rotate(360deg);
            }
          }
          .sakura-petal {
            will-change: transform;
          }
        `}</style>
      </section>
    );
  };
  
  export default AboutSection;