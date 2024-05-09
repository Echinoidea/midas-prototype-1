import { Text } from '@geist-ui/core';
import { ConfidenceIntervalVisualizer } from '../../confidence-visualizer';

export function CardConfidenceVisualizer({
  confidence,
  confidenceThresholds,
}: {
  confidence: number;
  confidenceThresholds: number[];
}) {

  return (
    <div>
      <div className="rounded-xl p-4 bg-zinc-100 shadow-md">
        <h3 className="text-lg font-medium text-slate-800 mb-2"> MIDAS Risk Confidence </h3>

        <div className=''>
          <div className='flex flex-col items-center bg-zinc-50 rounded-xl h-20 shadow-sm'>
          <Text className='text-md'> Missing variables </Text>
          <Text className='text-4xl'> {1} </Text>
          <ConfidenceIntervalVisualizer confidence={confidence} thresholds={confidenceThresholds}/>
          </div>
        </div>
      </div>
    </div>
  );
}