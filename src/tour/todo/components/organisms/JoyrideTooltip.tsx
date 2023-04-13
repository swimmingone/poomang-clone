import React from 'react';
import { TooltipRenderProps } from 'react-joyride';

const JoyrideTooltip = (props: TooltipRenderProps): JSX.Element => {
	const {
		backProps,
		continuous,
		index,
		size,
		isLastStep,
		primaryProps,
		skipProps,
		step,
		tooltipProps,
	} = props;

	return (
		<div className={'rounded bg-gray-50 py-2 px-4'} {...tooltipProps}>
			{step.title && (
				<div className={'cursor-default select-none whitespace-pre'}>{step.title}</div>
			)}
			{step.content && (
				<div className={'cursor-default select-none whitespace-pre'}>{step.content}</div>
			)}
			{step.hideFooter || (
				<div className={'mt-1 flex justify-between'}>
					<div>
						{!isLastStep && step.showSkipButton && (
							<button {...skipProps} className={'border-0 bg-transparent'}>
								건너뛰기
							</button>
						)}
					</div>
					<div>
						{index > 0 && !step.hideBackButton && (
							<button {...backProps} className={'border-0 bg-transparent'}>
								뒤로
							</button>
						)}
						<button {...primaryProps}>
							{continuous
								? step.showProgress
									? `다음 ${index + 1}/${size}`
									: '다음'
								: '닫기'}
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default JoyrideTooltip;
