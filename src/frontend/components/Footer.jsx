const Footer = () => {
    return (
      <footer className="relative bg-gradient-to-b from-rose-50 to-rose-100 border-t border-rose-200 pt-16 pb-8">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-[url('https://www.transparentpng.com/thumb/waves/wavy-line-transparent-background-25.png')] bg-repeat-x opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Brand column */}
            <div className="space-y-5">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-rose-700">SakuraGlow</span>
                <span className="ml-2 text-xs bg-rose-500 text-white px-2 py-0.5 rounded-full">®</span>
              </div>
              <p className="text-sm text-rose-800/80 leading-relaxed">
                Japanese-inspired skincare rituals for your daily glow ceremony.
              </p>
              <div className="flex space-x-4">
                {['instagram', 'facebook', 'twitter', 'pinterest'].map((social) => (
                  <button 
                    key={social}
                    className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-rose-600 hover:bg-rose-500 hover:text-white transition-colors shadow-sm"
                  >
                    <span className="sr-only">{social}</span>
                    <span className="text-xs font-bold">{social.charAt(0).toUpperCase()}</span>
                  </button>
                ))}
              </div>
            </div>
  
           
  
            <div>
              <h3 className="text-sm font-semibold text-rose-900 uppercase tracking-wider mb-5">Support</h3>
              <ul className="space-y-3">
                {['Contact Us', 'FAQs', 'Shipping', 'Returns', 'Skincare Quiz'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-sm text-rose-800 hover:text-rose-600 transition-colors flex items-start"
                    >
                      <span className="mr-2 text-rose-400">›</span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            <div>
              <h3 className="text-sm font-semibold text-rose-900 uppercase tracking-wider mb-5">Stay Blooming</h3>
              <p className="text-sm text-rose-800/80 mb-4">
                Receive seasonal skincare tips and exclusive offers.
              </p>
              <form className="flex flex-col space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2.5 text-sm rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                />
                <button 
                  type="submit" 
                  className="bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium py-2.5 px-5 rounded-lg transition-colors shadow-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
  
          <div className="pt-8 mt-8 border-t border-rose-200 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-rose-800/60 mb-4 md:mb-0">
              © {new Date().getFullYear()} SakuraGlow. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Accessibility'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-xs text-rose-800/60 hover:text-rose-600 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
  
        <div className="absolute bottom-4 right-6 w-12 h-12 bg-rose-400/10 rounded-full flex items-center justify-center">
          <span className="text-2xl text-rose-500">🌸</span>
        </div>
      </footer>
    );
  };
  
  export default Footer;