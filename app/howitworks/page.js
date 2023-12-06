import styles from "@/app/global.module.css"
import Card from "@/components/cards/howitworks/Card.js"

function page() {
  const data = [
                {id: 1, stepNumber: 1, title: "step 1", desc: "step 1 desc"},
                {id: 2, stepNumber: 2, title: "step 2", desc: "step 2 desc"},
                {id: 3, stepNumber: 3, title: "step 3", desc: "step 3 desc"},
                {id: 4, stepNumber: 4, title: "step 4", desc: "step 4 desc"},

              ]
  return (
    <div className={styles.page + " flex gap-5 justify-around"}>
      {data.map((details) => {return <Card key={details.id} cardDetails={details} />})}
    </div>
  )
}

export default page