export default function Newsletter() {
    return (
      <section className="bg-blue-500 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Sign Up for Our Newsletters</h2>
            <p className="mb-6 text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Input your email address here"
                className="flex-1 px-4 py-2 rounded text-gray-900"
              />
              <button className="bg-[#F15A24] text-white px-6 py-2 rounded hover:bg-[#F15A24]/90">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  