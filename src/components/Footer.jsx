// Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 mt-16">
      <div className="container mx-auto px-6 py-8 text-center">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} <span className="font-medium text-slate-700">Art Gallery</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}