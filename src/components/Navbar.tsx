import homeIcon from "../assets/home.svg"
import profileIcon from "../assets/profile.svg"
import questionsIcon from "../assets/questions.svg"

export function Navbar() {
  const buttonClasses = "cursor-pointer"
  return (
    <div className="grid bg-[#3B82F6] border border-[#2563EB] rounded-tl-[100px] rounded-bl-[100px]">
      <button className={buttonClasses}><img src={homeIcon} /></button>
      <button className={buttonClasses}><img src={profileIcon} /></button>
      <button className={buttonClasses}><img src={questionsIcon} /></button>
    </div >
  )
}
