const fs = require('fs');
const path = require('path');

console.log('🔍 Running CSS build tool verification...');

// 1. Check package installations
try {
  const pkg = JSON.parse(fs.readFileSync('package.json'));
  const deps = {...pkg.dependencies, ...pkg.devDependencies};
  
  console.log('\n📦 Package Check:');
  console.table({
    tailwindcss: Object.keys(deps).includes('tailwindcss'),
    postcss: Object.keys(deps).includes('postcss'),
    autoprefixer: Object.keys(deps).includes('autoprefixer')
  });
} catch (err) {
  console.error('❌ Could not read package.json');
}

// 2. Check config files
console.log('\n⚙️ Config File Check:');
console.table({
  'tailwind.config.js': fs.existsSync('tailwind.config.js'),
  'postcss.config.js': fs.existsSync('postcss.config.js'),
  'CSS file': fs.existsSync('src/index.css')
});

// 3. Create test file
fs.writeFileSync('src/verify.css', `
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .test-verify {
    @apply bg-celluloid-obsidian text-celluloid-gold;
    user-select: none;
  }
}`);
console.log('\n✅ Created test CSS file at src/verify.css');

console.log('\n👉 Manual Verification Steps:');
console.log('1. Import "src/verify.css" in your main JS file');
console.log('2. Add <div class="test-verify">Test</div> to a component');
console.log('3. Check if it shows dark background with gold text');