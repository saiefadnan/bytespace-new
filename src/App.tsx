import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { mockStats } from './data';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Shell */}
      <main className="flex-1">
        {/* Foundation Hero Preview */}
        <section className="bg-[#003BE2] text-white pt-32 pb-24 relative overflow-hidden">
          <div className="bytespace-container text-center relative z-10">
            <span className="inline-block bg-[#CBFC01] text-[#172400] font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-6">
              ByteSpace Design System & App Shell
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight mb-6">
              Get access to thousands <br />
              <span className="text-[#CBFC01]">Courses Available</span>
            </h1>
            <p className="text-white/80 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-sans">
              Learn in-demand skills from industry experts. Upgrade your career with flexible, hands-on courses.
            </p>

            {/* Quick Stat Pill Preview */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-4">
              {mockStats.map((stat) => (
                <div
                  key={stat.id}
                  className="bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-2xl text-center"
                >
                  <div className="text-2xl font-extrabold text-[#CBFC01] font-display">{stat.value}</div>
                  <div className="text-xs text-white/80 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
