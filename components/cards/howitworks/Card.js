import backgroundImage from "@/assets/separator.png"
import Image from "next/image"
function HowItWorks({cardDetails}) {
  const {id, stepNumber, title, desc} = cardDetails
  return (
    <div className="flex flex-col sm:h-96 sm:w-96 lg:h-auto lg:w-auto rounded-xl transition-all ease-in-out duration-300 items-center p-5">
      <div>icon</div>
      <h3 className="text-2xl py-4">Step {stepNumber}</h3>
      <h4 className="text-xl ">{title}</h4>
      <p>{desc}</p>
      <Image src={backgroundImage} alt="separator"></Image>
    </div>
  )
}

export default HowItWorks