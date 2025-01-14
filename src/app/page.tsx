"use client"
import { Button } from "@/components/ui/button"

function Home() {
  return (
    <div>
      <Button onClick={() => alert(1)}>Hello world</Button>
    </div>
  )
}

export default Home