"use client";

import Accordion from "react-bootstrap/Accordion";

export default function FaqAccordion({ items = [], defaultActive = "0" }) {
  return (
    <Accordion defaultActiveKey={defaultActive} className="yc-accordion" flush>
      {items.map((item, i) => (
        <Accordion.Item eventKey={String(i)} key={item.q}>
          <Accordion.Header as="h3">{item.q}</Accordion.Header>
          <Accordion.Body>{item.a}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
