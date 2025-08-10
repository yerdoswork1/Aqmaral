interface Props {
  className?: string;
}

export const MailIcon: React.FC<Props> = ({ className }: Props) => {
  return (
    <svg
      width="40"
      height="39"
      viewBox="0 0 40 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.6661 6.5H33.3328C35.1661 6.5 36.6661 7.9625 36.6661 9.75V29.25C36.6661 31.0375 35.1661 32.5 33.3328 32.5H6.6661C4.83276 32.5 3.33276 31.0375 3.33276 29.25V9.75C3.33276 7.9625 4.83276 6.5 6.6661 6.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36.6661 9.75L19.9994 21.125L3.33276 9.75"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
