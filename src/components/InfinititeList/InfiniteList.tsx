import React from 'react';

interface InfiniteListProps {
  onLoadMore: () => void;
  onOverflowing: () => void;
}

export const InfiniteList: React.SFC<InfiniteListProps> = ({ children, onLoadMore, onOverflowing }) => {
  const [isTicking, setIsTicking] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (!isTicking) {
      // using `requestAnimationFrame` for some debouncing
      // see: https://gist.github.com/1Marc/4770173
      window.requestAnimationFrame(() => {
      
        const scrollPosition = window.scrollY;

        if (scrollPosition + window.innerHeight >= document.body.scrollHeight) {
          onLoadMore();
          onOverflowing();
        }

        setIsTicking(false);
      });
    }
    setIsTicking(true);
  };

  return (
    <div>{children}</div>
  )
};
