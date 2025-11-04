type ErrorMessageProps = {
  children: React.ReactNode;
};

/**
 * Displays an error message in a styled paragraph.
 * @param children - The error message content to be displayed from props.
 * @returns
 */
export default function ErrorMessage({ children }: ErrorMessageProps) {
  return (
    <p className="bg-red-600 p-2 text-white font-bold text-sm text-center">
      {children}
    </p>
  );
}
