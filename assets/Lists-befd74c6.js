const t=`import { List, ListItem } from "autui";
import { useState } from "react";

const items: number[] = [];

for (let i = 0; i < 50; i += 1) {
  items.push(i);
}

export default function Lists() {
  const [active, setActive] = useState(0);
  return (
    <List style={{ height: 420, overflow: "auto" }}>
      {items.map((it) => (
        <ListItem key={it} active={active === it} onClick={() => setActive(it)}>
          Random Item :{it}
        </ListItem>
      ))}
    </List>
  );
}
`;export{t as default};
