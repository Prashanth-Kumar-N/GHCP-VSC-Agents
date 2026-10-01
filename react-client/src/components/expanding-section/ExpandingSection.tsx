import React, { useEffect, useState } from "react";

interface ExpandingSectionProps {
  title?: string;
  children: React.ReactNode;
  expandableContent: React.ReactNode | "loading" | null;
  headerChildren?: React.ReactNode;
  scrollToID?: string;
}

export default function ExpandingSection({
  title = "",
  children,
  expandableContent,
  headerChildren,
  scrollToID,
}: ExpandingSectionProps) {
 /*  const [exContent, setExpandableContent] = useState<
    React.ReactNode | "loading" | null
  >(null);
  useEffect(() => {
    if (expandableContent === null) {
      setTimeout(() => setExpandableContent(expandableContent), 2000);
    } else {
      setExpandableContent(expandableContent);
    }
  }, [expandableContent]); */
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm ">
      <div className="flex items-center justify-between mb-4 flex-col sm:flex-row gap-y-2">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        {headerChildren && (
          <div className="text-gray-500">{headerChildren}</div>
        )}
        {/* <Button
          icon={isExpanded ? "pi pi-chevron-up" : "pi pi-chevron-down"}
          rounded
          onClick={toggleExpand}
          className="p-button-text p-button-plain"
        /> */}
      </div>

      {/* Always visible content */}
      <div className="text-gray-700 mb-4">{children}</div>

      {/* Expandable content with smooth height animation */}
      <div
        id={scrollToID || "expanding-section-container"}
        className={`overflow-hidden transition-all duration-1000 ease-in-out ${
          !!expandableContent ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div
          className={`text-gray-700 border-t border-gray-200 pt-4 overflow-y-auto transition-all duration-1000 ${!!expandableContent ? "max-h-[600px]" : "max-h-0"}`}
          id={scrollToID || ""}
        >
          {expandableContent === "loading" ? <p>Loading...</p> : expandableContent}
        </div>
      </div>
    </div>
  );
}
