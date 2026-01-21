import homeIcon from "../assets/home.svg"
import profileIcon from "../assets/profile.svg"
import questionsIcon from "../assets/questions.svg"

export function Navbar() {
  const buttonClasses = "flex items-center justify-center cursor-pointer w-6 h-6"
  return (
    <div className="flex flex-col justify-center gap-4 bg-[#3B82F6] z-50 w-8 h-36 border border-[#2563EB] rounded-tl-[100px] rounded-bl-[100px] fixed right-0 top-1/2 -translate-y-1/2">
      <button className={buttonClasses}><img src={homeIcon} /></button>
      <button className={buttonClasses}><img src={profileIcon} /></button>
      <button className={buttonClasses}><img src={questionsIcon} /></button>
    </div >
  )
}
