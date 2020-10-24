import { AppProps } from 'next/app';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

import './styles.css';

interface WorkboxWindow extends Window {
  /* eslint-disable-next-line */
  workbox: any;
}
declare let window: WorkboxWindow;

const variants: Variants = {
  animate: {
    opacity: 1,
    translateY: 0,
    transition: { ease: 'easeOut', duration: 0.3 },
  },
  intial: {
    opacity: 0,
    translateY: 2,
  },
  exit: {
    opacity: 0,
    transition: { ease: 'easeIn', duration: 0.1 },
  },
};

const Notification = ({ showNotification, onNotificationClose }) => {
  const handleClose = () => {
    onNotificationClose();
  };
  return (
    <AnimatePresence>
      {showNotification && (
        <motion.div
          key="notification"
          initial={'intial'}
          animate={'animate'}
          exit={'exit'}
          variants={variants}
          className="fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-end sm:justify-end"
        >
          <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto">
            <div className="rounded-lg shadow-xs overflow-hidden">
              <div className="p-4">
                <div className="flex items-center">
                  <div className="w-0 flex-1 flex justify-between">
                    <p className="w-0 flex-1 text-sm leading-5 font-medium text-gray-900">
                      A newer version of this web app is available.
                    </p>
                    <button
                      className="ml-3 flex-shrink-0 text-sm leading-5 font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                      onClick={handleClose}
                    >
                      Reload
                    </button>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex">
                    <button
                      className="inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
                      onClick={handleClose}
                    >
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const CustomApp = ({ Component, pageProps, router }: AppProps) => {
  const [showNotification, setShowNotification] = useState(false);
  const onNotificationClose = () => {
    setShowNotification(false);
    setTimeout(() => {
      if (
        typeof window !== 'undefined' &&
        'serviceWorker' in navigator &&
        window.workbox !== undefined
      ) {
        const wb = window.workbox;
        wb.addEventListener('controlling', (event) => {
          window.location.reload();
        });
        wb.messageSW({ type: 'SKIP_WAITING' });
      }
    }, 100);
  };
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      window.workbox !== undefined
    ) {
      const wb = window.workbox;
      const promptNewVersionAvailable = (event) => {
        setShowNotification(true);
      };
      wb.addEventListener('waiting', promptNewVersionAvailable);
      wb.addEventListener('externalwaiting', promptNewVersionAvailable);
      wb.register();
    }
  }, []);
  return (
    <AnimatePresence exitBeforeEnter>
      <>
        <Component {...pageProps} key={router.route} />
        <Notification
          showNotification={showNotification}
          onNotificationClose={onNotificationClose}
        />
      </>
    </AnimatePresence>
  );
};

export default CustomApp;
