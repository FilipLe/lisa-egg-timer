declare module 'react-howler' {
    import { Component } from 'react';

    interface HowlProps {
        src: string | string[];
        playing?: boolean;
        loop?: boolean;
        volume?: number;
        mute?: boolean;
        preload?: boolean;
        onLoad?: () => void;
        onPlay?: () => void;
        onPause?: () => void;
        onStop?: () => void;
        onEnd?: () => void;
    }

    export class Howl extends Component<HowlProps> {}
    export class Howler extends Component {}
}