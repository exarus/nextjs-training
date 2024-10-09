export const IconLike = ({ className, width = 20, height = 20 }: PropTypes) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M18.4134 2.83508C17.3781 1.71219 15.9575 1.09375 14.413 1.09375C13.2585 1.09375 12.2012 1.45874 11.2704 2.1785C10.8008 2.54181 10.3752 2.9863 10 3.5051C9.62494 2.98645 9.19922 2.54181 8.7294 2.1785C7.79877 1.45874 6.74149 1.09375 5.58701 1.09375C4.04251 1.09375 2.62177 1.71219 1.58646 2.83508C0.563507 3.94485 0 5.46097 0 7.10434C0 8.79578 0.630341 10.3441 1.98364 11.9771C3.19427 13.4378 4.93423 14.9207 6.94916 16.6377C7.63718 17.2241 8.41705 17.8888 9.22684 18.5968C9.44077 18.7842 9.71527 18.8873 10 18.8873C10.2846 18.8873 10.5592 18.7842 10.7729 18.5971C11.5826 17.8889 12.363 17.224 13.0513 16.6373C15.0659 14.9205 16.8059 13.4378 18.0165 11.9769C19.3698 10.3441 20 8.79578 20 7.10419C20 5.46097 19.4365 3.94485 18.4134 2.83508Z"
      fill="currentColor"
    />
  </svg>
);

type PropTypes = {
  className?: string;
  width?: number;
  height?: number;
};