"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Ruler, Sparkles, Check, Info, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  category?: string;
  onSelectSize?: (size: string) => void;
}

export function SizeGuideModal({
  isOpen,
  onClose,
  category = "fashion",
  onSelectSize,
}: SizeGuideModalProps) {
  const [unit, setUnit] = useState<"in" | "cm">("in");
  const [activeTab, setActiveTab] = useState<"chart" | "fit_finder">("chart");

  // Fit Finder states
  const [height, setHeight] = useState(170); // cm
  const [weight, setWeight] = useState(65); // kg
  const [fitPreference, setFitPreference] = useState<"slim" | "regular" | "relaxed">("regular");
  const [calculatedSize, setCalculatedSize] = useState<string | null>(null);

  const calculateBestFit = () => {
    // Height & Weight BMI based size estimation
    const bmi = weight / ((height / 100) * (height / 100));
    let base = "M";

    if (category.toLowerCase().includes("shoe") || category.toLowerCase().includes("footwear")) {
      // Shoe estimate
      if (height < 160) base = "UK 6";
      else if (height < 170) base = "UK 7";
      else if (height < 178) base = "UK 8";
      else if (height < 185) base = "UK 9";
      else base = "UK 10";
    } else {
      if (bmi < 19.5) base = fitPreference === "slim" ? "XS" : "S";
      else if (bmi < 23) base = fitPreference === "relaxed" ? "L" : "M";
      else if (bmi < 27) base = fitPreference === "slim" ? "M" : "L";
      else if (bmi < 31) base = fitPreference === "relaxed" ? "XXL" : "XL";
      else base = "XXL";
    }

    setCalculatedSize(base);
  };

  if (!isOpen) return null;

  const isShoe = category.toLowerCase().includes("shoe") || category.toLowerCase().includes("footwear");

  const apparelDataInches = [
    { size: "XS", bust: "32-34", waist: "26-28", hips: "34-36", length: "42" },
    { size: "S", bust: "34-36", waist: "28-30", hips: "36-38", length: "43" },
    { size: "M", bust: "36-38", waist: "30-32", hips: "38-40", length: "44" },
    { size: "L", bust: "38-41", waist: "32-35", hips: "40-43", length: "45" },
    { size: "XL", bust: "41-44", waist: "35-38", hips: "43-46", length: "46" },
    { size: "XXL", bust: "44-47", waist: "38-41", hips: "46-49", length: "47" },
  ];

  const apparelDataCm = [
    { size: "XS", bust: "81-86", waist: "66-71", hips: "86-91", length: "106" },
    { size: "S", bust: "86-91", waist: "71-76", hips: "91-96", length: "109" },
    { size: "M", bust: "91-96", waist: "76-81", hips: "96-101", length: "111" },
    { size: "L", bust: "96-104", waist: "81-89", hips: "101-109", length: "114" },
    { size: "XL", bust: "104-112", waist: "89-96", hips: "109-117", length: "116" },
    { size: "XXL", bust: "112-119", waist: "96-104", hips: "117-124", length: "119" },
  ];

  const shoeData = [
    { uk: "UK 6", us: "US 7", eu: "EU 40", footCm: "25.0 cm", footIn: "9.8 in" },
    { uk: "UK 7", us: "US 8", eu: "EU 41", footCm: "25.8 cm", footIn: "10.1 in" },
    { uk: "UK 8", us: "US 9", eu: "EU 42.5", footCm: "26.7 cm", footIn: "10.5 in" },
    { uk: "UK 9", us: "US 10", eu: "EU 44", footCm: "27.5 cm", footIn: "10.8 in" },
    { uk: "UK 10", us: "US 11", eu: "EU 45", footCm: "28.3 cm", footIn: "11.1 in" },
    { uk: "UK 11", us: "US 12", eu: "EU 46", footCm: "29.2 cm", footIn: "11.5 in" },
  ];

  const currentApparel = unit === "in" ? apparelDataInches : apparelDataCm;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-neutral-100 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-neutral-50/50">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center font-bold">
                <Ruler className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-neutral-900">
                  {isShoe ? "Footwear Size & Fit Guide" : "Size Guide & Smart Fit Finder"}
                </h3>
                <p className="text-xs text-neutral-500">
                  NexMart accurate measurement standards
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-neutral-100 px-6 pt-3 bg-white">
            <button
              onClick={() => setActiveTab("chart")}
              className={`pb-3 font-semibold text-sm mr-6 border-b-2 transition flex items-center gap-1.5 ${
                activeTab === "chart"
                  ? "border-primary-600 text-primary-600"
                  : "border-transparent text-neutral-500 hover:text-neutral-800"
              }`}
            >
              <Ruler className="w-4 h-4" /> Size Chart
            </button>
            <button
              onClick={() => setActiveTab("fit_finder")}
              className={`pb-3 font-semibold text-sm border-b-2 transition flex items-center gap-1.5 ${
                activeTab === "fit_finder"
                  ? "border-primary-600 text-primary-600"
                  : "border-transparent text-neutral-500 hover:text-neutral-800"
              }`}
            >
              <Sparkles className="w-4 h-4 text-accent-500" /> Smart Fit Finder
              <span className="bg-primary-100 text-primary-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                Interactive
              </span>
            </button>
          </div>

          {/* Body */}
          <div className="p-6 overflow-y-auto space-y-6">
            {activeTab === "chart" ? (
              <div className="space-y-4">
                {/* Unit Switcher */}
                {!isShoe && (
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-neutral-500">
                      Standard Indian (IN) & International sizes
                    </span>
                    <div className="flex bg-neutral-100 p-0.5 rounded-lg text-xs font-bold">
                      <button
                        onClick={() => setUnit("in")}
                        className={`px-3 py-1 rounded-md transition ${
                          unit === "in" ? "bg-white text-neutral-900 shadow-sm" : "text-neutral-500"
                        }`}
                      >
                        Inches
                      </button>
                      <button
                        onClick={() => setUnit("cm")}
                        className={`px-3 py-1 rounded-md transition ${
                          unit === "cm" ? "bg-white text-neutral-900 shadow-sm" : "text-neutral-500"
                        }`}
                      >
                        Centimeters
                      </button>
                    </div>
                  </div>
                )}

                {/* Table */}
                <div className="border border-neutral-200 rounded-xl overflow-hidden shadow-sm">
                  {isShoe ? (
                    <table className="w-full text-left text-sm">
                      <thead className="bg-neutral-100 text-neutral-700 font-bold border-b border-neutral-200">
                        <tr>
                          <th className="p-3">UK / India</th>
                          <th className="p-3">US</th>
                          <th className="p-3">Euro (EU)</th>
                          <th className="p-3">Foot Length</th>
                          <th className="p-3 text-right">Select</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-100">
                        {shoeData.map((row) => (
                          <tr key={row.uk} className="hover:bg-primary-50/40 transition">
                            <td className="p-3 font-bold text-neutral-900">{row.uk}</td>
                            <td className="p-3 text-neutral-600">{row.us}</td>
                            <td className="p-3 text-neutral-600">{row.eu}</td>
                            <td className="p-3 text-neutral-600">{row.footCm}</td>
                            <td className="p-3 text-right">
                              <button
                                onClick={() => {
                                  onSelectSize?.(row.uk);
                                  onClose();
                                }}
                                className="text-xs font-bold text-primary-600 hover:text-primary-800 bg-primary-50 px-2.5 py-1 rounded-md transition"
                              >
                                Choose
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <table className="w-full text-left text-sm">
                      <thead className="bg-neutral-100 text-neutral-700 font-bold border-b border-neutral-200">
                        <tr>
                          <th className="p-3">Size</th>
                          <th className="p-3">Bust/Chest ({unit})</th>
                          <th className="p-3">Waist ({unit})</th>
                          <th className="p-3">Hips ({unit})</th>
                          <th className="p-3">Length ({unit})</th>
                          <th className="p-3 text-right">Select</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-100">
                        {currentApparel.map((row) => (
                          <tr key={row.size} className="hover:bg-primary-50/40 transition">
                            <td className="p-3 font-bold text-neutral-900">{row.size}</td>
                            <td className="p-3 text-neutral-600">{row.bust}</td>
                            <td className="p-3 text-neutral-600">{row.waist}</td>
                            <td className="p-3 text-neutral-600">{row.hips}</td>
                            <td className="p-3 text-neutral-600">{row.length}</td>
                            <td className="p-3 text-right">
                              <button
                                onClick={() => {
                                  onSelectSize?.(row.size);
                                  onClose();
                                }}
                                className="text-xs font-bold text-primary-600 hover:text-primary-800 bg-primary-50 px-2.5 py-1 rounded-md transition"
                              >
                                Choose
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>

                {/* How to measure */}
                <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100 text-xs text-neutral-600 space-y-1.5">
                  <div className="font-bold text-neutral-800 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-primary-500" /> Measuring Tips:
                  </div>
                  <p>• <strong>Bust / Chest:</strong> Measure under arms around the fullest part of your chest.</p>
                  <p>• <strong>Waist:</strong> Measure around natural waistline, keeping tape comfortably loose.</p>
                  <p>• <strong>Length:</strong> Measured from high point of shoulder to garment hem.</p>
                </div>
              </div>
            ) : (
              /* Fit Finder Tab */
              <div className="space-y-5">
                <div className="bg-primary-50 p-4 rounded-xl border border-primary-100 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-primary-900">
                    <strong className="font-bold block text-sm">Find Your Perfect NexMart Fit</strong>
                    Enter your height, weight, and preferred style to receive our personalized size recommendation.
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Height Slider */}
                  <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100 space-y-2">
                    <div className="flex justify-between items-center text-sm font-bold text-neutral-800">
                      <span>Your Height</span>
                      <span className="text-primary-600 font-mono">
                        {height} cm ({Math.floor(height / 30.48)}&apos;{Math.round((height % 30.48) / 2.54)}&quot;)
                      </span>
                    </div>
                    <input
                      type="range"
                      min={140}
                      max={210}
                      value={height}
                      onChange={(e) => {
                        setHeight(Number(e.target.value));
                        setCalculatedSize(null);
                      }}
                      className="w-full accent-primary-600 cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-neutral-400">
                      <span>140 cm</span>
                      <span>175 cm</span>
                      <span>210 cm</span>
                    </div>
                  </div>

                  {/* Weight Slider */}
                  <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100 space-y-2">
                    <div className="flex justify-between items-center text-sm font-bold text-neutral-800">
                      <span>Your Weight</span>
                      <span className="text-primary-600 font-mono">{weight} kg ({Math.round(weight * 2.20462)} lbs)</span>
                    </div>
                    <input
                      type="range"
                      min={40}
                      max={120}
                      value={weight}
                      onChange={(e) => {
                        setWeight(Number(e.target.value));
                        setCalculatedSize(null);
                      }}
                      className="w-full accent-primary-600 cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-neutral-400">
                      <span>40 kg</span>
                      <span>80 kg</span>
                      <span>120 kg</span>
                    </div>
                  </div>
                </div>

                {/* Fit Preference */}
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                    Preferred Fit
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "slim", label: "Slim Fit", desc: "Closer to body" },
                      { id: "regular", label: "Regular Fit", desc: "Standard comfort" },
                      { id: "relaxed", label: "Relaxed Fit", desc: "Loose & breezy" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          setFitPreference(item.id as any);
                          setCalculatedSize(null);
                        }}
                        className={`p-3 rounded-xl border text-center transition ${
                          fitPreference === item.id
                            ? "border-primary-600 bg-primary-50/50 text-primary-900 font-bold shadow-sm"
                            : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300"
                        }`}
                      >
                        <div className="text-sm font-bold">{item.label}</div>
                        <div className="text-[10px] text-neutral-500 mt-0.5">{item.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Calculate CTA or Result */}
                {!calculatedSize ? (
                  <Button
                    type="button"
                    onClick={calculateBestFit}
                    size="lg"
                    className="w-full font-bold bg-primary-600 hover:bg-primary-700 text-white rounded-xl shadow-md shadow-primary-500/20 py-3"
                  >
                    Calculate Recommended Size
                  </Button>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-5 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border-2 border-emerald-300 text-center space-y-3"
                  >
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                      <Check className="w-3.5 h-3.5" /> 96% Match for Your Profile
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-neutral-500 block uppercase">
                        Recommended Size
                      </span>
                      <span className="text-4xl font-display font-black text-emerald-700">
                        {calculatedSize}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-600 max-w-sm mx-auto">
                      Based on {height}cm, {weight}kg, and {fitPreference} fit preference in Vadodara standard sizing.
                    </p>
                    <div className="flex justify-center gap-3 pt-2">
                      <Button
                        type="button"
                        onClick={() => {
                          onSelectSize?.(calculatedSize);
                          onClose();
                        }}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2 rounded-xl shadow"
                      >
                        Apply Size {calculatedSize}
                      </Button>
                      <button
                        type="button"
                        onClick={() => setCalculatedSize(null)}
                        className="text-xs font-semibold text-neutral-500 hover:text-neutral-800 underline"
                      >
                        Recalculate
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-3.5 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
            <span className="flex items-center gap-1">
              <Info className="w-3.5 h-3.5 text-primary-500" /> Easy 7-day size exchange across Vadodara
            </span>
            <Button variant="ghost" size="sm" onClick={onClose} className="font-semibold text-neutral-700">
              Close
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
