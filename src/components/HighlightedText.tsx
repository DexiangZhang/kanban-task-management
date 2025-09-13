"use client";

export const HighlightedText = ({
  text,
  highlight,
}: {
  text: string;
  highlight: string;
}) => {
  if (!highlight?.trim()) {
    return <span>{text}</span>;
  }

  const lowerText = text?.toLowerCase();
  const lowerHighlight = highlight?.toLowerCase();
  const startIndex = lowerText?.indexOf(lowerHighlight);

  if (startIndex === -1) {
    return <span>{text}</span>;
  }

  const endIndex = startIndex + highlight?.length;

  return (
    <span>
      {text?.substring(0, startIndex)}
      <span className="bg-yellow-200 font-bold">
        {text?.substring(startIndex, endIndex)}
      </span>
      {text?.substring(endIndex)}
    </span>
  );
};
