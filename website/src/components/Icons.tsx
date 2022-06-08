import Image from "next/image";
import avatar from "/public/avatar.png";
import { sprinkles } from "design-system";

export const IconAvatar = () => (
  <Image
    src={avatar}
    alt="Samuel Kraft Avatar"
    width="24"
    height="24"
    layout="fixed"
    priority
    className={sprinkles({ borderRadius: "rounded", overflow: "hidden" })}
  />
);

export const IconUser = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 3.75C9.92893 3.75 8.25 5.42893 8.25 7.5C8.25 9.57107 9.92893 11.25 12 11.25C14.0711 11.25 15.75 9.57107 15.75 7.5C15.75 5.42893 14.0711 3.75 12 3.75Z"
      fill="currentColor"
    />
    <path
      d="M8 13.25C5.92893 13.25 4.25 14.9289 4.25 17V18.1883C4.25 18.9415 4.79588 19.5837 5.53927 19.7051C9.8181 20.4037 14.1819 20.4037 18.4607 19.7051C19.2041 19.5837 19.75 18.9415 19.75 18.1883V17C19.75 14.9289 18.0711 13.25 16 13.25H15.6591C15.4746 13.25 15.2913 13.2792 15.1159 13.3364L14.2504 13.6191C12.7881 14.0965 11.2119 14.0965 9.74959 13.6191L8.88407 13.3364C8.70869 13.2792 8.52536 13.25 8.34087 13.25H8Z"
      fill="currentColor"
    />
  </svg>
);

export const IconBlog = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.6066 3.5C14.7392 3.5 14.8664 3.55268 14.9602 3.64645L17.7886 6.47487C17.9838 6.67014 17.9838 6.98672 17.7886 7.18198L8.59619 16.3744C8.53337 16.4372 8.45495 16.4821 8.369 16.5046L4.54057 17.5046C4.36883 17.5494 4.18617 17.4999 4.06066 17.3744C3.93514 17.2489 3.88558 17.0662 3.93044 16.8945L4.93044 13.066C4.95289 12.9801 4.99784 12.9017 5.06066 12.8388L14.253 3.64645C14.3468 3.55268 14.474 3.5 14.6066 3.5Z"
      fill="currentColor"
    />
    <path
      d="M4 19.25C3.58579 19.25 3.25 19.5858 3.25 20C3.25 20.4142 3.58579 20.75 4 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20C19.75 19.5858 19.4142 19.25 19 19.25H4Z"
      fill="currentColor"
    />
  </svg>
);

export const IconHealth = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.4 5.25C4.61914 5.25 2.25 7.3293 2.25 10.0298C2.25 11.8927 3.12235 13.4612 4.27849 14.7604C5.43066 16.0552 6.91714 17.142 8.26097 18.0516L10.5796 19.6211C10.8335 19.793 11.1665 19.793 11.4204 19.6211L13.739 18.0516C14.1687 17.7608 14.613 17.4518 15.0563 17.1237C15.1723 17.0379 15.2092 16.8812 15.1452 16.7519L13.7824 14.0008C13.718 13.8709 13.5411 13.8505 13.4489 13.9623L13.3761 14.0505C12.9961 14.5111 12.4303 14.7778 11.8333 14.7778H10C8.89543 14.7778 8 13.8823 8 12.7778C8 11.6732 8.89543 10.7778 10 10.7778H10.702C10.8214 10.7778 10.9346 10.7244 11.0105 10.6323L12.5823 8.72723C13.0206 8.19596 13.7014 7.92758 14.3843 8.01688C15.0672 8.10618 15.6562 8.54058 15.9431 9.16669L16.7458 10.9181C16.8301 11.1018 17.0695 11.1508 17.2441 11.049C17.5413 10.8759 17.8858 10.7778 18.25 10.7778H19.4384C19.5894 10.7778 19.7177 10.6656 19.7301 10.5151C19.7432 10.3556 19.75 10.1938 19.75 10.0298C19.75 7.3293 17.3809 5.25 14.6 5.25C13.1665 5.25 11.9052 5.92214 11 6.79183C10.0948 5.92214 8.83347 5.25 7.4 5.25Z"
      fill="currentColor"
    />
    <path
      d="M14.8068 9.68751C14.6992 9.45272 14.4783 9.28982 14.2222 9.25633C13.9661 9.22284 13.7108 9.32348 13.5465 9.52271L11.4798 12.0278H10C9.58579 12.0278 9.25 12.3636 9.25 12.7778C9.25 13.192 9.58579 13.5278 10 13.5278H11.8333C12.0572 13.5278 12.2694 13.4278 12.4119 13.2551L13.9419 11.4005L15.7349 15.3125C15.8425 15.5473 16.0633 15.7102 16.3194 15.7437C16.5755 15.7772 16.8308 15.6765 16.9952 15.4773L18.6035 13.5278H21C21.4142 13.5278 21.75 13.192 21.75 12.7778C21.75 12.3636 21.4142 12.0278 21 12.0278H18.25C18.0261 12.0278 17.8139 12.1278 17.6715 12.3005L16.5998 13.5995L14.8068 9.68751Z"
      fill="currentColor"
    />
  </svg>
);