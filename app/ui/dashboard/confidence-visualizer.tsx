import clsx from 'clsx';

function Square({
  color
}: {
  color: string
}) {
  return (
    <div className={clsx(
      'w-3 h-3 mx-1',
      {
        'bg-zinc-400': color === 'gray' || color === 'grey',
        'bg-red-500': color === 'red',
        'bg-amber-300' : color === 'yellow',
        'bg-green-400' : color === 'green',
      }
      )}>
    </div>
  )
}

const colors = [
  ['red', 'gray', 'gray', 'gray', 'gray'],
  ['red', 'red', 'gray', 'gray', 'gray'],
  ['yellow', 'yellow', 'yellow', 'gray', 'gray'],
  ['green', 'green', 'green', 'green', 'gray'],
  ['green', 'green', 'green', 'green', 'green'],
]

interface ColorSelectionInterface {
  (arg0: number) : string[]
}

export function ConfidenceIntervalVisualizer({
  confidence,
  thresholds,
}: {
  confidence: number;
  thresholds: number[]
}) {

  // confidence <= 80, 80 > confidence <= 90, 90 > confidence <= 95, 
  const colorList: ColorSelectionInterface = (confidence) => {
    if (confidence <= thresholds[0]) {
      return colors[0];
    }
    else if (confidence < thresholds[1] && confidence >= thresholds[0]) {
      return colors[1];
    }
    else if (confidence < thresholds[2] && confidence >= thresholds[1]) {
      return colors[2];
    }
    else if (confidence < thresholds[3] && confidence >= thresholds[2]) {
      return colors[3];
    }
    else {
      return colors[4];
    }
  }


  return (
    <div className="flex flex-row mx-2">
      <Square color={colorList(confidence)[0]}/>
      <Square color={colorList(confidence)[1]}/>
      <Square color={colorList(confidence)[2]}/>
      <Square color={colorList(confidence)[3]}/>
      <Square color={colorList(confidence)[4]}/>
    </div>
  );
}