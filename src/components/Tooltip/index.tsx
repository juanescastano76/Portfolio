import { JSX, Show, createSignal } from "solid-js";

type Props = {
  children: JSX.Element;
};

function Tooltip(props: Props) {
  const [isVisible, setIsVisible] = createSignal(false);
  const [clickCount, setClickCount] = createSignal(0);
  const [autodestrucion, setAutodestruction] = createSignal(false);
  const randomFn = () => {
    setAutodestruction(true);
    setTimeout(() => {
      setAutodestruction(false);
    }, 10000);
  };
  const messages = [
    "Hi there!",
    "Clicked again?",

    "Still here?",
    "Persistent, aren't you?",
    "What's up?",
    "Again? Really?",
    "You're curious!",
    "Not cool!",
    "Give it a break!",
    "That's annoying!",
    "Hands off!",
    "No more clicks!",
    "Seriously?!",
    "Ouch! That hurts!",
    "You're persistent!",
    "Why the curiosity?",
    "I'm getting tired!",
    "I'm bored!",
    "Enough's enough!",
    "Find another hobby!",
    "Stop, please!",
    "Okay, get ready",
    "I will destroy this",
    "Last warning",

    randomFn,
  ];

  const currentMessage: any = () => {
    const count = clickCount();
    if (count >= messages.length) {
      return messages[messages.length - 1];
    }
    return messages[count];
  };

  return (
    <div>
      <div class="relative inline-block">
        <div
          onMouseDown={() => {
            setIsVisible(!isVisible());
            if (isVisible()) {
              setClickCount((count) => count + 1);
            }
          }}
          onMouseUp={() => {
            setIsVisible(false);
          }}
          onTouchStart={() => {
            setIsVisible(!isVisible());
            if (isVisible()) {
              setClickCount((count) => count + 1);
            }
          }}
          onTouchEnd={() => {
            setIsVisible(false);
          }}
        >
          {props.children}
        </div>

        <Show when={isVisible()}>
          <div class="absolute left-1/2 -translate-x-1/2 -translate-y-24 mt-1 w-auto max-h-[70px] p-2 bg-black text-white text-center rounded-lg z-10 shadow-custom border border-primary-500 whitespace-normal after:content-[''] after:block after:rotate-45 after:w-4 after:h-4 after:shadow-custom after:absolute after:-bottom-2 after:-translate-x-1/2 after:left-1/2 after:bg-black after:z-20">
            <p class="w-max">{currentMessage()}</p>
          </div>
        </Show>
      </div>
      {/* ESTE DIV de abajo */}
      {/* Tambien añadir ocpion cambiar idiomas */}
      <div class="flex items-center justify-center">
        {autodestrucion() ? (
          <>
            <img
              src="/giphy.gif"
              class="w-[100%] h-[100%]  absolute left-0 top-0 z-[1000] text-center flex justify-center 2s ease-in-out imagen "
            ></img>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Tooltip;
