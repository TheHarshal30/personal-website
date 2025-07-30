'use client'
import { TextLoop } from '@/components/ui/text-loop'

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-100 px-0 py-4">
      <div className="flex items-center justify-between">
        <a href="https://github.com/theharshal30" target="_blank">
          <TextLoop className="text-xs text-zinc-500">
            <span>Hey</span>
            <span>Whats up?</span>
            <span>Hope you're doing good!</span>
          </TextLoop>
        </a>
      </div>
    </footer>
  )
}
