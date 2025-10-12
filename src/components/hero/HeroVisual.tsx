import Image from 'next/image';
import { HeroPattern } from './svg/HeroPattern';

export function HeroVisual() {
  return (
    <div className="relative flex justify-center md:justify-end">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <HeroPattern />
      </div>
      
      {/* Photo Badge - Placeholder until image is provided */}
      <div className="relative z-10 w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56">
        <div className="w-full h-full rounded-2xl shadow-lg bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
          <div className="text-center text-red-600">
            <div className="w-12 h-12 mx-auto mb-2 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <p className="text-xs font-medium">RMS Tyres</p>
            <p className="text-xs opacity-75">Mobile Fitting</p>
          </div>
        </div>
      </div>
    </div>
  );
}
