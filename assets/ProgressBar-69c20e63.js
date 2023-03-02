const e=`import { useEffect, useState } from "react";
import { ProgressBar, VerticalDivider, YFlexBox } from "autui";

export default function ProgressBarExample() {
  const total = 100;
  const [buffered, setBuffered] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setBuffered((b) => Math.min(b + 10, 100));
      setProgress((p) => (p + 5) % total);
    }, 100);
    return () => clearInterval(id);
  });

  const [cProgress, setCProgress] = useState(0);

  return (
    <YFlexBox style={{ alignItems: "stretch" }}>
      <ProgressBar total={total} progress={progress} buffered={buffered} />
      <VerticalDivider />
      <ProgressBar
        total={total}
        progress={cProgress}
        buffered={total}
        onChange={setCProgress}
        style={{ height: 8 }}
      />
    </YFlexBox>
  );
}
`;export{e as default};
