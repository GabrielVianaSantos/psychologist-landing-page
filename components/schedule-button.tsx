"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export function ScheduleButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href="#contato">
      <Button
        size="lg"
        className="rounded-full text-white transition-colors"
        style={{
          backgroundColor: isHovered ? 'oklch(0.60 0.04 160)' : 'oklch(0.55 0.04 160)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {"Agendar Consulta"}
      </Button>
    </Link>
  )
}
