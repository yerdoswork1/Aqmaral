interface Props {
  className?: string;
}

export const ChevronIcon: React.FC<Props> = ({ className }: Props) => {
  return (
    <svg
      width="8"
      height="10"
      viewBox="0 0 8 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M1 1L7 5L1 9" stroke="#665A5D" />
    </svg>
  );
};
