import React from 'react'
import Typed from 'typed.js'
import { Twemoji } from '../Twemoji'

export function TypedBios() {
  let el = React.useRef(null)
  let typed = React.useRef(null)

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    })
    return () => typed.current.destroy()
  }, [])

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          I'm aliased as <b className="font-medium">Mohsin</b> at work.
        </li>
        <li>I'm a learner, builder, and freedom seeker.</li>
        <li>
          I live in <b className="font-medium">Hyderabad, India</b>.
        </li>
        <li>
          I was born in the beautiful city <b className="font-medium">Mumbai</b>.
        </li>
        <li>
          My first programming language I learned was <b className="font-medium">PHP</b>.
        </li>
        <li>I love web development.</li>
        <li>I'm focusing on building eCommerce software.</li>
        <li>I work mostly with JS/TS technologies.</li>
        {/* <li>I'm Tu Le's husband.</li> */}
        <li>
          I'm a cat-person <Twemoji emoji="dog" />.
        </li>
        <li>
          I'm a sport-guy. I love
          <span className="ml-1">
            {/* <Twemoji emoji="soccer-ball" />, */}
            <Twemoji emoji="man-swimming" />,
            <Twemoji emoji="ping-pong" />,
            <Twemoji emoji="volleyball" />
          </span>
          .
        </li>
        <li>I love watching movies.</li>
        {/* <li>
          I love playing <Twemoji emoji="musical-keyboard" /> & <Twemoji emoji="guitar" />.
        </li> */}
        <li>I love sufi music.</li>
        <li>
          I love playing chess <Twemoji emoji="chess-pawn" />.
        </li>
        <li>
          I love playing video game <Twemoji emoji="video-game" />, GAT is my favorite one.
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}
