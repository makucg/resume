import type { IconSvgProps } from '@/types';

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const LinkedInIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM8.339 18.338H5.674V9h2.665v9.338zm-1.333-10.41c-.855 0-1.549-.695-1.549-1.55 0-.856.694-1.551 1.549-1.551.856 0 1.55.695 1.55 1.551 0 .855-.694 1.55-1.55 1.55zm12.002 10.41h-2.665v-4.667c0-1.111-.022-2.541-1.548-2.541-1.55 0-1.787 1.213-1.787 2.464v4.744H9.99V9h2.555v1.27h.036c.355-.671 1.223-1.377 2.517-1.377 2.692 0 3.188 1.771 3.188 4.074v5.37z"
        fill="currentColor"
      />
    </svg>
  );
};

export const HomeIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M12 2.1l9.9 9.9-1.4 1.4L18 10.8V20H6v-9.2l-2.5 2.6-1.4-1.4L12 2.1zm1 8.2V18h4v-6h2l-7-7-7 7h2v6h4v-7.7l1 1.1z"
        fill="currentColor"
      />
    </svg>
  );
};

export const ProfileIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 3a3 3 0 110 6 3 3 0 010-6zm0 14c-2.5 0-4.7-1.2-6-3.1.1-2 4-3.1 6-3.1s5.9 1.1 6 3.1c-1.3 1.9-3.5 3.1-6 3.1z"
        fill="currentColor"
      />
    </svg>
  );
};

export const ExperienceIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M2 6h6l2-2h4l2 2h6v14H2V6zm6 3h8v2H8V9zm0 4h8v2H8v-2z"
        fill="currentColor"
      />
    </svg>
  );
};

export const StudentsIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M12 2l9 4-9 4-9-4 9-4zm0 7.7l6.5-2.9 1.5 3.3-8 4.9-8-4.9 1.5-3.3L12 9.7zM3 17h18v2H3v-2zm5-3h8v1H8v-1z"
        fill="currentColor"
      />
    </svg>
  );
};

export const SkillsIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M12 2l2.1 6.3H20l-5.1 3.8L16 18l-4-2.9L8 18l1.1-5.9L4 8.3h5.9L12 2z"
        fill="currentColor"
      />
    </svg>
  );
};

export const ProjectsIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M12 2L3 6v12l9 4 9-4V6l-9-4zm0 2.2l6.7 3.1v7.4l-6.7 3.1-6.7-3.1V7.3L12 4.2zm-3 5h6v6H9V9z"
        fill="currentColor"
      />
    </svg>
  );
};
