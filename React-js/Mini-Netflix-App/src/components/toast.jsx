import { useEffect, useState } from "react";

function toast({ message }) {
  const [visible, setVisible] = useState(false);

  useEffect(
    () => {
      if (message) {
        setVisible(true);
        const timer = setTimeout(() => {
          setVisible(false);
        }, 1000);
        return () => {
          clearTimeout(timer);
        };
      }
    },
    [message]
  );

  return (
    <span class={`badge d-flex align-items-center p-1 pe-2 text-danger-emphasis bg-danger-subtle border border-danger-subtle rounded-pill toast-badge ${visible ? "show" : ""}`}>
      { message }
    </span>
  );
}

export default toast;
