import Image from "next/image"

function logo() {
  return (
    <div className="flex items-center gap-3">
      <Image src="/logo.png" alt="logo" width={40} height={40} />
      <span className="font-extrabold tracking-wide">AI Slack</span>
    </div>
  )
}

export default logo
