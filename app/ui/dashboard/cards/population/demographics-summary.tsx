import { EnglishLearnerAtRiskChart, EthnicityAtRiskChart, GenderAtRiskChart } from "../../../charts/risk-demographics-charts";
import { DonutChartEnglishLearner, DonutChartEthnicity, DonutChartGender } from "../../../charts/total-demographics-charts";

export function GenderPopulationToRiskChartGroup({

}: {

}) {
  return (
    // Main div
    <div className='flex flex-row'>
      <div className='flex flex-col bg-zinc-100 items-center mr-2 rounded-xl shadow-md basis-1/3'>
        <div className='py-10 scale-125'>
          <DonutChartGender/>
        </div>
        
        <div className='pt-10 pb-6 scale-125'>
          <GenderAtRiskChart/>
        </div>
      </div>

      <div className='flex flex-col bg-zinc-100 items-center mr-2 rounded-xl shadow-md basis-1/3'>
        <div className='py-10 scale-125'>
          <DonutChartEthnicity/>
        </div>
        
        <div className='pt-10 pb-6 scale-125'>
          <EthnicityAtRiskChart/>
        </div>
      </div>

      <div className='flex flex-col bg-zinc-100 items-center mr-2 rounded-xl shadow-md basis-1/3'>
        <div className='py-10 scale-125'>
          <DonutChartEnglishLearner/>
        </div>
        
        <div className='pt-10 pb-6 scale-125'>
          <EnglishLearnerAtRiskChart/>
        </div>
      </div>
    </div>
  );
}