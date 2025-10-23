import Link from "next/link";

interface TopBarProps {
  title: string;
  actionLabel: string;
  actionHref: string;
}

export default function TopBar({
  title,
  actionLabel,
  actionHref
}: TopBarProps) {
  return (
    <div
      className="sticky top-0 z-50 border-b border-gray-200 backdrop-blur-md bg-white/80"
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-col sm:flex-row md:flex-row items-center justify-center gap-4">
          {/* Left: Breadcrumbs + Title */}
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold font-poppins">
              {title}
            </h1>
          </div>

          {/* Right: Action Button */}
          <Link 
            href={actionHref} 
            target="_blank"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200 font-poppins"
          >
            {actionLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
