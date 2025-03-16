import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string | React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="bg-black/30 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-black/40 transition-colors duration-200"
        onClick={onToggle}
      >
        <h3 className="text-[#d8a12c] font-semibold pr-4">{question}</h3>
        {isOpen ? (
          <ChevronUp className="flex-shrink-0 text-[#d8a12c]" />
        ) : (
          <ChevronDown className="flex-shrink-0 text-[#d8a12c]" />
        )}
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-6 pb-4 text-gray-300">
          {answer}
        </div>
      </div>
    </div>
  );
}
