"use client";

interface CodeBlockData {
  code: string;
}

function CustomCodeRenderer({ data }: { data: CodeBlockData }) {
  return (
    <pre className="bg-gray-800 rounded-md p-4">
      <code className="text-gray-100 text-sm">{data.code}</code>
    </pre>
  );
}

export default CustomCodeRenderer;
