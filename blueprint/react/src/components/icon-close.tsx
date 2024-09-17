interface Props {
  className: string;
  color: string;
  size: number;
}

export default function IconClose({ className, color, size }: Props) {
  return (
    <div className={className} aria-hidden="true">
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.51469 24.4853C7.12417 24.0948 7.12417 23.4616 7.51469 23.0711L23.071 7.51471C23.4616 7.12419 24.0947 7.12419 24.4853 7.51471C24.8758 7.90524 24.8758 8.5384 24.4853 8.92893L8.92891 24.4853C8.53838 24.8758 7.90522 24.8758 7.51469 24.4853Z"
          fill={color}
        ></path>
        <path
          d="M7.5147 8.92894C7.12417 8.53842 7.12417 7.90525 7.51469 7.51473C7.90522 7.1242 8.53838 7.1242 8.92891 7.51473L24.4853 23.0711C24.8758 23.4616 24.8758 24.0948 24.4853 24.4853C24.0947 24.8758 23.4616 24.8758 23.071 24.4853L7.5147 8.92894Z"
          fill={color}
        ></path>
      </svg>
    </div>
  );
}
