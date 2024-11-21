 import Image from "next/image"
import UpdateTab from "./UpdateTab"
import QuickStats from "./QuickStats"
import Compare from "./Compare"
import Syllabus from "./Syllabus"
import QuestionA from "./QuestionA"

 




const SkillTest = () => {
  return (
    <section className=" flex p-10 flex-col sm:flex-row font-inter gap-5 ">
      <div className=" flex flex-col gap-5 mr-5 w-full sm:w-[60%] ">

        {/* HTML */}
        <UpdateTab/>
         {/* Quick stats */}
        <QuickStats/>
       {/* Comparison Graph */}
        <Compare/>

      </div>


      <div className="flex flex-col gap-5 sm:w-[40%] w-full ">
      
        <Syllabus/>
        <QuestionA/>
       
      </div>
      
    </section>
  )
}

export default SkillTest
