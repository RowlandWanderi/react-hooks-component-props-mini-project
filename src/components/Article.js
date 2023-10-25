import React from 'react'

export default function Article({title,date ="January 1, 1970",preview,minutes}) {
    const coffeeCup = Math.ceil(minutes / 5);
  const bentoBox = Math.ceil(minutes / 10);
  const coffeeCupEmoji = "☕️";
  const bentoBoxEmoji = "🍱";
  const coffeeCupEmojiRepeat = coffeeCupEmoji.repeat(coffeeCup);
  const bentoBoxEmojiRepeat = bentoBoxEmoji.repeat(bentoBox);
  return (
    <div>
        <article>
            <h3>{title}</h3>
            <small>{date}{ minutes < 30 ? coffeeCupEmojiRepeat : bentoBoxEmojiRepeat}{" "}
            {minutes} min read</small>
            <p>{preview}</p>
        </article>
    </div>
  )
}
