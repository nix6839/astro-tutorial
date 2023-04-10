import { createSignal } from 'solid-js';

import type { Component } from 'solid-js';

const Greeting: Component<{ messages: string[] }> = (props) => {
  const [greeting, setGreeting] = createSignal(props.messages[0]);

  const randomMessage = () =>
    props.messages[Math.floor(Math.random() * props.messages.length)];

  return (
    <div>
      <h3>{greeting()}! Thank you for visiting!</h3>
      <button
        type={'button'}
        onClick={() => {
          setGreeting(randomMessage());
        }}
      >
        Now Greeting
      </button>
    </div>
  );
};

export default Greeting;
