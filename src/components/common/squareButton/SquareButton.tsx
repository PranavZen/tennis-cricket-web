import React, { MouseEvent, useState } from "react";
import { Link } from "react-router-dom";
import "../squareButton/cta.css";

// Define the type for component props
interface SquareButtonProps {
  classNameText: string;
  btnName: string;
  svgFill: string;
  textColor?: string;
  bordercolor?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void | Promise<void>;
  type?: "button" | "submit" | "reset";
  btnLinkUrl?: string;
  disabled?: boolean;
}

const SquareButton: React.FC<SquareButtonProps> = ({
  classNameText,
  btnName,
  svgFill,
  textColor,
  bordercolor,
  onClick,
  type = "button", // Default type is button
  btnLinkUrl,
  disabled
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    setIsLoading(true);

    if (onClick) {
      const result = onClick(e);

      if (result instanceof Promise) {
        result.finally(() => setIsLoading(false));
      } else {
        setIsLoading(false);
      }
    }
  };

  // Conditionally render either a Link or a button
  if (btnLinkUrl) {
    return (
      <Link
        to={btnLinkUrl}
        className={classNameText}
        style={{ color: textColor, borderColor: bordercolor }}
        onClick={handleClick}
      >
        {isLoading ? (
          <span className="spinner"></span>
        ) : (
          <>
            {btnName}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
              >
                <path
                  d="M0.295764 0.290761C0.202046 0.383714 0.12766 0.494301 0.0768974 0.616147C0.0261345 0.737992 -5.73988e-07 0.868683 -5.68218e-07 1.00068C-5.62449e-07 1.13268 0.0261345 1.26337 0.0768974 1.38521C0.12766 1.50706 0.202046 1.61765 0.295764 1.7106L4.87525 6.29008C4.96896 6.38303 5.04335 6.49362 5.09411 6.61547C5.14488 6.73731 5.17101 6.868 5.17101 7C5.17101 7.132 5.14488 7.26269 5.09411 7.38453C5.04335 7.50638 4.96896 7.61697 4.87525 7.70992L0.295765 12.2894C0.202047 12.3824 0.127661 12.4929 0.0768979 12.6148C0.026135 12.7366 -4.95108e-08 12.8673 -4.37411e-08 12.9993C-3.79713e-08 13.1313 0.026135 13.262 0.0768979 13.3839C0.127661 13.5057 0.202047 13.6163 0.295765 13.7092C0.483106 13.8955 0.736529 14 1.00068 14C1.26484 14 1.51826 13.8955 1.7056 13.7092L6.29509 9.11976C6.85682 8.55732 7.17235 7.79491 7.17235 7C7.17235 6.20509 6.85682 5.44268 6.29509 4.88024L1.7056 0.290761C1.51826 0.104531 1.26484 -5.52879e-08 1.00068 -4.37413e-08C0.736528 -3.21947e-08 0.483105 0.104531 0.295764 0.290761Z"
                  fill={svgFill}
                />
              </svg>
            </span>
          </>
        )}
      </Link>
    );
  } else {
    return (
      <button
        className={classNameText}
        style={{ color: textColor, borderColor: bordercolor }}
        onClick={handleClick}
        type={type}
        disabled={disabled || isLoading}
      >
        {isLoading ? (
          <span className="spinner"></span>
        ) : (
          <>
            {btnName}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
              >
                <path
                  d="M0.295764 0.290761C0.202046 0.383714 0.12766 0.494301 0.0768974 0.616147C0.0261345 0.737992 -5.73988e-07 0.868683 -5.68218e-07 1.00068C-5.62449e-07 1.13268 0.0261345 1.26337 0.0768974 1.38521C0.12766 1.50706 0.202046 1.61765 0.295764 1.7106L4.87525 6.29008C4.96896 6.38303 5.04335 6.49362 5.09411 6.61547C5.14488 6.73731 5.17101 6.868 5.17101 7C5.17101 7.132 5.14488 7.26269 5.09411 7.38453C5.04335 7.50638 4.96896 7.61697 4.87525 7.70992L0.295765 12.2894C0.202047 12.3824 0.127661 12.4929 0.0768979 12.6148C0.026135 12.7366 -4.95108e-08 12.8673 -4.37411e-08 12.9993C-3.79713e-08 13.1313 0.026135 13.262 0.0768979 13.3839C0.127661 13.5057 0.202047 13.6163 0.295765 13.7092C0.483106 13.8955 0.736529 14 1.00068 14C1.26484 14 1.51826 13.8955 1.7056 13.7092L6.29509 9.11976C6.85682 8.55732 7.17235 7.79491 7.17235 7C7.17235 6.20509 6.85682 5.44268 6.29509 4.88024L1.7056 0.290761C1.51826 0.104531 1.26484 -5.52879e-08 1.00068 -4.37413e-08C0.736528 -3.21947e-08 0.483105 0.104531 0.295764 0.290761Z"
                  fill={svgFill}
                />
              </svg>
            </span>
          </>
        )}
      </button>
    );
  }
};

export default SquareButton;
