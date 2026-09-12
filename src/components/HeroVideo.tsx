"use client";

import { useRef, useState } from "react";
import { track } from "@/lib/track";

const LOOP = "/video/tutezy-hero-loop.mp4";
const FULL = "/video/tutezy-lesson-full.mp4";
const POSTER = "/video/tutezy-hero-poster.jpg";

/**
 * Real product footage in the hero: a muted 45-second loop of the opening of a
 * lesson (board draws, first check, re-explanation). "Watch the full lesson"
 * swaps in the complete 4-minute recording with sound and controls; that file
 * is only fetched on click.
 */
export function HeroVideo() {
  const [full, setFull] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);
  const watchFull = () => {
    setFull(true);
    track("hero_video_full");
    // Let React swap the source, then play with sound from the top.
    requestAnimationFrame(() => {
      const v = ref.current;
      if (!v) return;
      v.muted = false;
      v.currentTime = 0;
      v.play().catch(() => {});
    });
  };
  return (
    <figure className="card-hard relative overflow-hidden p-0">
      <div className="flex items-center gap-1.5 border-b-2 border-ink bg-paper-2 px-3 py-2">
        <span className="size-2.5 rounded-full bg-signal" />
        <span className="size-2.5 rounded-full bg-sticky" />
        <span className="size-2.5 rounded-full bg-mint" />
        <span className="ms-2 truncate font-display text-xs font-semibold text-ink-500">Physics · Transmission of heat energy · a real lesson, unedited</span>
        <span className="ms-auto rounded-full bg-ink px-2 py-0.5 font-display text-[10px] font-bold uppercase tracking-wide text-paper">{full ? "Full lesson" : "Live"}</span>
      </div>
      <video
        key={full ? "full" : "loop"}
        ref={ref}
        className="block aspect-[960/488] w-full bg-white"
        src={full ? FULL : LOOP}
        poster={POSTER}
        autoPlay
        muted={!full}
        loop={!full}
        playsInline
        controls={full}
        preload={full ? "auto" : "metadata"}
        aria-label="Recording of a Tutezy lesson on how heat travels: the teacher draws the board, asks a question, and re-explains"
      />
      {!full && (
        <button
          type="button"
          onClick={watchFull}
          className="btn-hard absolute bottom-4 start-4 flex items-center gap-2 rounded-full bg-signal px-4 py-2 font-display text-sm font-bold text-white"
        >
          <span aria-hidden="true">▶</span> Watch the full 4-minute lesson · with sound
        </button>
      )}
      <figcaption className="sr-only">Screen recording of the Tutezy learner app teaching conduction, convection and radiation.</figcaption>
    </figure>
  );
}
