export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Crypto Forecast. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
