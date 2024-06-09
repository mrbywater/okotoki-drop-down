export const SWITCH_BUTTON = [
  {
    name: 'FAVORITES',
    icon: <CodiconStarFull />,
    value: false,
  },
  {
    name: 'ALL COINS',
    value: true,
  },
];

export function CodiconStarEmpty(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.595 6.252L8 1L6.405 6.252H1l4.373 3.4L3.75 15L8 11.695L12.25 15l-1.623-5.348L15 6.252zm-7.247.47H6.72L8 2.507L6.72 6.722zm3.537 2.75l-1.307 4.305zm7.767-2.75H9.28zm-8.75.9h2.366L8 5.214l.732 2.41h2.367l-1.915 1.49l.731 2.409L8 10.032l-1.915 1.49l.731-2.41l-1.915-1.49z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function CodiconStarFull(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.595 6.252L8 1L6.405 6.252H1l4.373 3.4L3.75 15L8 11.695L12.25 15l-1.623-5.348L15 6.252z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function CodiconSearch(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}>
      <path
        fill="currentColor"
        d="M15.25 0a8.25 8.25 0 0 0-6.18 13.72L1 22.88l1.12 1l8.05-9.12A8.251 8.251 0 1 0 15.25.01zm0 15a6.75 6.75 0 1 1 0-13.5a6.75 6.75 0 0 1 0 13.5"
      />
    </svg>
  );
}

export function CodiconClose(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m8 8.707l3.646 3.647l.708-.707L8.707 8l3.647-3.646l-.707-.708L8 7.293L4.354 3.646l-.707.708L7.293 8l-3.646 3.646l.707.708z"
        clipRule="evenodd"
      />
    </svg>
  );
}
