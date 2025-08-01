export default function ProgressBar({ current, total }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
      <div
        className="bg-blue-600 h-4 rounded-full"
        style={{ width: `${(current / total) * 100}%` }}
      />
    </div>
  );
}
