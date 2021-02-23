import { 
    GridSectionStarts,
    SmallGridSectionStarts,
    MediumGridSectionStarts,
    LargeGridSectionStarts,
    ExtraLargeGridSectionStarts,
    ExtraExtraLargeGridSectionStarts,
    GridSectionEnds,
    SmallGridSectionEnds,
    MediumGridSectionEnds,
    LargeGridSectionEnds,
    ExtraLargeGridSectionEnds,
    ExtraExtraLargeGridSectionEnds 
} from '~/jumpstart/GridSection'

import { 
    GridSectionSpans,
    SmallGridSectionSpans,
    MediumGridSectionSpans,
    LargeGridSectionSpans,
    ExtraLargeGridSectionSpans,
    ExtraExtraLargeGridSectionSpans 
} from '~/jumpstart/GridSectionSpans';

export interface GridSectionPart {
    [key: number]: string
}

export interface GridSectionBreakpointStarts {
    default: keyof typeof GridSectionStarts,
    small?: keyof typeof SmallGridSectionStarts,
    medium?: keyof typeof MediumGridSectionStarts,
    large?: keyof typeof LargeGridSectionStarts,
    extraLarge?: keyof typeof ExtraLargeGridSectionStarts,
    extraExtraLarge?: keyof typeof ExtraExtraLargeGridSectionStarts
}

export interface GridSectionBreakpointEnds {
    default: keyof typeof GridSectionEnds,
    small?: keyof typeof SmallGridSectionEnds,
    medium?: keyof typeof MediumGridSectionEnds,
    large?: keyof typeof LargeGridSectionEnds,
    extraLarge?: keyof typeof ExtraLargeGridSectionEnds,
    extraExtraLarge?: keyof typeof ExtraExtraLargeGridSectionEnds
}

export interface GridSectionBreakpointSpans {
    default: keyof typeof GridSectionSpans,
    small?: keyof typeof SmallGridSectionSpans,
    medium?: keyof typeof MediumGridSectionSpans,
    large?: keyof typeof LargeGridSectionSpans,
    extraLarge?: keyof typeof ExtraLargeGridSectionSpans,
    extraExtraLarge?: keyof typeof ExtraExtraLargeGridSectionSpans
}