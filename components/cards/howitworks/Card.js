import backgroundImage from "@/assets/separator.png"
import Image from "next/image"
function HowItWorks({cardDetails}) {
  const {id, stepNumber, title, desc} = cardDetails
  return (
    <div className="flex flex-col border h-96 w-96 rounded-xl shadow-sm hover:shadow-lg transition-all ease-in-out duration-300 items-center p-5">
      <div>icon</div>
      <h3 className="text-2xl py-8">Step {stepNumber}</h3>
      <h4 className="text-xl ">{title}</h4>
      <p>{desc}</p>
      <Image src={backgroundImage} alt="separator"></Image>
    </div>
  )
}

export default HowItWorks