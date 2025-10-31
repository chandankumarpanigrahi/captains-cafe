"use client";
import { useDroppable } from "@dnd-kit/core"

import { useCalendarDnd } from "@/components/event-calendar"
import { cn } from "@/lib/utils"

export function DroppableCell({
  id,
  date,
  time,
  children,
  className,
  onClick
}) {
  const { activeEvent } = useCalendarDnd()

  const { setNodeRef, isOver } = useDroppable({
    id,
    data: {
      date,
      time,
    },
  })

  // Format time for display in tooltip (only for debugging)
  const formattedTime =
    time !== undefined
      ? `${Math.floor(time)}:${Math.round((time - Math.floor(time)) * 60)
          .toString()
          .padStart(2, "0")}`
      : null

  return (
    <div
      ref={setNodeRef}
      onClick={onClick}
      className={cn(
        "flex h-full flex-col overflow-hidden px-0.5 py-1 data-dragging:bg-accent sm:px-1",
        className
      )}
      title={formattedTime ? `${formattedTime}` : undefined}
      data-dragging={isOver && activeEvent ? true : undefined}>
      {children}
    </div>
  );
}
