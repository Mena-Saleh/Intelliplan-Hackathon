export default function RequestButton({
  action,
  label = "+ New Request",
  styles,
}: {
  action: () => void;
  label?: string;
  styles?: string;
}) {
  return (
    <button
      type="button"
      onClick={action}
      className={`${styles} rounded-xl bg-accent py-3 font-medium text-white transition duration-200 hover:opacity-90`}
    >
      {label}
    </button>
  );
}
