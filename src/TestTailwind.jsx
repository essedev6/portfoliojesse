import React from 'react';

const TestTailwind = () => {
  return (
    <div className="font-outfit min-h-screen bg-dark p-8 space-y-8">
      {/* Color Section */}
      <section className="space-y-4">
        <h2 className="text-primary text-3xl font-bold border-b-2 border-secondary pb-2">
          Color Palette Test
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-primary text-dark rounded-lg shadow-lg">
            Primary (#45B649)
          </div>
          <div className="p-4 bg-secondary text-dark rounded-lg shadow-lg">
            Secondary (#C5E35B)
          </div>
          <div className="p-4 bg-accent text-dark rounded-lg shadow-lg">
            Accent (#FFD700)
          </div>
          <div className="p-4 bg-dark border-2 border-primary text-primary rounded-lg shadow-lg">
            Dark Background
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="space-y-4">
        <h2 className="text-primary text-3xl font-bold border-b-2 border-secondary pb-2">
          Typography Test
        </h2>
        
        <div className="space-y-2">
          <h1 className="text-4xl text-primary">Heading 1 - Outfit Font</h1>
          <h2 className="text-3xl text-secondary">Heading 2</h2>
          <p className="text-lg text-primary">Body text - Normal weight</p>
          <p className="text-lg text-primary font-light">Body text - Light weight</p>
          <p className="text-lg text-primary font-bold">Body text - Bold weight</p>
        </div>
      </section>

      {/* Form Elements Test */}
      <section className="space-y-4">
        <h2 className="text-primary text-3xl font-bold border-b-2 border-secondary pb-2">
          Form Elements Test (@tailwindcss/forms)
        </h2>
        
        <form className="space-y-4 max-w-md">
          <input
            type="text"
            placeholder="Text input"
            className="w-full px-4 py-2 rounded-lg border-2 border-primary bg-dark text-primary focus:ring-2 focus:ring-accent"
          />
          
          <select className="w-full px-4 py-2 rounded-lg border-2 border-primary bg-dark text-primary">
            <option>Select option</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
          
          <button className="px-6 py-2 bg-accent text-dark rounded-lg hover:bg-opacity-90 transition-all">
            Submit Button
          </button>
        </form>
      </section>

      {/* Responsive Test */}
      <section className="space-y-4">
        <h2 className="text-primary text-3xl font-bold border-b-2 border-secondary pb-2">
          Responsive Test
        </h2>
        
        <div className="bg-primary p-4 md:bg-secondary lg:bg-accent xl:bg-dark xl:text-primary rounded-lg">
          <p className="text-center">
            This box changes color based on screen size:
            <br />
            <span className="text-sm opacity-80">
              (Mobile: Primary, MD: Secondary, LG: Accent, XL: Dark)
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default TestTailwind;