// tools
import { getEventTransfer } from "slate-react"

// return
export const Paste = options => {
  const { html } = options
  return {
    onPaste(event, change) {
      const transfer = getEventTransfer(event)
      if (transfer.type !== "html") return
      if (transfer.isShift) return
      const { document } = html.deserialize(transfer.html)
      change.insertFragment(document)
      return true
    }
  }
}
